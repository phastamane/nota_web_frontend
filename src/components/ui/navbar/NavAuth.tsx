// components/navbar/NavAuth.tsx
import { NavbarItem, Button } from "@heroui/react";
import { Link } from "react-router";
import { useAuthStore } from "../../../store/useAuthStore";
import User from "../User";

export function NavAuth() {
  const isAuth = useAuthStore(s => s.isAuth);

  if (isAuth) {
    return (
      <NavbarItem>
        <User />
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
