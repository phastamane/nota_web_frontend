import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link as LinkUI, Button } from "@heroui/react";
import { useLenis } from "lenis/react";
import { Link  } from "react-router";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = useState('hero')
  const lenis = useLenis();

  const scrollToSection = (id: string) => (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    lenis?.scrollTo(el, {
      offset: -100,
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // мягкая кривая
    });
    setIsMenuOpen(false);
    setActive(id)
  };

  return (
    <Navbar position="sticky"       classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Link to='/'><img src="logo.svg" alt="Logo" /></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive = {active === "hero"}>
          <LinkUI  onClick={scrollToSection("hero")}>Главная</LinkUI>
        </NavbarItem>
         <NavbarItem isActive = {active === "benefits"}>
          <LinkUI onClick={scrollToSection("benefits")}>Функции</LinkUI>
        </NavbarItem>
        <NavbarItem isActive = {active === "pricing"}>
          <LinkUI onClick={scrollToSection("pricing")}>Услуги</LinkUI>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/login" >Войти</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} to = "/login" color="primary" variant="flat">
            Зарегистрироваться
            
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* мобильные пункты — те же обработчики */}
        <NavbarMenuItem>
          <LinkUI href="#benefits" onClick={scrollToSection("benefits")} size="lg">Функции</LinkUI>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LinkUI href="#pricing" onClick={scrollToSection("pricing")} size="lg">Услуги</LinkUI>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
