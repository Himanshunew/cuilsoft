'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';
import { MdMiscellaneousServices } from 'react-icons/md';
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import { FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import Nav from '../navbar';

// Cast react-icons to React.FC with SVG props
const MenuIcon = HiOutlineMenu as React.FC<React.SVGProps<SVGSVGElement>>;
const CloseIcon = HiOutlineX as React.FC<React.SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
  icon: IconType;
  secondaryTitle?: string;
}


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const customNavItems: NavItem[] = [
  { label: 'Need support?', href: '/', icon: FaQuestionCircle, secondaryTitle: 'Help & Support' },
  { label: '+91 123-456-7890', href: '/support', icon: FaPhoneAlt, secondaryTitle: 'Customer Care' },
  { label: '+91 987-654-3210', href: '/sales', icon: FaPhoneAlt, secondaryTitle: 'Sales' },
];

  const NavMenu: NavItem[] = [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'Who We Are', href: '/support', icon: LuUser },
    { label: 'Services', href: '/sales', icon: MdMiscellaneousServices },
    { label: 'Our Work', href: '/sales', icon: PiSuitcaseSimpleLight },
  ];

  return (
    <>
      <header className="bg-background pt-6 pb-6">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center px-4">
          <h1 className="text-xl font-bold text-blue-600 mb-4 sm:mb-0">
            <Link href="/">
              <Image src="/image/logo.svg" alt="MySite Logo" width={217} height={40} priority />
            </Link>
          </h1>

          {/* Hamburger button visible on small screens only */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="sm:hidden text-black text-2xl focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Custom Nav visible on md+ or if mobileMenuOpen on sm */}
          <nav
            className={`${
              mobileMenuOpen ? 'block' : 'hidden'
            } sm:flex sm:gap-6 font-poppins font-medium`}
          >
            <Nav items={customNavItems} title="Training Program" />
          </nav>
        </div>
      </header>

      <div className="bg-white container mx-auto px-4">
        {/* Main Nav Menu - hidden on sm unless mobileMenuOpen */}
        <nav
          className={`w-full flex flex-col gap-2 pt-[49px] text-black bg-transparent ${
            mobileMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:flex-row sm:justify-center sm:gap-10`}
        >
          <Nav
            items={NavMenu}
            className="font-poppins font-medium justify-between w-full max-w-5xl"
            title="Industrial Training"
            secondaryTitle="Contact Us"
          />
        </nav>
      </div>
    </>
  );
}

