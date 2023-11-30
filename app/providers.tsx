"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <NextUIProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          themes={["light", "dark", "modern"]}
        >
          <SessionProvider>
          {children}
          </SessionProvider>
        </NextThemesProvider>
      </NextUIProvider>
  );
}
