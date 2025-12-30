// src/hooks/useRegister.ts
import { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import { useAuthStore } from "@/store/useAuthStore";
import type { UserRegistrationInput } from "@/schemas/UserInput";

export function useRegister() {
  const navigate = useNavigate();
  const setUser = useAuthStore((s) => s.setUser);
  const setCustomer = useAuthStore((s) => s.setCustomer);
  const setNotary = useAuthStore((s) => s.setNotary)

  const [error, setError] = useState<string | null>(null);

  const register = async (data: UserRegistrationInput) => {
    try {
      setError(null);

      await AuthService.register({
        username: data.username,
        password: data.password,
        role: data.role,
      });

      const user = await UserService.fetchUser()
      setUser(user.data)

      const login = await AuthService.login(data.username, data.password);
      localStorage.setItem("access_token", login.data.access_token);

      await AuthService.createCustomer({
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
      });
      
      navigate("/");
    } catch (e) {
      console.error(e);
      setError("Не удалось зарегистрироваться");
      throw e;
    }
  };

  return {
    register,
    error,
  };
}
