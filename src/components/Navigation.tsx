"use client";

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem,
  Button
} from "@heroui/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          Albums Gallery
        </Link>
      </NavbarBrand>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}