import React from 'react';
import ArrowRight from './ArrowRight';

interface LinkProps {
  href: string;
  text: string;
  color?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  text,
  color = "oczko-violet",
}) => {
  return (
    <a
      href={href}
      className={`flex gap-1 justify-center items-center p-2 mt-6 text-xs leading-tight text-${color} uppercase group hover:gap-2 transition-all duration-200`}
    >
      <span className={`self-stretch my-auto text-${color} group-hover:underline transition-all duration-200`}>
        {text}
      </span>
      <ArrowRight
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
      />
    </a>
  );
};

export default Link;