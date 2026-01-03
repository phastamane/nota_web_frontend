// components/navbar/NavAuth.tsx
import { NavbarItem, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";
import User from "../User";
import { ExitIcon } from "@/shared/Icons";
import AuthService from "@/services/AuthService";
import useLogout from "@/hooks/useLogout";

export function NavAuth() {
  const isAuth = useAuthStore(s => s.isAuth);
  const logout = useLogout()

  if (isAuth) {
    return (
      <NavbarItem className="flex gap-5">
        <User />
        <Button color={'primary'} variant="ghost" isIconOnly startContent={<ExitIcon/>} onPress={logout}/>
      </NavbarItem>
    );
  }

  return (
    <>
      <NavbarItem className="hidden lg:flex text-black">
        <Link to="/login">Войти</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} to="/register" className="bg-[#ffba00]" variant="flat">
          Зарегистрироваться
        </Button>
      </NavbarItem>
    </>
  );
}
