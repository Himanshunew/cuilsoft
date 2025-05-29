import Link from 'next/link';
import Button from './ui/button';
import cn from 'classnames';
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  secondaryTitle?: string;
}

interface NavProps {
  
  className?: string;
  title?: string;
  secondaryTitle?: string;
}


export default function Nav({ items, className, title, secondaryTitle }: NavProps) {
  return (
    <nav>
      <ul
        className={cn(
          'flex space-x-[54px] font-poppins font-medium items-center w-full',
          className
        )}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="flex items-center gap-2">
          {item.icon && <span className="inline-block">{item.icon}</span>}
                
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}

        <li className="flex gap-6 items-center">
          {secondaryTitle && (
            <Button className="font-poppins font-medium border border-main text-main flex items-center gap-2">
              {secondaryTitle}
            </Button>
          )}
          <Button className="bg-main font-poppins font-medium text-white flex items-center gap-2">
            {title}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
