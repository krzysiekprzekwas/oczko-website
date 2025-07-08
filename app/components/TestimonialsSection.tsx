"use client";
import * as React from "react";

export function TestimonialsSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-10 py-16 w-full bg-white border-solid border-b-[0.5px] border-b-neutral-800 min-h-[850px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 gap-16 justify-center w-full max-md:max-w-full">
        <div className="gap-12 w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 justify-center w-full text-center max-md:max-w-full">
            <h2 className="text-5xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl">
              Co mówią o oczku?
            </h2>
            <p className="self-center mt-12 text-base font-medium leading-5 text-indigo-900 w-[840px] max-md:mt-10 max-md:max-w-full">
              Każde spotkanie to masa dobrej energii, śmiechu i oczywiście
              dziergania. Cieszymy się, że nasze warsztaty zostawiają po sobie
              nie tylko piękne robótki, ale i świetne wspomnienia. Zobacz, co
              mówią o nas osoby, które już z nami dziergały!
            </p>
          </div>
          <div className="flex flex-wrap gap-10 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/94132469c2b39d356d704741ababe979e5262d40?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[1.55] min-w-60 w-[364px] max-md:max-w-full"
              alt="Customer testimonial 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/a6eb18953393286aa3ac16727b306631385fe6a2?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[2.51] min-w-60 w-[287px]"
              alt="Customer testimonial 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/2f19e033450539a9511f56388497ce2398938a0f?placeholderIfAbsent=true"
              className="object-contain grow shrink self-stretch my-auto aspect-[2.93] min-w-60 w-[362px] max-md:max-w-full"
              alt="Customer testimonial 3"
            />
          </div>
        </div>
        <a
          href="https://instagram.com"
          className="flex gap-1 justify-center items-center self-center p-2 mt-16 text-xs leading-tight text-indigo-800 uppercase max-md:mt-10"
        >
          <span className="self-stretch my-auto text-indigo-800">
            Zobacz więcej na naszym instagramie
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/43c7c58b8c471defef325ab946881a4ed2f8c56c?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt="Arrow icon"
          />
        </a>
      </div>

      <section className="flex overflow-hidden flex-col justify-center px-10 py-16 w-full bg-orange-50 border-solid border-t-[0.5px] border-t-neutral-800 min-h-[850px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 gap-12 justify-center w-full max-md:max-w-full">
          <div className="flex flex-col gap-12 w-full text-center max-md:max-w-full">
            <div className="flex flex-col gap-12 w-full max-md:max-w-full">
              <h2 className="text-5xl leading-tight text-indigo-800 max-md:max-w-full max-md:text-4xl">
                Miej na nas oczko
              </h2>
              <p className="self-center mt-12 text-base font-medium leading-5 text-indigo-900 w-[448px] max-md:mt-10 max-md:max-w-full">
                Poza warsztatami prowadzimy rowniez spotkania dla entuzjastek i
                entuzjastow dziewiarskiej sztuki o nazwie OPEN KNITTING.
                <br />
                Zaobserwuj nas na instagramie i badz na biezaco!
              </p>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/415080a520affc949ce2a0234de35c3e4eb0eb8f?placeholderIfAbsent=true"
              className="object-contain self-center mt-12 max-w-full aspect-square w-[366px] max-md:mt-10"
              alt="Open knitting event"
            />
          </div>
          <div className="flex gap-8 items-center self-center mt-12 text-xs leading-tight text-indigo-800 uppercase whitespace-nowrap max-md:mt-10">
            <a
              href="https://instagram.com"
              className="flex gap-1 justify-center items-center self-stretch p-2 my-auto"
            >
              <span className="self-stretch my-auto text-indigo-800">
                Instagram
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/d08e56320aad695444b1d2c2d29b4985076f4804?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
            <a
              href="https://facebook.com"
              className="flex gap-1 justify-center items-center self-stretch p-2 my-auto"
            >
              <span className="self-stretch my-auto text-indigo-800">
                Facebook
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/bcf9f0d5781a42d0990f584b23abfb2f/d08e56320aad695444b1d2c2d29b4985076f4804?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                alt="Arrow icon"
              />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
