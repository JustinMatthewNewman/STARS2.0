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
      <div className="flex-col items-center justify-center text-center ">
        <AppsText />
        {session ? <p>Sign In</p> : <Button radius="full" className="mt-8 bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg">Try it out</Button>}
      </div>
      <AppDisplay />
    </div>
  );
}
