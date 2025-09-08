"use client";
import * as React from "react";
import Link from "../components/Link";

export function B2BSection() {
  return (
    <section className="flex flex-col md:flex-row w-full max-md:max-w-full">
      <article className="flex overflow-hidden flex-col justify-between self-stretch py-16 pr-7 pl-10 w-full md:w-2/3 bg-oczko-orange-500 border-solid border-[0.5px] border-neutral-800 min-h-[480px] text-oczko-violet-100 max-md:px-5">
        <h2 className="text-4xl leading-10 text-oczko-gray-100 uppercase font-salted">
          Integracja firmowa?
        </h2>
        <h2 className="text-4xl leading-10 text-oczko-gray-100 uppercase font-salted">
          Wieczór panieński?
        </h2>
        <h2 className="text-4xl leading-10 text-oczko-gray-100 uppercase font-salted">
          Urodziny?
        </h2>
        <p className="text-4xl leading-10 text-oczko-gray-100">
          zróbmy razem 
          <br/>
          <span className="font-salted">spoczko</span> wydarzenie
        </p>
        <div className="self-start">
          <Link
            href="/contact"
            text="Napisz do nas"
            color="oczko-gray-100"
          />
        </div>
      </article>
      <article className="flex overflow-hidden flex-col justify-center items-center self-stretch w-full md:w-1/3 bg-white border-solid border-[0.5px] border-neutral-800 min-h-[480px]">
        <img
            src="./images/eye_hearth_2.png"
            className="object-contain w-full"
            alt="Workshop showcase"
          />
      </article>
    </section>
  );
}
