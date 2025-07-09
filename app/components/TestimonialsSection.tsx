"use client";
import * as React from "react";
import Link from "./Link";

export function TestimonialsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 gap-16 justify-center w-full max-md:max-w-full">
        <div className="gap-12 w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 justify-center w-full text-center max-md:max-w-full">
            <h2 className="text-5xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl font-salted">
              Co mówią o oczku?
            </h2>
            <p className="self-center mt-12 text-base font-medium leading-5 text-indigo-900 w-[840px] max-md:mt-10 max-md:max-w-full">
              Każde spotkanie to masa dobrej energii, śmiechu i oczywiście
              dziergania. Cieszymy się, że nasze warsztaty zostawiają po sobie
              nie tylko piękne robótki, ale i świetne wspomnienia. Zobacz, co
              mówią o nas osoby, które już z nami dziergały!
            </p>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/94132469c2b39d356d704741ababe979e5262d40?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[1.55] min-w-60 w-[364px] max-md:max-w-full"
              alt="Customer testimonial 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/a6eb18953393286aa3ac16727b306631385fe6a2?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[2.51] min-w-60 w-[287px]"
              alt="Customer testimonial 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/2f19e033450539a9511f56388497ce2398938a0f?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[2.93] min-w-60 w-[362px] max-md:max-w-full"
              alt="Customer testimonial 3"
            />
          </div>
        </div>
        <Link
          href="https://www.instagram.com/oczko.workshops/"
          text="Zobacz więcej na naszym instagramie"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
          imgAlt="Arrow icon"
        />
      </div>
    </section>
  );
}
