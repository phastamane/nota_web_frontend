import React, { useState } from "react";
import {Form, Input, Button} from "@heroui/react";
import AuthService from "../services/AuthService";
import UserService from "../services/UserService";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [action, setAction] = React.useState<null | string>(null);
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  const setUser = useAuthStore((s) => s.setUser)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{

    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = String(formData.get('username'))
    const password = String(formData.get('password'))

    setAction(username + password)

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
      className="w-full max-w-xs flex flex-col gap-4"
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
        type="password"
      />
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}

