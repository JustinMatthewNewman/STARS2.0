import React from "react";

import AboutText from "./AboutText2";
import AboutInfo from "./AboutInfo2";

import AboutCards from "./AboutCards";

import Image from "next/image";
import bgLines from "../../../public/images/background/looper-pattern.svg";
import AboutText3 from "./AboutText3";
import AboutImages from "./AboutImages";

function AboutContent() {
  return (
    <div>
      <div className="container mt-6 max-w-[1400px] md:mt-64  items-center justify-center">
        <AboutCards />
        <Image
          fill={true}
          src={bgLines}
          alt="Background"
          quality={100}
          priority
          style={{
            zIndex: -1,
            marginTop: 140,
            transform: "scaleX(-1)",
          }}
        />
      </div>
      <div className="container mt-6 max-w-[1400px] md:mt-64">
        <AboutText3 />
      </div>

      {/* <div className="container flex flex-col md:flex-row max-w-[1000px]  mt-6 md:mt-64 items-center justify-center">
        <AboutInfo />
        <AboutText />
      </div>

      <div className="container mt-6 max-w-[1400px] md:mt-64">
        <AboutImages />
      </div> */}
    </div>
  );
}

export default AboutContent;
