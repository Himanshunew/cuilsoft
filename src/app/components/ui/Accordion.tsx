'use client';

import React, { useState } from 'react';
import { cn } from '../utils/cn';

interface AccordionProps {
  number?: number;
  title: string;
  content: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function Accordion({
  number,
  title,
  content,
  className = '',
  titleClassName = '',
  contentClassName = ''
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn('border border-gray-300 rounded-md overflow-hidden container', className)}
      style={{ boxShadow: '0px 5px 14.9px 0px #A9A9A940' }}
    >
      <button
        className={cn(
          'w-full text-left font-poppins font-semibold text-[16px] leading-[14.56px] tracking-[0] text-center hover: px-4 py-3',
          titleClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
  
        {number !== undefined && (
          <span className="mr-2 font-semibold text-">{number}.</span>
        )}
        {title}
      </button>
      {isOpen && (
        <div
          className={cn(
            'px-4 py-3 font-poppins font-normal text-[14px] leading-[19px]',
            contentClassName
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
