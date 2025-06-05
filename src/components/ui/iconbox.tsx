import React from 'react';

interface IconBoxProps {
  title: string;
  subtitle: string;
}

export default function IconBox({title, subtitle } : IconBoxProps) {
  return (
    <div className="flex bg-[#FFA42B] rounded w-[356px] p-4 gap-2.5 align-center ">
      {/* Icon */}
      <div className="text-3xl text-white ">
             <img src=" /image/rate 2.png" width={40} height={40} alt="icon"  className='bg-white rounded p-1'/>
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-[24px] leading-[33.37px] tracking-[0] font-poppins text-white ">
          {title}
        </h3>
        <p className="font-poppins font-bold text-[32px] leading-[33.37px] tracking-[0] text-white text-left">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
