"use client";
import * as React from "react";

export function CTASection() {
  return (
    <section className="flex flex-wrap items-center w-full max-md:max-w-full">
      <article className="flex overflow-hidden flex-col grow shrink justify-between self-stretch py-16 pr-7 pl-10 my-auto w-96 bg-indigo-800 border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-slate-200 max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl leading-10 text-slate-200">
          Sprawdź nadchodzące warsztaty!
        </h2>
        <a
          href="https://instagram.com"
          className="flex gap-1 justify-center items-center self-start p-2 mt-60 text-xs leading-tight uppercase max-md:mt-10"
        >
          <span className="self-stretch my-auto text-slate-200">
            Rzuć OCZKIEM na nasz instagram
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/af8c66e2c4568c14f6dfe15bd13c76ca7ee144df?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt="Arrow icon"
          />
        </a>
      </article>
      <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-10 py-16 my-auto w-96 bg-white border-solid border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/618ae74f866e7efe77d28d1d6bf1698877cbd3d4?placeholderIfAbsent=true"
          className="object-contain w-full aspect-[1.14]"
          alt="Workshop showcase"
        />
      </div>
      <article className="flex overflow-hidden flex-col grow shrink justify-between self-stretch px-10 py-16 my-auto w-96 border-solid bg-slate-300 border-[0.5px] border-neutral-800 min-h-[480px] min-w-60 text-stone-50 max-md:px-5 max-md:max-w-full">
        <h2 className="text-4xl leading-10 text-stone-50">
          Chcesz z nami współpracować?
        </h2>
        <a
          href="#contact"
          className="flex gap-1 justify-center items-center self-start p-2 mt-60 text-xs leading-tight uppercase max-md:mt-10"
        >
          <span className="self-stretch my-auto text-stone-50">
            Napisz do nas
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/7c320eccd89f515350da63a418bf1c9eac7ec263?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt="Arrow icon"
          />
        </a>
      </article>
    </section>
  );
}
