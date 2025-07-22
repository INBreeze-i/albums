"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery 1", href: "/gallery/1" },
    { name: "Gallery 2", href: "/gallery/2" },
    { name: "Gallery 3", href: "/gallery/3" },
    { name: "Gallery 4", href: "/gallery/4" },
    { name: "Gallery 5", href: "/gallery/5" },
  ];

  return (
    <Navbar className="bg-white shadow-md" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit text-xl">
          Gallery Albums
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              className="font-medium"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;