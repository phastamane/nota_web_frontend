// src/hooks/useRegister.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "@/services/AuthService";
import { useAuthStore } from "@/store/useAuthStore";
import type { UserRegistrationInput } from "@/schemas/UserInput";
import ProfileService from "@/services/ProfileService";

export function useRegister() {
  const navigate = useNavigate();
  const setUser = useAuthStore((s) => s.setUser);
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

      const login = await AuthService.login(data.username, data.password);
      localStorage.setItem("access_token", login.data.access_token);

      if(data.role === 'customer' || data.role === 'admin'){
        const user = await ProfileService.fetchUser()
        setUser(user.data)

      await AuthService.createCustomer({
        phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
      });
    }else if(data.role === 'notary'){
        await AuthService.createNotary({
          phone_number: data.phone_number,
        first_name: data.first_name,
        last_name: data.last_name,
        license_number: data.license_number,
        inn: data.inn,
        description: data.description
        })
        const notaries = await ProfileService.fetchNotary()
        setNotary(notaries.data)
    }
      
      navigate("/", {replace: true});
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
