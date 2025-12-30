import React, { useState } from "react";
import {Form, Input, Button} from "@heroui/react";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router";
import { EyeIcon, EyeOffIcon } from "../../shared/Icons";

export default function LoginForm() {
  const navigate = useNavigate()

  const [error, setError] = useState<string | null>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const setUser = useAuthStore((s) => s.setUser)
  const setCustomer = useAuthStore((s) => s.setCustomer)

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
      navigate('/account')
      
      
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
