import React from "react";

import Hero from "./AboutHero";
import AboutContent from "./AboutContent";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center">

      <div>
        <Hero />
      </div>

      <div>
        <AboutContent />
      </div>

      <div className="flex justify-center py-12">
        <Link href="/about">
          <div className="rounded-full p-4 shadow-lg cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
