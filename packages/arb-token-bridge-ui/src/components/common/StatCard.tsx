import React from 'react';

import { StatCardProps } from '../../types';

const StatCard: React.FC<StatCardProps> = ({ title, value, className }) => {
  return (
    <div
      className={`flex h-full w-3/12 flex-col items-center justify-center rounded-xl border-2 border-[#1377BB] px-2 py-4 text-center shadow-md shadow-[#1377BB] ${className}`}
    >
      <h1 className="lg:text-xl xl:text-2xl">{title}</h1>
      <h1 className="font-light lg:text-lg xl:text-xl">
        {' '}
        {value !== '' ? `${value} ETH` : 'Loading...'}
      </h1>
    </div>
  );
};

export default StatCard;