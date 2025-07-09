"use client";
import * as React from "react";
import Link from "./Link";

export function SocialsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:max-w-full">
      <section className="flex overflow-hidden flex-col justify-center px-10 py-16 w-full bg-orange-50 border-solid border-t-[0.5px] border-t-neutral-800 min-h-[850px] max-md:max-w-full">
        <div className="flex flex-col flex-1 gap-12 justify-center w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 w-full text-center max-md:max-w-full">
            <div className="flex flex-col gap-12 w-full max-md:max-w-full">
              <h2 className="text-5xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl font-salted">
                Miej na nas oczko
              </h2>
              <p className="self-center mt-12 text-base font-medium leading-5 text-indigo-900 w-[448px] max-md:mt-10 max-md:max-w-full">
                Poza warsztatami prowadzimy rowniez spotkania dla entuzjastek i
                entuzjastow dziewiarskiej sztuki o nazwie OPEN KNITTING.
                <br />
                Zaobserwuj nas na instagramie i badz na biezaco!
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/415080a520affc949ce2a0234de35c3e4eb0eb8f?placeholderIfAbsent=true"
              className="object-contain self-center mt-12 max-w-full aspect-square w-[366px] max-md:mt-10"
              alt="Open knitting event"
            />
          </div>
          <div className="flex gap-8 items-center self-center mt-12 text-xs leading-tight text-indigo-800 uppercase whitespace-nowrap max-md:mt-10">
            <Link
              href="https://www.instagram.com/oczko.workshops/"
              text="Instagram"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
              imgAlt="Arrow icon"
            />
            <Link
              href="https://www.facebook.com/profile.php?id=61567128943041"
              text="Facebook"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
              imgAlt="Arrow icon"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
