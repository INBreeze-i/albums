"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import NavBar from "./NavBar";
import Banner from "./Banner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <HeroUIProvider>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Banner />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </HeroUIProvider>
  );
};

export default Layout;