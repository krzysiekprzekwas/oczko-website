"use client";
import * as React from "react";
import Link from "./Link";

export function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Height of the navbar (min-h-20 = 5rem = 80px)
  const NAVBAR_HEIGHT = 80;
  return (
    <header className="sticky top-0 z-50 flex flex-wrap gap-10 justify-between items-center px-10 w-full text-oczko-violet-500 bg-oczko-green-100 border-solid border-[0.5px] border-neutral-800 min-h-20 max-md:px-5 max-md:max-w-full">
      <a href="#" className="flex gap-2 justify-center items-center self-stretch my-auto text-4xl tracking-tighter leading-none whitespace-nowrap">
        <h1 className="self-stretch my-auto text-oczko-violet-500 font-salted">
          oczko.workshops
        </h1>
      </a>
      {/* Hamburger/Close button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 focus:outline-none"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          // Close button
          <img src="/images/close button.svg" alt="Close menu" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(50%) contrast(100%)' }} />
        ) : (
          // Menu button
          <img src="/images/menu button.svg" alt="Open menu" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(1000%) hue-rotate(240deg) brightness(50%) contrast(100%)' }} />
        )}
      </button>
      {/* Desktop nav */}
      <nav
        className={`flex gap-2 items-center self-stretch my-auto text-base max-md:hidden`}
      >
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
      {/* Mobile nav overlay below navbar */}
      {menuOpen && (
        <div
          className="absolute left-0 w-full bg-[#F2F1F7] text-oczko-violet-500 z-40 px-6 pt-[100px] animate-fade-in md:hidden"
          style={{ top: NAVBAR_HEIGHT, height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
        >
          {/* Image */}
          <img src="/images/oczko_obrazek_menu.png" alt="Oczko eye" className="w-[330px] h-[270px] object-contain mb-[83px] mx-auto" />
          {/* Links */}
          <nav className="flex flex-col w-full gap-8">
            <Link
              href="#about"
              text="O NAS"
              onClick={() => setMenuOpen(false)}
            />
            <Link
              href="#workshops"
              text="WARSZTATY"
              onClick={() => setMenuOpen(false)}
            />
            <Link
              href="#contact"
              text="KONTAKT"
              onClick={() => setMenuOpen(false)}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
