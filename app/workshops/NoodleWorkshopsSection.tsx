"use client";
import * as React from "react";
import Link from "../components/Link";

export function NoodleWorkshopsSection() {
  return (
    <>
      <section id="cofounders" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800">
            <img
              src="/images/noodle_workshop_1.png"
              className="object-contain w-full"
              alt="Workshops"
            />
        </div>
        <article className="w-full md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-gray-100 border-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="flex flex-col gap-6 self-stretch w-full max-md:max-w-full">
                <div className="flex flex-col gap-12">
                  <h1 className="text-7xl leading-tight text-oczko-orange-600 font-salted max-md:max-w-full font-salted">
                    Warsztaty
                  </h1>
                  <h3 className="text-5xl leading-tight text-oczko-orange-600 font-salted max-md:max-w-full max-md:text-2xl font-salted">
                    Noodle Scarf
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <p className="text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                      CO BEDZIEMY DZIERGAĆ?
                    </p>
                    <p className="text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                      Noodle scarf czyli cienki, kolorowy szaliczek, który jest idealny na początek dziewiarskiej przygody w którą, mamy nadzieję, wkręcisz się na całego! 
                      <br/>
                      <br/>
                      To idealny dodatek do garderoby, który doda szczypty Ciebie w każdej stylizacji! 
                      Wykonany z prawdziwej wełny, alpaki, moheru i merino oraz w kolorach, które najbardziej do Ciebie przemawiają!
                    </p>
                  </div>
                  <img
                    src="/images/eye_hearth.png"
                    className="object-contain mt-6 w-full max-w-[80px] h-auto mx-auto"
                    alt="Eye Heart"
                  />
                  <Link
                    href="/contact"
                    text="Napisz do nas"
                    color="oczko-orange-500"
                  />
                </div>
              </div>
            </div>
        </article>
      </section>

      <section className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800 order-2 md:order-1">
            <img
              src="/images/noodle_workshop_3.png"
              className="object-contain max-w-[480px] h-auto"
              alt="Workshops"
            />
        </div>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800 order-2 md:order-1">
            <img
              src="/images/noodle_workshop_2.png"
              className="object-contain w-full"
              alt="Workshops"
            />
        </div>
      </section>
    </>
  );
}
