"use client";
import React, { useEffect, useState } from "react";
import AppsHero from "./AppsHero";
import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import AppsHero2 from "./AppsHero2";
import { Session } from "next-auth";
type Props = {
  session: Session | null;
};
export default function HomePage({ session }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <AppsHero session={session} />
      <AppsHero2 />

      <Image
        className="hidden md:flex"
        fill={true}
        src={bgLines}
        alt="Background"
        quality={100}
        priority
        style={{
          zIndex: -1,
          marginTop: 70,
        }}
      />
    </div>
  );
}
