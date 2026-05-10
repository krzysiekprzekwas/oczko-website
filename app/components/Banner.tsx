import React from "react";

export function Banner() {
  const textContent = Array.from({ length: 5 }).map((_, idx) => (
    <span key={idx} className="inline-block px-10">
      <span>Knitting is </span>
      <span className="font-salted">HOT&FUN</span>
    </span>
  ));

  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 py-7 w-full text-4xl tracking-tighter leading-none text-oczko-violet-500 bg-oczko-orange-200 border-r-[0.5px] border-b-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <div className="marquee-track flex">
          <div className="flex flex-shrink-0">{textContent}</div>
          <div className="flex flex-shrink-0">{textContent}</div>
        </div>
      </div>
    </section>
  );
}
