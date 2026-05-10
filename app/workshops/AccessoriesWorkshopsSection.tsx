
import React from "react";
import Image from "next/image";
import Link from "../components/Link";

export function AccessoriesWorkshopsSection() {
  return (
    <>
      <section id="cofounders" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square relative flex justify-center items-center bg-oczko-violet-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800">
          <Image
            src="/images/accessories_1.png"
            fill
            className="object-contain"
            alt="SpOCZKO accessories workshop"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <article className="w-full md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-green-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink gap-6 items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="gap-12 self-stretch w-full max-md:max-w-full">
                <h3 className="text-5xl leading-tight text-oczko-orange-600 max-md:max-w-full max-md:text-2xl font-salted">
                  Spoczko akcesoria
                </h3>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                  Co bedziemy szydełkować?
                </p>
                <p className="mt-4 text-base font-medium leading-5 text-oczko-orange-500 max-md:max-w-full">
                  SpOCZKO akcesoria, czyli case na słuchawki, klucze i różności oraz smycz do telefonu które możesz przypiąć i mieć na nie oczko! Idealny projekt na początek twojej szydełkowej przygody.
                  <br/>
                  <br/>
                  Dodatki niepowtarzalne, totalnie crazy i przede wszystkim twoje!
                </p>
              </div>
              <Image
                src="/images/eye_hearth.png"
                width={80}
                height={82}
                className="object-contain mt-6"
                alt="Eye Heart"
              />
              <Link
                href="/contact"
                text="Napisz do nas"
                color="oczko-orange-500"
              />
            </div>
        </article>
      </section>

      <section className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square relative flex justify-center items-center bg-oczko-violet-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800 order-2 md:order-1">
          <Image
            src="/images/accessories_2.png"
            fill
            className="object-contain"
            alt="SpOCZKO accessories workshop"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square relative flex justify-center items-center bg-oczko-violet-100 border-r-[0.5px] border-b-[0.5px] border-neutral-800 order-2 md:order-1">
          <Image
            src="/images/accessories_3.png"
            fill
            className="object-contain"
            alt="SpOCZKO accessories workshop"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </>
  );
}
