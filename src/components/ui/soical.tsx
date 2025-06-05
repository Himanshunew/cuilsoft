import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


const socialIcons: {
  label: string;
  href: string;
  icon: React.ReactNode;
  colorClass: string;
}[] = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: <FaFacebookF size={24} />,
      colorClass: "hover:text-blue-600",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: <FaTwitter size={24}  />,
      colorClass: "hover:text-blue-400",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: < FaInstagram  size={24} />,
      colorClass: "hover:text-pink-600",
    },
  ];


const ReviewCard: React.FC = () => {
  return (
    <ul className="flex space-x-4 justify-end">
      {socialIcons.map(({ href, icon: Icon, colorClass, label }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${colorClass} inline-block`}
          >
            {Icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ReviewCard;