import React from 'react';
import ArrowRight from './ArrowRight';

interface LinkProps {
  href: string;
  text: string;
  color?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  text,
  color = "oczko-violet-500",
  onClick,
  isActive = false,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex gap-1 md:gap-2 justify-center items-center p-2 text-xs md:text-sm leading-tight text-${color} uppercase group hover:gap-2 md:hover:gap-3 transition-all duration-200`}
    >
      <span className={`self-stretch my-auto text-${color} ${isActive ? 'underline' : 'group-hover:underline'} transition-all duration-200`}>
        {text}
      </span>
      <ArrowRight
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
      />
    </a>
  );
};

export default Link;