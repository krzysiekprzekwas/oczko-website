"use client";
import * as React from "react";
import Link from "./Link";

export function WorkshopsSection() {
  return (
    <>
      <section id="workshops" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-orange-50 border-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink gap-6 items-center self-stretch w-full basis-0 min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16">
              <div className="gap-12 self-stretch w-full max-md:max-w-full">
                <h2 className="text-7xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl font-salted">
                  Warsztaty
                </h2>
                <p className="mt-12 text-base font-medium leading-5 text-indigo-900 max-md:mt-10 max-md:max-w-full">
                  spOCZKO warsztaty to zdecydowanie więcej niż tylko nauka
                  dziergania! To ręce zajęte drutami i głowy wolne od spiny –
                  dziewiarstwo wprowadzi każdego w kreatywne flow, które pozwoli
                  oderwać się od codzienności i kreatywnie spędzić czas z innymi
                  podczas długich rozmów.
                </p>
              </div>
              <Link
                href="#workshops-details"
                text="Rzuć OCZKIEM na warsztaty"
                imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
                imgAlt="Arrow icon"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/d942388158c7929b5b051716be30e43c1c133c68?placeholderIfAbsent=true"
                className="object-contain mt-6 max-w-full aspect-[1.07] w-[270px]"
                alt="Workshop illustration"
              />
            </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-slate-200 border-[0.5px] border-neutral-800">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/cda9ee308b3101e2336025bc7ba33ed44fe3e906?placeholderIfAbsent=true"
              className="object-contain w-full"
              alt="Workshop scene"
            />
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-red-300 border-[0.5px] border-neutral-800">
          <div className="flex flex-col flex-1 gap-16 justify-center w-full max-md:max-w-full px-10 py-16">
            <div className="flex flex-col gap-12 justify-center w-full text-indigo-900 max-md:max-w-full">
              <h3 className="text-2xl leading-tight text-indigo-900 max-md:max-w-full">
                Reset głowy, totalny chill i zero presji.
              </h3>
              <p className="mt-12 text-base font-medium leading-5 text-indigo-900 max-md:mt-10 max-md:max-w-full">
                Warsztaty to moment wyciszenia i skupienia się na jednej
                czynności. Ty dziergasz, <br />a my nie spuszczamy z ciebie
                OCZKA i uczymy wszystkiego krok po kroku.
                <br />
                <br />
                Korzystamy z różnych rodzajów materiałów, rozmawiamy o ich
                właściwościach i zastosowaniu. Chcemy, by osoby początkujące
                wyszły z solidną dawką wiedzy i zajawką do kreatywniej robótki!
              </p>
            </div>
            <Link
              href="#workshops-details"
              text="Rzuć OCZKIEM na warsztaty"
              imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
              imgAlt="Arrow icon"
            />
          </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-orange-50 border-[0.5px] border-neutral-800">
          <div className="w-full h-full px-32 py-48 max-md:px-5 max-md:py-24 flex items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/310224212598e0165d4edaa55f04211653efe75a?placeholderIfAbsent=true"
              className="object-contain w-full max-md:max-w-full"
              alt="Workshop materials"
            />
          </div>
        </div>
      </section>
    </>
  );
}
