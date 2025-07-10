"use client";
import * as React from "react";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap gap-10 justify-between items-center px-10 w-full text-oczko-violet-500 bg-oczko-green-100 border-solid border-[0.5px] border-neutral-800 min-h-20 max-md:px-5 max-md:max-w-full">
      <a href="#" className="flex gap-2 justify-center items-center self-stretch my-auto text-4xl tracking-tighter leading-none whitespace-nowrap">
        <h1 className="self-stretch my-auto text-oczko-violet-500 font-salted">
          OCZKO.WORKSHOPS
        </h1>
      </a>
      <nav className="flex gap-4 items-center self-stretch my-auto text-base">
        <a
          href="#about"
          className="flex gap-2 justify-center items-center m-2 self-stretch border-b-1 border-transparent hover:border-oczko-violet-500 transition-all duration-200 leading-none"
        >
          <span className="self-stretch text-oczko-violet-500">O NAS</span>
        </a>
        <a
          href="#workshops"
          className="flex gap-2 justify-center items-center m-2 self-stretch whitespace-nowrap border-b-1 border-transparent hover:border-oczko-violet-500 transition-all duration-200 leading-1"
        >
          <span className="self-stretch my-auto text-oczko-violet-500">
            WARSZTATY
          </span>
        </a>
        <a
          href="#contact"
          className="flex gap-2 justify-center items-center m-2 self-stretch whitespace-nowrap border-b-1 border-transparent hover:border-oczko-violet-500 transition-all duration-200 leading-1"
        >
          <span className="self-stretch my-auto text-oczko-violet-500">
            KONTAKT
          </span>
        </a>
      </nav>
    </header>
  );
}
