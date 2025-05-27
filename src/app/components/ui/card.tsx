import React from 'react';
import Image from 'next/image'; // or use <img> if not Next.js

export default function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 font-poppins text-center">
      <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded"
          priority
        />
      </div>
      <h2 className="font-semibold text-[24px] leading-[16.41px] tracking-[0] mb-4">
        {title}
      </h2>
      <p className="font-normal text-[16px] leading-[22px] tracking-[0] text-gray-700">
        {description}
      </p>
    </div>
  );
}
