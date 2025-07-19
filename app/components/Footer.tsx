"use client";
import * as React from "react";
import Link from "./Link";

export function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-stretch w-full border-solid border-[0.5px] border-neutral-800 max-md:max-w-full"
      id="contact"
    >
      {/* Navigation - order 1 on mobile, order 2 on desktop */}
      <nav className="order-1 md:order-2 flex flex-col md:flex-row grow shrink self-stretch px-10 py-4 w-full md:w-96 text-xs leading-tight uppercase bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full items-center justify-center md:items-stretch md:justify-start">
        <div className="flex flex-row w-full gap-8 h-full items-center md:items-stretch justify-center md:justify-start">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 justify-center">
            <Link
              href="#about"
              text="O nas"
              color="oczko-gray-100"
            />
            <Link
              href="#workshops"
              text="Warsztaty"
              color="oczko-gray-100"
            />
            <Link
              href="#contact"
              text="Kontakt"
              color="oczko-gray-100"
            />
          </div>
          {/* Right column: social links */}
          <div className="flex flex-col items-center md:items-start leading-tight uppercase w-full md:w-1/2 justify-center">
            <div className="self-center md:self-start">
              <div className="flex gap-1 items-center p-2">
                <span className="self-stretch my-auto text-oczko-gray-100">
                  Miej nas na Oczku
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start w-full whitespace-nowrap">
              <Link
                href="https://www.instagram.com/oczko.workshops/"
                text="Instagram"
                color="oczko-gray-100"
              />
              <Link
                href="https://www.facebook.com/profile.php?id=61567128943041"
                text="Facebook"
                color="oczko-gray-100"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Email/contact - order 2 on mobile, order 3 on desktop */}
      <div className="order-2 md:order-3 flex flex-col grow shrink justify-center items-center md:items-start self-stretch px-10 py-4 w-full md:w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center w-full items-center md:items-start text-center md:text-left">
          <div className="flex flex-col flex-1 justify-center w-full text-xs items-center md:items-start text-center md:text-left">
            <div className="flex flex-col w-full items-center md:items-start text-center md:text-left">
              <div className="flex gap-1 items-center self-center md:self-start p-2 leading-tight">
                <span className="self-stretch my-auto text-oczko-gray-100">
                  NAPISZ DO NAS
                </span>
              </div>
              <a
                href="mailto:oczko.workshops@gmail.com"
                className="flex gap-1 items-center self-center md:self-start p-2 w-full underline uppercase whitespace-nowrap justify-center md:justify-start text-center md:text-left"
              >
                <span className="self-stretch my-auto underline decoration-auto decoration-solid text-oczko-gray-100 underline-offset-auto text-center md:text-left">
                  oczko.workshops@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Logo - order 3 on mobile, order 1 on desktop */}
      <div className="order-3 md:order-1 flex flex-col grow shrink justify-center items-center self-stretch px-10 py-4 w-full md:w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 max-md:px-5 max-md:max-w-full">
        <img
          src="/images/full_logo_white.png"
          className="object-contain max-w-full aspect-[1.47] w-[118px] p-2"
          alt="OCZKO.WORKSHOPS logo"
        />
        <div className="flex gap-1 items-center self-center p-2 text-xs leading-tight">
          <span className="self-stretch my-auto text-oczko-gray-100">
            © 2025 OCZKO.WORKKSHOPS
          </span>
        </div>
      </div>
    </footer>
  );
}
