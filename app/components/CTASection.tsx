"use client";
import * as React from "react";
import Link from "./Link";

export function CTASection() {
  return (
    <section className="flex flex-wrap items-center w-full max-md:max-w-full">
      <article className="flex overflow-hidden flex-col grow shrink justify-between self-stretch py-16 pr-7 pl-10 w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-oczko-violet-100 max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl leading-10 text-oczko-violet-100 font-salted">
          Sprawdź nadchodzące warsztaty!
        </h2>
        <Link
          href="https://www.instagram.com/oczko.workshops/"
          text="Rzuć OCZKIEM na nasz instagram"
          color="oczko-gray-100"
        />
      </article>
      <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-10 py-16 my-auto w-96 bg-white border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/618ae74f866e7efe77d28d1d6bf1698877cbd3d4?placeholderIfAbsent=true"
          className="object-contain w-full aspect-[1.14]"
          alt="Workshop showcase"
        />
      </div>
      <article className="flex overflow-hidden flex-col grow shrink justify-between self-stretch px-10 py-16 w-96 border-solid bg-oczko-violet-300 border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl leading-10 text-oczko-gray-100">
          Chcesz z nami współpracować?
        </h2>

        <Link
          href="#contact"
          text="Napisz do nas"
          color="oczko-gray-100"
        />
      </article>
    </section>
  );
}
