import React from "react";
import AppsText from "./AppsText";
import AppDisplay from "./AppDisplay";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";

type Props = {
  session: Session | null;
};

export default function AppsHero({ session }: Props) {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-24 gap-4 max-w-[1200px]">
      <div className="items-center justify-center text-center">
        <AppsText />
      </div>
      {session ? (
          <p>Sign In</p>
        ) : (
          <p>Try it out</p>
        )}

      <AppDisplay />
    </div>
  );
}