
import React from 'react'

export default function MoreText4() {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-right mt-12 mb-12 gap-4 max-w-[1200px] text-center">

        <h2
        style={{
          marginLeft: "12px",
          fontSize: "1.8rem",
          fontWeight: "700",
          fontFamily:
          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
        }}
        className="leading-tight"
        >
        Ordinary devices become vessels of {" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(45deg, rgba(230,122,122,1) 0%, rgba(139,38,240,1) 50%, rgba(255,0,249,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
         extraordinary 
        </span>
        {" "}stories, I mend not just machines but the very fabric of {" "}
    <span
              className="hover:scale-110 ease-in duration-300"

          style={{
            backgroundImage:
            "linear-gradient(90deg, rgba(166,155,23,1) 0%, rgba(255,252,185,1) 35%, rgba(227,220,135,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
            memories
        </span>
        {" "} thought to be lost {" "}
        <span
        className="hover:scale-110 ease-in duration-300"
          style={{
            backgroundImage:
            "linear-gradient(345deg, rgba(230,122,122,1) 0%, rgba(139,38,240,1) 50%, rgba(255,0,249,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          >
            forever
        </span>
        .
      </h2>
    </div>
  )
}

