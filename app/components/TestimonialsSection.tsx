import React from "react";
import Image from "next/image";
import Link from "./Link";

export function TestimonialsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 gap-16 justify-center w-full px-10 py-16 max-md:max-w-full">
        <div className="gap-12 w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 justify-center w-full text-center max-md:max-w-full">
            <h2 className="text-5xl leading-tight text-oczko-violet-500 max-md:max-w-full max-md:text-4xl font-salted">
              Co mówią o oczku?
            </h2>
            <p className="self-center mt-12 text-base font-medium leading-5 text-oczko-violet-500 w-[840px] max-md:mt-10 max-md:max-w-full">
              Każde spotkanie to masa dobrej energii, śmiechu i oczywiście dziergania. Cieszymy się, że nasze warsztaty zostawiają po sobie nie tylko piękne robótki, ale i świetne wspomnienia. Zobacz, co mówią o nas osoby, które już z nami dziergały!
            </p>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <Image
              src="/images/testimonial_1.png"
              width={872}
              height={562}
              className="object-contain grow shrink self-stretch my-auto min-w-60 max-md:max-w-full"
              alt="Customer testimonial 1"
              sizes="(max-width: 768px) 100vw, 364px"
            />
            <Image
              src="/images/testimonial_2.png"
              width={718}
              height={286}
              className="object-contain grow shrink self-stretch my-auto min-w-60"
              alt="Customer testimonial 2"
              sizes="(max-width: 768px) 100vw, 287px"
            />
            <Image
              src="/images/testimonial_3.png"
              width={868}
              height={297}
              className="object-contain grow shrink self-stretch my-auto min-w-60 max-md:max-w-full"
              alt="Customer testimonial 3"
              sizes="(max-width: 768px) 100vw, 362px"
            />
          </div>
        </div>
        <Link
          href="https://www.instagram.com/oczko.workshops/"
          text="Zobacz więcej na naszym instagramie"
        />
      </div>
    </section>
  );
}
