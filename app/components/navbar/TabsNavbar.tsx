"use client";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useMediaQuery } from "@react-hook/media-query";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CircularProgress } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";

import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

import { useSession } from "next-auth/react";



export default function TabsNavbar() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isAboveLG = useMediaQuery("(min-width: 1024px)");
  const pathname = usePathname();

  // Split the pathname by '/' to get parts
  const pathParts = pathname.split("/");
  const firstPart = pathParts.length > 1 ? `/` + pathParts[1] : `/` + pathname;

  const { push } = useRouter();

  useEffect(() => {
    if (isAboveLG) {
      setIsOpen(false);
    }
  }, [isAboveLG]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // When the firstPart changes, set loading to true
    setLoading(true);

    // Simulate an asynchronous operation (e.g., API call) here
    // Once the operation is completed, set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 100); // You can adjust the timeout as needed
  }, [firstPart]); // Listen for changes in firstPart

  if (!mounted) return null;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Graphics", href: "/graphics" },
    { label: "Render", href: "/render" },
    { label: "More", href: "/more" },
  ];

  const handleTabSelection = (key: any) => {
    if (!loading && key != firstPart) {
      setLoading(true);
    }
    push(key);
  };

  return (
    <Navbar
      isBordered
      isBlurred={false}
      isMenuOpen={isOpen}
      className={`fixed w-full h-20 z-[100]`}
    >
      <NavbarContent className="hidden lg:flex gap-4">
        <NavbarBrand>
          <Link color="foreground" href="/">
            STARS
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="lg:hidden">
        <Button
          style={{ zIndex: 2, display: "flex" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <NavbarMenuToggle style={{ pointerEvents: "none" }} />
        </Button>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-4">
        <Tabs
          aria-label="Dynamic tabs"
          size={"lg"}
          radius="full"
          items={menuItems}
          onSelectionChange={handleTabSelection}
          selectedKey={firstPart}
        >
          {(item) => <Tab key={item.href} title={item.label}></Tab>}
        </Tabs>
      </NavbarContent>
      <NavbarContent justify="end">
        {loading && (
          <CircularProgress
            size="md"
            color="secondary"
            aria-label="Loading..."
          />
        )}

        <NavbarItem>
          <ThemeSwitcher />
         
        </NavbarItem>
        <NavbarItem>
        {session ? (
            <Button
              className="m-2"
              color="danger"
              radius="full"
              size="md"
              onPress={() => signOut()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </Button>
          ) : (
            <Button
              className="m-2"
              color="primary"
              radius="full"
              size="md"
              onPress={() => signIn()}
            >
              Sign In
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-5" key={`${item}-${index}`}>
            <Link
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full hover:text-fuchsia-600"
              href={item.href}
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
