"use client";
import * as React from "react";
import Link from "../components/Link";

export function ContactSection() {
  return (
    <>
      <section id="cofounders" className="flex flex-col md:flex-row w-full md:aspect-[2/1]">
        <article className="w-full md:w-1/2 md:h-full md:aspect-square flex flex-col justify-center items-center bg-oczko-green-300 border-[0.5px] border-neutral-800">
            <div className="flex flex-col flex-1 shrink gap-8 items-center self-stretch w-full basis-0 md:min-h-[600px] min-w-60 max-md:max-w-full px-10 py-16 max-md:px-4 max-md:py-6">
              <div className="flex flex-col gap-8 self-stretch w-full max-md:max-w-full">
                <div className="flex flex-col gap-12">
                  <h1 className="text-7xl leading-tight text-oczko-violet-500 font-salted max-md:max-w-full font-salted">
                    Kontakt
                  </h1>
                  <p className="text-base font-medium leading-5 text-oczko-violet-500 max-md:max-w-full">
                    Masz do nas pytanie? A może chcesz dowiedzieć 
                    <br/>
                    się więcej o ofercie?
                    <br/>
                    <br/>
                    Napisz do nas na oczko.workshops@gmail.com a 
                    <br/>
                    my odpowiemy w mgnieniu OCZKA!
                  </p>
                </div>
                <div className="flex flex-col gap-12">
                  <h3 className="text-5xl leading-tight text-oczko-violet-500 font-salted max-md:max-w-full max-md:text-2xl font-salted">
                    Social Media
                  </h3>
                  <p className="text-base font-medium leading-5 text-oczko-violet-500 max-md:max-w-full">
                    Rzuć OCZKIEM na nasze sociale i bądź na bieżąco!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-full justify-start">
                <Link
                  href="https://www.instagram.com/oczko.workshops/"
                  text="Instagram"
                  color="oczko-violet-500"
                />
                <Link
                  href="https://www.facebook.com/profile.php?id=61567128943041"
                  text="Facebook"
                  color="oczko-violet-500"
                />
              </div>
            </div>
        </article>
        <div className="w-full aspect-square md:w-1/2 md:h-full md:aspect-square flex justify-center items-center bg-oczko-violet-100 border-[0.5px] border-neutral-800">
            <img
              src="/images/contact.png"
              className="object-contain w-full"
              alt="Contact"
            />
        </div>
      </section>
    </>
  );
}
