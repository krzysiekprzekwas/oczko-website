import React from "react";
import Image from "next/image";
import Link from "./Link";

interface CTASectionProps {
  backgroundColor?: string;
}

export function CTASection({ backgroundColor = "bg-oczko-violet-300" }: CTASectionProps) {
  return (
    <section className="flex flex-wrap items-center w-full max-md:max-w-full">
      <article className="flex overflow-hidden flex-col grow shrink justify-between self-stretch py-16 pr-7 pl-10 w-96 bg-oczko-violet-500 border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-oczko-violet-100 max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl leading-10 text-oczko-violet-100 font-salted uppercase">
          Sprawdź nadchodzące warsztaty!
        </h2>
        <div className="self-start">
          <Link
            href="https://www.instagram.com/oczko.workshops/"
            text="Rzuć OCZKIEM na nasz instagram"
            color="oczko-gray-100"
          />
        </div>
      </article>
      <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-10 py-16 my-auto w-96 bg-white border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 max-md:px-5 max-md:max-w-full">
        <div className="relative w-full aspect-[800/700]">
          <Image
            src={backgroundColor === "bg-oczko-green-500" ? "/images/eye-2.png" : "/images/cta_workshop_showcase.png"}
            fill
            className="object-contain"
            alt="Workshop showcase"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <article className={`flex overflow-hidden flex-col grow shrink justify-between self-stretch px-10 py-16 w-96 border-solid ${backgroundColor} border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-oczko-gray-100 max-md:px-5 max-md:max-w-full`}>
        <h2 className="text-4xl leading-10 text-oczko-gray-100">
          Chcesz z nami współpracować?
        </h2>
        <div className="self-start">
          <Link
            href="/contact"
            text="Napisz do nas"
            color="oczko-gray-100"
          />
        </div>
      </article>
    </section>
  );
}
