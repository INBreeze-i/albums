"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/Navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navigation />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </ThemeProvider>
    </HeroUIProvider>
  );
}