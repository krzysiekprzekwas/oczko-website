"use client";
import * as React from "react";
import Link from "./Link";

export function Navigation() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return (
    <>
      <header className="sticky top-0 z-50 flex flex-wrap gap-10 justify-between items-center px-10 w-full text-oczko-violet-500 bg-oczko-green-100 border-solid border-[0.5px] border-oczko-stroke min-h-20 max-md:px-5 max-md:max-w-full">
        <a href="/" className="flex gap-2 justify-center items-center self-stretch my-auto text-4xl tracking-tighter leading-none whitespace-nowrap">
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
            href="/about"
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
      
      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 bg-[#F2F1F7] text-oczko-violet-500 z-40 md:hidden">
          <div className="flex flex-col items-center justify-start h-full px-6 pt-[100px]">
            {/* Image */}
            <img 
              src="/images/oczko_obrazek_menu.png" 
              alt="Oczko eye" 
              className="w-[330px] h-[270px] object-contain mb-16" 
            />
            {/* Links */}
            <nav className="flex flex-col w-full gap-6 items-start">
              <Link
                href="/about"
                text="O NAS"
                onClick={() => setMenuOpen(false)}
              />
              <div className="w-full h-[0.5px] bg-oczko-stroke"></div>
              <Link
                href="#workshops"
                text="WARSZTATY"
                onClick={() => setMenuOpen(false)}
              />
              <div className="w-full h-[0.5px] bg-oczko-stroke"></div>
              <Link
                href="#contact"
                text="KONTAKT"
                onClick={() => setMenuOpen(false)}
              />
              <div className="w-full h-[0.5px] bg-oczko-stroke"></div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
