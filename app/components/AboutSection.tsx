"use client";
import * as React from "react";
import Link from "./Link";

export function AboutSection() {
  return (
    <section
      className="flex flex-col md:flex-row w-full min-h-[720px]"
      id="about"
    >
      <div className="flex-1 flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800 max-md:hidden">
        <img
          src="/images/surfer.png"
          className="object-contain aspect-[0.71] w-full max-w-[509px]"
          alt="Portrait of OCZKO workshop organizers"
        />
      </div>
      <article className="flex-1 flex flex-col justify-center items-center bg-white max-md:bg-oczko-violet-100 border-[0.5px] border-neutral-800">
        <div className="flex flex-col gap-8 px-10 py-16">
          <div className="gap-12 w-full">
            <div className="flex flex-col gap-12 w-full">
              <div className="flex flex-col gap-12 items-start w-full">
                <h2 className="text-7xl leading-tight text-oczko-violet-500 max-md:text-4xl font-salted">
                  Znajdź zen w przerabianu oczek!
                </h2>
                <p className="mt-12 text-base font-medium leading-[130%] text-oczko-violet-600 max-md:mt-10">
                  OCZKO lewe - Wera i OCZKO prawe - Justa, czyli dwie dziewiary, które organizują warsztaty z robienia na drutach dla wszystkich chcących poznać niesamowity świat dziewiarstwa, ale przede wszystkim kreatywnie się otworzyć i spędzić czas z innymi.
                </p>
              </div>
              <img
                src="/images/eye-1.png"
                className="object-contain self-center mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
                alt="OCZKO logo"
              />
            </div>
            <div className="gap-8 mt-12 w-full text-oczko-violet-600 max-md:mt-10">
              <h3 className="text-2xl leading-tight text-oczko-violet-600 font-salted text-center">
                Nasz statement?
              </h3>
              <p className="mt-8 text-base font-medium leading-[130%] text-oczko-violet-600">
                KNITTING IS HOT & FUN! i każdy, niezależnie od poziomu umiejętności manualnych, może odnaleźć ZEN w przerabianiu oczek i tworzeniu udziergu własnymi rękami.
              </p>
            </div>
          </div>
          <Link
            href="/workshops"
            text="Poznaj spOCZKO typiary"
          />
        </div>
      </article>
    </section>
  );
}
