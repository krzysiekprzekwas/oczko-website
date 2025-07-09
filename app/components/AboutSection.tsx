"use client";
import * as React from "react";
import Link from "./Link";

export function AboutSection() {
  return (
    <section
      className="flex flex-col md:flex-row w-full min-h-[720px]"
      id="about"
    >
      <div className="flex-1 flex justify-center items-center bg-slate-200 border-[0.5px] border-neutral-800">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/39bca5b820a73fa9e39fe11e91fd330f06aa1537?placeholderIfAbsent=true"
          className="object-contain aspect-[0.71] w-full max-w-[509px]"
          alt="Portrait of OCZKO workshop organizers"
        />
      </div>
      <article className="flex-1 flex flex-col justify-center items-center bg-white border-[0.5px] border-neutral-800">
        <div className="flex flex-col gap-8 w-full max-w-xl px-10 py-16">
          <div className="gap-12 w-full text-center">
            <div className="flex flex-col gap-12 w-full">
              <div className="flex flex-col gap-12 items-start w-full">
                <h2 className="text-7xl leading-tight text-indigo-800 max-md:text-4xl">
                  O Oczku
                </h2>
                <p className="mt-12 text-base font-medium leading-5 text-indigo-900 max-md:mt-10">
                  OCZKO lewe - Wera i OCZKO prawe - Justa, czyli dwie
                  dziewiary, które organizują warsztaty z robienia na drutach
                  dla wszystkich chcących poznać niesamowity świat
                  dziewiarstwa, ale przede wszystkim kreatywnie się otworzyć i
                  spędzić czas z innymi.
                </p>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4d35faeac353ae48b8dbf01dbd915e7c6a6a6222?placeholderIfAbsent=true"
                className="object-contain self-center mt-12 max-w-full aspect-square w-[124px] max-md:mt-10"
                alt="OCZKO logo"
              />
            </div>
            <div className="gap-8 mt-12 w-full text-indigo-900 max-md:mt-10">
              <h3 className="text-2xl leading-tight text-indigo-900">
                Nasz statement?
              </h3>
              <p className="mt-8 text-base font-medium leading-5 text-indigo-900">
                KNITTING IS HOT & FUN! i każdy, niezależnie od poziomu
                umiejętności manualnych, może odnaleźć ZEN w przerabianiu
                oczek i tworzeniu udziergu własnymi rękami.
              </p>
            </div>
          </div>
          <Link
            href="#workshops"
            text="Poznaj spOCZKO typiary"
            imgSrc="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/4c19649ddec6c555e63e97100afc9136d44089e5?placeholderIfAbsent=true"
            imgAlt="Arrow icon"
          />
        </div>
      </article>
    </section>
  );
}
