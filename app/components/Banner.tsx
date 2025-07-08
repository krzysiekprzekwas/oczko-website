"use client";
import * as React from "react";

export function Banner() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center px-0 py-7 w-full text-4xl tracking-tighter leading-none text-indigo-900 bg-red-100 border-solid border-[0.5px] border-neutral-800 min-h-[100px] max-md:px-0 max-md:max-w-full">
      <div className="marquee whitespace-nowrap flex items-center w-full h-full">
        <span
          className="inline-block px-10"
          style={{
            fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Knitting is HOT&FUN
        </span>
        <span
          className="inline-block px-10"
          style={{
            fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Knitting is HOT&FUN
        </span>
        <span
          className="inline-block px-10"
          style={{
            fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Knitting is HOT&FUN
        </span>
        <span
          className="inline-block px-10"
          style={{
            fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Knitting is HOT&FUN
        </span>
        <span
          className="inline-block px-10"
          style={{
            fontFamily: "Syne, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Knitting is HOT&FUN
        </span>
      </div>
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
