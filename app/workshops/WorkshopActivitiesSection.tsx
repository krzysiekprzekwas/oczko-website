"use client";
import * as React from "react";
import Link from "../components/Link";

export function WorkshopActivitiesSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:max-w-full">
      <section className="flex overflow-hidden flex-col justify-center px-10 py-16 w-full bg-oczko-green-100 border-solid border-t-[0.5px] border-t-neutral-800 min-h-[850px] max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 w-full text-center max-md:max-w-full">
            <div className="flex flex-col gap-12 w-full max-md:max-w-full">
              <h2 className="text-5xl leading-tight text-oczko-orange-600 max-md:max-w-full max-md:text-4xl font-salted">
                Dziergamy i gadamy!
              </h2>
              <p className="self-center mt-12 text-base font-medium leading-5 text-oczko-orange-600 w-[604px] max-md:mt-10 max-md:max-w-full">
                Uwielbiamy gadać podczas warsztatów, dlatego oprócz dziergania wciągamy też do zabawy karty komunikacyjne.
                <br />
                Efekt? Ręce dziergają, buzie się nie zamykają i spOCZKO atmosfera gwarantowana!
                <br />
                <br />
                Karty pomagają wejść na nowe tory rozmowy. Wspólnie odpowiadamy na nieoczywiste pytania, które prowadzą do szczerych rozmów i śmiechu.
              </p>
            </div>
            <img
              src="./images/knit_tangle_2.png"
              className="object-contain self-center mt-12 max-w-full aspect-square w-[366px] max-md:mt-10"
              alt="Open knitting event"
            />
          </div>
          <div className="flex gap-8 items-center self-center mt-12 text-xs leading-tight text-oczko-orange-600 uppercase whitespace-nowrap max-md:mt-10">
            <Link
              href="https://www.instagram.com/p/DE4T0HNs-pr/"
              text="Zobacz jak ich używamy"
              color="oczko-orange-600"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
