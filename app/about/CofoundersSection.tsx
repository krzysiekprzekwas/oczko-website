"use client";
import * as React from "react";
import Link from "../components/Link";

export function CofoundersSection() {
  return (
    <>
      <section id="cofounders" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-gray-100 border-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink gap-6 items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="gap-12 self-stretch w-full max-md:max-w-full">
                <h1 className="text-7xl leading-tight text-oczko-orange-600 font-salted max-md:max-w-full font-salted">
                  O Nas
                </h1>
                <h3 className="text-5xl leading-tight text-oczko-orange-600 font-salted max-md:max-w-full max-md:text-2xl font-salted">
                  Wera
                </h3>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                  Wera dzierga dla siebie - dla sportu - a swoje udziergi pokazuje na profilu @wery.cieplo. Jest również testerką wzorów dziewiarskich.
                </p>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                  Podczas spOCZKO warsztatów Wera wspiera dobrym słowem, pomaga tam, gdzie spadnie OCZKO i dba o to, by nikt przesadnie się nie stresował - bo dzierganie to przede wszystkim dobra zabawa!
                </p>
              </div>
              <img
                src="/images/hat.png"
                className="object-contain mt-6 w-full max-w-[270px] h-auto"
                alt="Hat illustration"
              />
              <Link
                href="#workshops-details"
                text="Rzuć OCZKIEM na warsztaty"
                color="oczko-orange-500"
              />
            </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800">
            <img
              src="/images/wera.png"
              className="object-contain w-full"
              alt="Wera"
            />
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800 order-2 md:order-1">
            <img
              src="/images/justa.png"
              className="object-contain w-full"
              alt="Justa"
            />
        </div>
        <article className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-gray-100 border-[0.5px] border-neutral-800 order-1 md:order-2">
          <div className="flex flex-col flex-1 shrink gap-6 items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="gap-12 self-stretch w-full max-md:max-w-full">
                <h3 className="text-5xl leading-tight text-oczko-violet-500 font-salted max-md:max-w-full max-md:text-2xl font-salted">
                  Justa
                </h3>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-violet-500 max-md:max-w-full">
                  Justa kocha dziergać dla innych i obdarowywać znajomych ciepłymi udziergami. Prowadzi swoją małą manufakturę @morze_welny - możecie zbić z nią piątkę na lokalnych targach rękodzieła!
                </p>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-violet-500 max-md:max-w-full">
                  Justa nauczy dziergać każdego - NAPRAWDĘ! Na warsztatach nie spuści Was z oczka, wytłumaczy każdy etap i pomoże w procesie twórczym!
                </p>
              </div>
              <img
                src="/images/sweater.png"
                className="object-contain mt-6 w-full max-w-[270px] h-auto"
                alt="Sweater illustration"
              />
              <Link
                href="#workshops-details"
                text="Rzuć OCZKIEM na warsztaty"
                color="oczko-violet-500"
              />
            </div>
        </article>
      </section>
    </>
  );
}
