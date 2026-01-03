import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as LinkUI
} from "@heroui/react";
import { useScrollToSection } from "../../../hooks/useScrollToSection";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "./nav.constants";
import { NavAuth } from "./NavAuth";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = useState("hero");

  const scrollToSection = useScrollToSection(
    () => setIsMenuOpen(false),
    setActive
  );

  return (
    <Navbar
      position="sticky"
      classNames={{
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
          "data-[active=true]:after:bg-[#ffba00]",
          "cursor-pointer",
          "text-[#ffba00]"
          
        ],
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <img src="logo.svg" alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {NAV_ITEMS.map((item) => (
        <NavbarItem key={item.id} isActive={active === item.id}>
          <LinkUI className="text-yellow-500" onClick={scrollToSection(item.id)}>{item.label}</LinkUI>
        </NavbarItem>
      ))}

      <NavbarContent justify="end">
        <NavAuth />
      </NavbarContent>

      <NavbarMenu>
        {/* мобильные пункты — те же обработчики */}
        <NavbarMenuItem>
          <LinkUI
            href="#benefits"
            onClick={scrollToSection("benefits")}
            size="lg"
          >
            Функции
          </LinkUI>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LinkUI
            href="#pricing"
            onClick={scrollToSection("pricing")}
            size="lg"
          >
            Услуги
          </LinkUI>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
