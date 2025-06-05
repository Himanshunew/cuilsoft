  import React from 'react'
  import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
  import { IconType } from 'react-icons';

  interface SomeProps {
  Icon: IconType; 
}

  const socialIcons = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebookF,
      colorClass: "hover:text-blue-600",
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: FaTwitter,
      colorClass: "hover:text-blue-400",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
      colorClass: "hover:text-pink-600",
    },
  ];

const ReviewCard: React.FC<SomeProps> = ({ Icon }) => {
    return (
    <ul className="flex space-x-4 justify-end">
        {socialIcons.map(({ href, icon: Icon, colorClass, label }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`${colorClass} inline-block`}
            >
              <Icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    )
  }
  export default ReviewCard

