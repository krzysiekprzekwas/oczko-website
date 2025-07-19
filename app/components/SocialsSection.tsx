"use client";
import * as React from "react";
import Link from "./Link";

export function SocialsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:max-w-full">
      <section className="flex overflow-hidden flex-col justify-center px-10 py-16 w-full bg-oczko-green-100 border-solid border-t-[0.5px] border-t-neutral-800 min-h-[850px] max-md:max-w-full">
        <div className="flex flex-col flex-1 gap-12 justify-center w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 w-full text-center max-md:max-w-full">
            <div className="flex flex-col gap-12 w-full max-md:max-w-full">
              <h2 className="text-5xl leading-tight text-oczko-violet-500 max-md:max-w-full max-md:text-4xl font-salted">
                Miej na nas oczko
              </h2>
              <p className="self-center mt-12 text-base font-medium leading-5 text-oczko-violet-600 w-[604px] max-md:mt-10 max-md:max-w-full">
                Warsztaty to nie wszystko - nasze głowy buzują NON STOP i chętnie angażujemy się w kolejne projekty!
                <br />
                <br />
                Jedną z naszych inicjatyw są spotkania OPEN KNITTING, czyli meetingi dla entuzjastek i entuzjastów dziergania, którzy chcą poznać inne spOCZKO osóbki i spędzić z nimi miło czas! 
                <br />
                <br />
                Śledź nas na Instagramie, by być na bieżąco!
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/415080a520affc949ce2a0234de35c3e4eb0eb8f?placeholderIfAbsent=true"
              className="object-contain self-center mt-12 max-w-full aspect-square w-[366px] max-md:mt-10"
              alt="Open knitting event"
            />
          </div>
          <div className="flex gap-8 items-center self-center mt-12 text-xs leading-tight text-oczko-violet-500 uppercase whitespace-nowrap max-md:mt-10">
            <Link
              href="https://www.instagram.com/oczko.workshops/"
              text="Instagram"
            />
            <Link
              href="https://www.facebook.com/profile.php?id=61567128943041"
              text="Facebook"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
