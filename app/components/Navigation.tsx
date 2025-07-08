"use client";
import * as React from "react";

export function Navigation() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-10 w-full text-indigo-800 bg-orange-50 border-solid border-[0.5px] border-neutral-800 min-h-20 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 justify-center items-center self-stretch my-auto text-4xl tracking-tighter leading-none whitespace-nowrap">
        <h1 className="self-stretch my-auto text-indigo-800">
          OCZKO.WORKSHOPS
        </h1>
      </div>
      <nav className="flex gap-4 items-center self-stretch my-auto text-base leading-tight uppercase min-w-60">
        <a
          href="#about"
          className="flex gap-2 justify-center items-center self-stretch p-2 my-auto"
        >
          <span className="self-stretch my-auto text-indigo-800">O nas</span>
        </a>
        <a
          href="#workshops"
          className="flex gap-2 justify-center items-center self-stretch p-2 my-auto whitespace-nowrap"
        >
          <span className="self-stretch my-auto text-indigo-800">
            Warsztaty
          </span>
        </a>
        <a
          href="#contact"
          className="flex gap-2 justify-center items-center self-stretch p-2 my-auto whitespace-nowrap"
        >
          <span className="self-stretch my-auto text-indigo-800">Kontakt</span>
        </a>
      </nav>
    </header>
  );
}
