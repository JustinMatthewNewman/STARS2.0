"use client";
import React from "react";
import HomePage from "./components/home/HomePage";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <HomePage />
      </SessionProvider>
    </div>
  );
}
