"use client";
import * as React from "react";

export function PhotoCarousel() {
  return (
    <section className="flex flex-wrap items-center w-full border border-solid border-neutral-800 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/e2795ffb7259536e7528e7bc96869c94014e433b?placeholderIfAbsent=true"
        className="object-contain grow shrink self-stretch my-auto w-96 aspect-square min-w-60 max-md:max-w-full"
        alt="Workshop photo 1"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/6ae38c166e192b1f07176da3f596335489f70895?placeholderIfAbsent=true"
        className="object-contain grow shrink self-stretch my-auto w-96 aspect-square min-w-60 max-md:max-w-full"
        alt="Workshop photo 2"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/1414244bf827ae4d5ea49ed36950146b5de8dd67?placeholderIfAbsent=true"
        className="object-contain grow shrink self-stretch my-auto w-96 aspect-square min-w-60 max-md:max-w-full"
        alt="Workshop photo 3"
      />
    </section>
  );
}
