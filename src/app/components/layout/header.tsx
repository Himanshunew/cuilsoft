import Link from 'next/link';
import Image from 'next/image';
import { Phone, HelpCircle } from 'lucide-react';
import Nav, { NavItem } from '../navbar'; // Import NavItem interface too
import { FaHome } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

export default function Header() {
    const customNavItems: NavItem[] = [
        { label: 'Need support?', href: '/', icon: HelpCircle },
        { label: '+91 123-456-7890', href: '/support', icon: Phone },
        { label: '+91 987-654-3210', href: '/sales', icon: Phone },
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
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-blue-600">
                        <Link href="/">
                            <Image
                                src="/image/logo.svg"
                                alt="MySite Logo"
                                width={217}
                                height={40}
                                priority
                            />
                        </Link>
                    </h1>

                    <Nav
                        items={customNavItems}
                        className="font-poppins font-medium"
                        title="Training Program"
                    />
                </div>
            </header>

            <div className="w-full bg-white container mx-auto flex gap-2 pt-[49px] justify-center">
                <Nav
                    items={NavMenu}
                    className="font-poppins font-medium justify-between w-full text-black bg-transparent"
                    title="Industrial Training"
                    secondaryTitle="Contact Us"
                />
            </div>
        </>
    );
}
