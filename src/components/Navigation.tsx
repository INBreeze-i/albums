'use client';

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Switch
} from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, CameraIcon } from "./Icons";
import Link from "next/link";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Navbar maxWidth="full" className="border-b">
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <CameraIcon className="w-8 h-8" />
          <p className="font-bold text-xl">Albums Gallery</p>
        </Link>
      </NavbarBrand>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            size="lg"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            isSelected={theme === 'dark'}
            onValueChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}