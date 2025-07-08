import React from 'react';

interface LinkProps {
  href: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

const Link: React.FC<LinkProps> = ({ href, text, imgSrc, imgAlt }) => {
  return (
    <a
      href={href}
      className="flex gap-1 justify-center items-center p-2 mt-6 text-xs leading-tight text-indigo-800 uppercase group hover:gap-2 transition-all duration-200"
    >
      <span className="self-stretch my-auto text-indigo-800 group-hover:underline transition-all duration-200">{text}</span>
      <img
        src={imgSrc}
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
        alt={imgAlt}
      />
    </a>
  );
};

export default Link;