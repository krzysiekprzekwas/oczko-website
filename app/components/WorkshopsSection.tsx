"use client";
import * as React from "react";
import Link from "./Link";
import { HeroCarousel, HeroCarouselImage } from "./HeroCarousel";

const heroImages: HeroCarouselImage[] = [
  { src: "/images/workshops_section_1.png", alt: "Hero image 1" },
  { src: "/images/workshops_section_2.png", alt: "Hero image 2" },
];

export function WorkshopsSection() {
  return (
    <>
      <section id="workshops" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-green-100 border-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink gap-6 items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="gap-12 self-stretch w-full max-md:max-w-full">
                <h2 className="text-7xl leading-tight text-oczko-violet-500 font-salted max-md:max-w-full max-md:text-4xl font-salted">
                  Warsztaty
                </h2>
                <p className="mt-12 text-base font-medium leading-5 text-oczko-violet-500  max-md:mt-10 max-md:max-w-full">
                  <b>spOCZKO warsztaty to więcej niż nauka dziergania.</b> To ręce zajęte drutami, głowy wolne od spiny i luz, którego na co dzień często brakuje. 
                  <br/>
                  <br/>
                  Dziewiarstwo wciąga w kreatywny flow, pozwala oderwać się od rutyny i spędzić czas w dobrym towarzystwie - z uśmiechem i własnoręcznie zrobionym udziergiem na koniec.
                </p>
              </div>
              <Link
                href="/workshops"
                text="Rzuć OCZKIEM na warsztaty"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/d942388158c7929b5b051716be30e43c1c133c68?placeholderIfAbsent=true"
                className="object-contain mt-6 w-full max-w-[270px] h-auto"
                alt="Workshop illustration"
              />
            </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800">
            <HeroCarousel images={heroImages} />
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-orange-400 border-[0.5px] border-neutral-800">
          <div className="flex flex-col flex-1 gap-16 justify-center w-full max-md:max-w-full px-10 py-16">
            <div className="flex flex-col gap-12 justify-center w-full  max-md:max-w-full">
              <h3 className="text-2xl leading-tight text-oczko-violet-500 font-salted max-md:max-w-full uppercase">
                Reset głowy, totalny chill i zero presji.
              </h3>
              <p className="mt-12 text-base font-medium leading-5 text-oczko-violet-500  max-md:mt-10 max-md:max-w-full">
                <b>Warsztaty to kreatywny czas dla Ciebie!</b> Ty dziergasz, a my nie spuszczamy z Ciebie OCZKA – pokazujemy wszystko krok po kroku, bez presji i bez pośpiechu.
                <br/>
                <br/>
                Pracujemy na różnych rodzajach włóczek, rozmawiamy o ich właściwościach, uczymy, jak dobierać je do projektów. Chcemy, żeby każda osoba początkująca wyszła nie tylko z udziergiem, ale też z konkretną wiedzą i zajawką na dalsze robótki.
              </p>
            </div>
            <Link
              href="/workshops"
              text="Rzuć OCZKIEM na warsztaty"
            />
          </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-green-100 border-[0.5px] border-neutral-800">
          <div className="w-full h-full px-32 py-48 max-md:px-5 max-md:py-24 flex items-center justify-center">
            <img
              src="./images/eye_hearth_3.png"
              className="object-contain w-full max-md:max-w-full"
              alt="Workshop materials"
            />
          </div>
        </div>
      </section>
    </>
  );
}
