'use client';

import { GiTerror } from 'react-icons/gi';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-xl uppercase mb-5">
        SORRY! Something went wrong{' '}
        <GiTerror className="inline-block w-10 h-10" />
      </h1>
      <button
        type="button"
        className="hover:text-amber-600 rounded-full bg-gray-600 w-[150px] h-12"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
