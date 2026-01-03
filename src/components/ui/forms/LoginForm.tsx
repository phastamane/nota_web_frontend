import React, { useState } from "react";
import {Form, Input, Button} from "@heroui/react";
import AuthService from "../../../services/AuthService";
import UserService from "../../../services/ProfileService";
import { useAuthStore } from "../../../store/useAuthStore";
import { EyeIcon, EyeOffIcon } from "../../../shared/Icons";
import api from "@/http";
import type { ICustomer } from "@/types/pofile/ICustomer";
import type { INotary } from "@/types/pofile/INotary";

async function getProfileByRole(role: string) {
  if (role === "customer" || role === "admin") {
    return await api.get<ICustomer>("customers/me");
  }
  if (role === "notary") {
    return await api.get<INotary>("notaries/me");
  }
  return null;
}

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const setUser = useAuthStore((s) => s.setUser)
  const setCustomer = useAuthStore((s) => s.setCustomer)
  const setNotary = useAuthStore((s) => s.setNotary)

  const togglePasswordVisibility = () => setIsPasswordVisible((v) => !v)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{

    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = String(formData.get('username'))
    const password = String(formData.get('password'))

    try {
      const res = await AuthService.login(username, password)
      localStorage.setItem('access_token', res.data.access_token)

      const user = await UserService.fetchUser()
      setUser(user.data)
      const profileRes = await getProfileByRole(user.data.role)
      if (profileRes?.data) {
        if (user.data.role === "notary") {
          setNotary(profileRes.data as INotary)
        } else {
          setCustomer(profileRes.data as ICustomer)
        }
      }
      
      
    } catch (error) {
      console.error('Ошибка:',error)
      setError("Неверный логин или пароль")
    }
  }

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 items-center"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a password"
        label="Password"
        labelPlacement="outside"
        name="password"
        placeholder="Enter your password"
        type={isPasswordVisible ? "text" : "password"}
        endContent={
          <button
            type="button"
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            className="text-default-400 focus:outline-none cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <EyeIcon/>
            ) : (
              <EyeOffIcon/>
            )}
          </button>
        }
      />
      
        <Button className="bg-[#ffba00] min-w-full" type="submit">
          Войти
        </Button>
      
      {error && (
        <div className="text-small text-red-900">
          {error}
        </div>
      )}
    </Form>
  );
}
