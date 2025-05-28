import Image from "next/image";
import React from "react";
import Social from "../ui/soical";
import { IconType, IconBaseProps } from "react-icons";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaRegEnvelope, FaRegCircle } from "react-icons/fa6";

interface LinkItem {
  label: string;
  href: string;
  Icon?: IconType;
  Content?: string | string[];
}

interface FooterColumn {
  title: string;
  description?: string;
  Icon?: IconType;
  links: LinkItem[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "",
    description:
      "Cuilsoft is a full-fledged web, mobile design & development enterprise established in 2022 based out in India. As a professional agency, we provide solutions that help in establishing your ideas or businesses globally to literally every corner of the world.",
    links: [],
  },
  {
    title: "Important Details",
    links: [
      {
        label: "Address",
        href: "#",
        Icon: FiMapPin,
        Content:
          "D-234(C&P), 4th Floor, Phase-8B, Sector-74, Sahibzada Ajit Singh Nagar, Punjab 140308",
      },
      {
        label: "Phone",
        href: "#",
        Icon: FiPhone,
        Content: ["+91-890-100-1970", "+91-947-843-5545"],
      },
      {
        label: "Email",
        href: "#",
        Icon: FaRegEnvelope,
        Content: "contact@cuilsoft.com",
      },
    ],
  },
  {
    title: "SITE MAP",
    Icon: FaRegCircle,
    links: [
      { label: "Home", href: "#" },
      { label: "Who We Are", href: "#" },
      { label: "Services", href: "#" },
      { label: "Our Work", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Our Services",
    Icon: FaRegCircle,
    links: [
      { label: "Web Development", href: "#" },
      { label: "E-commerce Development", href: "#" },
      { label: "Mobile App Development", href: "#" },
      { label: "Software SAAS Development", href: "#" },
      { label: "Digital Marketing", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Top logo and social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Image
            src="/image/logo.svg"
            alt="Cuilsoft Logo"
            width={217}
            height={40}
            priority
          />
          <Social />
        </div>

        {/* Footer Columns */}
        <div className="flex flex-wrap gap-8 pt-24">
          {footerColumns.map(({ title, Icon, description, links }, idx) => (
            <div
              key={idx}
              className={`${
                idx === 0
                  ? "w-[370px] flex items-center"
                  : "min-w-[230px] max-w-[220px] flex-1"
              }`}
            >
              {/* Title */}
              {title && (
                <h2 className="flex items-center text-lg font-semibold mb-4 space-x-2">
                  {Icon &&
                    React.createElement(Icon as React.ComponentType<IconBaseProps>, {
                      className: "text-main",
                      size: 17,
                    })}
                  <span>{title}</span>
                </h2>
              )}

              {/* Description */}
              {description && (
                <p className="mb-4 text-[#9F9FA9] leading-relaxed">{description}</p>
              )}

              {/* Links */}
              <ul>
                {links.map(({ label, href, Icon: LinkIcon, Content }, linkIdx) => (
                  <li key={linkIdx} className="mb-4">
                    <div className="flex items-center space-x-2">
                      {LinkIcon &&
                        React.createElement(LinkIcon as React.ComponentType<IconBaseProps>, {
                          className: "text-main",
                          size: 17,
                        })}
                      <a
                        href={href}
                        className={`hover:underline font-medium ${
                          ["Address", "Phone", "Email"].includes(label)
                            ? "text-white"
                            : "text-[#9F9FA9]"
                        }`}
                      >
                        {label}
                      </a>
                    </div>

                    {/* Content */}
                    {Content &&
                      (Array.isArray(Content) ? (
                        Content.map((item, i) => (
                          <p key={i} className="text-sm text-gray-400 ml-5 mt-1">
                            {item}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-400 ml-5 mt-1">{Content}</p>
                      ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
