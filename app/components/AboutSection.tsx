"use client";
import * as React from "react";

export function AboutSection() {
  return (
    <section
      className="flex flex-wrap items-center w-full max-md:max-w-full"
      id="about"
    >
      <div className="flex overflow-hidden grow shrink gap-2 justify-center items-center self-stretch px-10 py-px my-auto border-solid bg-slate-200 border-[0.5px] border-neutral-800 min-h-[720px] min-w-60 w-[576px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/39bca5b820a73fa9e39fe11e91fd330f06aa1537?placeholderIfAbsent=true"
          className="object-contain self-stretch my-auto aspect-[0.71] min-w-60 w-[509px]"
          alt="Portrait of OCZKO workshop organizers"
        />
      </div>
      <article className="flex overflow-hidden grow shrink gap-2 items-center self-stretch px-10 py-16 my-auto bg-white border-solid border-[0.5px] border-neutral-800 min-h-[720px] min-w-60 w-[576px] max-md:px-5 max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
          <div className="flex flex-col gap-8 w-full max-md:max-w-full">
            <div className="gap-12 w-full text-center max-md:max-w-full">
              <div className="flex flex-col gap-12 w-full max-md:max-w-full">
                <div className="flex flex-col gap-12 items-start w-full max-md:max-w-full">
                  <h2 className="text-7xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl">
                    O Oczku
                  </h2>
                  <p className="mt-12 text-base font-medium leading-5 text-indigo-900 max-md:mt-10 max-md:max-w-full">
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
              <div className="gap-8 mt-12 w-full text-indigo-900 max-md:mt-10 max-md:max-w-full">
                <h3 className="text-2xl leading-tight text-indigo-900 max-md:max-w-full">
                  Nasz statement?
                </h3>
                <p className="mt-8 text-base font-medium leading-5 text-indigo-900 max-md:max-w-full">
                  KNITTING IS HOT & FUN! i każdy, niezależnie od poziomu
                  umiejętności manualnych, może odnaleźć ZEN w przerabianiu
                  oczek i tworzeniu udziergu własnymi rękami.
                </p>
              </div>
            </div>
            <a
              href="#workshops"
              className="flex gap-1 justify-center items-center self-center p-2 mt-8 text-xs leading-tight text-indigo-800 uppercase"
            >
              <span className="self-stretch my-auto text-indigo-800">
                Poznaj spOCZKO typiary
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/248182a9e49515fdf5b8d90debfa7f724ecdfa22?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
