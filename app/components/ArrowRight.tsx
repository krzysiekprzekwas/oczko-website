import React from 'react';

interface ArrowRightProps {
  className?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className = '' }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.98312 13L8.89947 12.0926L12.4113 8.64815H2V7.35185H12.4113L8.89947 3.90741L9.98312 3L15 8L9.98312 13Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRight; 