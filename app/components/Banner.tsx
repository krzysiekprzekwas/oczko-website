"use client";
import * as React from "react";

export function Banner() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-10 py-7 w-full text-4xl tracking-tighter leading-none text-indigo-900 bg-red-100 border-solid border-[0.5px] border-neutral-800 min-h-[100px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <div className="self-stretch my-auto text-indigo-900">
          <span
            style={{
              fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Knitting is
          </span>{" "}
          HOT&FUN
        </div>
        <div className="self-stretch my-auto text-indigo-900">
          <span
            style={{
              fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Knitting is
          </span>{" "}
          HOT&FUN
        </div>
        <div className="self-stretch my-auto text-indigo-900">
          <span
            style={{
              fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Knitting is
          </span>{" "}
          HOT&FUN
        </div>
        <div className="self-stretch my-auto text-indigo-900">
          <span
            style={{
              fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Knitting is
          </span>{" "}
          HOT&FUN
        </div>
      </div>
    </section>
  );
}
