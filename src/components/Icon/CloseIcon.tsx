import React from 'react';
import { IconProps } from './types';

export const CloseIcon: React.FC<IconProps> = ({ size = 24 }) => (
  <svg
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {' '}
      <rect width="24" height="24" fill="white" />{' '}
      <path
        d="M7 17L16.8995 7.10051"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{' '}
      <path
        d="M7 7.00001L16.8995 16.8995"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />{' '}
    </g>
  </svg>
);

export default CloseIcon;
