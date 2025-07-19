"use client";
import * as React from "react";

export function Footer() {
  return (
    <footer
      className="flex flex-wrap items-center w-full border-solid border-[0.5px] border-neutral-800 max-md:max-w-full"
      id="contact"
    >
      <div className="flex flex-col grow shrink justify-center items-center self-stretch px-10 py-4 w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/54a4224dd53cc1396461786230ce21611dfe185b?placeholderIfAbsent=true"
          className="object-contain max-w-full aspect-[1.47] w-[118px]"
          alt="OCZKO.WORKSHOPS logo"
        />
      </div>
      <nav className="flex flex-col grow shrink items-start self-stretch px-10 py-4 w-96 text-xs leading-tight uppercase bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-row w-full gap-8 h-full items-center">
          <div className="flex flex-col items-start w-1/2 justify-center">
            <a
              href="#about"
              className="flex gap-1 justify-center items-center p-2"
            >
              <span className="self-stretch my-auto text-oczko-gray-100">O nas</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/7c320eccd89f515350da63a418bf1c9eac7ec263?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
            <a
              href="#workshops"
              className="flex gap-1 justify-center items-center p-2 whitespace-nowrap"
            >
              <span className="self-stretch my-auto text-oczko-gray-100">
                Warsztaty
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/7c320eccd89f515350da63a418bf1c9eac7ec263?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
            <a
              href="#contact"
              className="flex gap-1 justify-center items-center p-2 whitespace-nowrap"
            >
              <span className="self-stretch my-auto text-oczko-gray-100">Kontakt</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/7c320eccd89f515350da63a418bf1c9eac7ec263?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
          </div>
          {/* Right column: social links */}
          <div className="flex flex-col leading-tight uppercase w-1/2 justify-center">
            <div className="self-start">
              <div className="flex gap-1 items-center p-2">
                <span className="self-stretch my-auto text-oczko-gray-100">
                  Miej nas na Oczku
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start w-full whitespace-nowrap">
              <a
                href="https://www.instagram.com/oczko.workshops/"
                className="flex gap-1 items-center p-2"
              >
                <span className="self-stretch my-auto text-oczko-gray-100">
                  Instagram
                </span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/878617f2aeb387504f4a071d294ae045701dd9bb?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  alt="Arrow icon"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567128943041"
                className="flex gap-1 items-center p-2"
              >
                <span className="self-stretch my-auto text-oczko-gray-100">
                  Facebook
                </span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/878617f2aeb387504f4a071d294ae045701dd9bb?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                  alt="Arrow icon"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col grow shrink justify-center self-stretch px-10 py-4 w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-40 min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center w-full">
          <div className="flex flex-col flex-1 justify-center w-full text-xs">
            <div className="flex flex-col w-full">
              <div className="flex gap-1 items-center self-start p-2 leading-tight">
                <span className="self-stretch my-auto text-oczko-gray-100">
                  NAPISZ DO NAS
                </span>
              </div>
              <a
                href="mailto:oczko.workshops@gmail.com"
                className="flex gap-1 items-center p-2 w-full underline uppercase whitespace-nowrap"
              >
                <span className="self-stretch my-auto underline decoration-auto decoration-solid text-oczko-gray-100 underline-offset-auto">
                  oczko.workshops@gmail.com
                </span>
              </a>
              <div className="flex gap-1 items-center self-start p-2 leading-tight">
                <span className="self-stretch my-auto text-oczko-gray-100">
                  © 2025 OCZKO.WORKKSHOPS
                </span>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
