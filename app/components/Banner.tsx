"use client";
import * as React from "react";

export function Banner() {
  const textContent = Array.from({ length: 5 }).map((_, idx) => (
    <span
      key={idx}
      className="inline-block px-10"
    >
      Knitting is HOT&FUN
    </span>
  ));

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 py-7 w-full text-4xl tracking-tighter leading-none text-indigo-900 bg-red-100 border-solid border-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-container flex">
          <div className="flex flex-shrink-0">
            {textContent}
          </div>
          <div className="flex flex-shrink-0">
            {textContent}
          </div>
        </div>
      </div>
    </section>
  );
}