"use client";
import * as React from "react";

export function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  // Height of the navbar (min-h-20 = 5rem = 80px)
  const NAVBAR_HEIGHT = 80;
  return (
    <header className="sticky top-0 z-50 flex flex-wrap gap-10 justify-between items-center px-10 w-full text-oczko-violet-500 bg-oczko-green-100 border-solid border-[0.5px] border-neutral-800 min-h-20 max-md:px-5 max-md:max-w-full">
      <a href="#" className="flex gap-2 justify-center items-center self-stretch my-auto text-4xl tracking-tighter leading-none whitespace-nowrap">
        <h1 className="self-stretch my-auto text-oczko-violet-500 font-salted">
          OCZKO.WORKSHOPS
        </h1>
      </a>
      {/* Hamburger/Close button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 p-2 focus:outline-none"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          // X icon
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="8" x2="24" y2="24" stroke="#5B4294" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="8" x2="8" y2="24" stroke="#5B4294" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Hamburger icon
          <>
            <span className="block w-7 h-0.5 bg-oczko-violet-500 mb-1.5 rounded transition-all duration-200" />
            <span className="block w-7 h-0.5 bg-oczko-violet-500 mb-1.5 rounded transition-all duration-200" />
            <span className="block w-7 h-0.5 bg-oczko-violet-500 rounded transition-all duration-200" />
          </>
        )}
      </button>
      {/* Desktop nav */}
      <nav
        className={`flex gap-4 items-center self-stretch my-auto text-base max-md:hidden`}
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
          className="absolute left-0 w-full bg-[#F2F1F7] text-oczko-violet-500 z-40 px-6 animate-fade-in md:hidden"
          style={{ top: NAVBAR_HEIGHT, height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
        >
          {/* Image */}
          <img src="/images/knit_tangle.png" alt="Oczko eye" className="w-64 h-64 object-contain mt-12 mb-12 mx-auto" />
          {/* Links */}
          <nav className="flex flex-col w-full gap-8">
            <a
              href="#about"
              className="flex items-center justify-between w-full py-4 border-b border-oczko-violet-500 text-lg font-normal tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              <span>O NAS</span>
              <span className="text-xl">→</span>
            </a>
            <a
              href="#workshops"
              className="flex items-center justify-between w-full py-4 border-b border-oczko-violet-500 text-lg font-normal tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              <span>WARSZTATY</span>
              <span className="text-xl">→</span>
            </a>
            <a
              href="#contact"
              className="flex items-center justify-between w-full py-4 border-b border-oczko-violet-500 text-lg font-normal tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              <span>KONTAKT</span>
              <span className="text-xl">→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
