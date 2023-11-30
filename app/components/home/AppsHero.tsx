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
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-24 gap-4 max-w-[1400px]">
      <div className="flex-col items-center justify-center text-center ">
        <AppsText />
        {session ?  <Button size='lg' radius="full" className="mt-8 bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg">Try it out</Button> : <Button onPress={()=>(signIn())} size='lg' radius="full" className="mt-8 bg-gradient-to-tr from-blue-500 to-purple-500 text-white shadow-lg">Sign In</Button>}
      </div>
      <AppDisplay />
    </div>
  );
}
