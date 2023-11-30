"use client";
import React from "react";
import HomePage from "./components/home/HomePage";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
        <HomePage session={session} />
    </div>
  );
}
