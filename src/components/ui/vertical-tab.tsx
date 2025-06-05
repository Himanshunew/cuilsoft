import Image from 'next/image';
import React, { useState } from 'react';




const tabs = [
    {
        label: 'Frontend',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
            
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
           
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
           
            }
        ],
    },
    {
        label: 'Backend',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
           
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
              
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
              
            }
        ],
    },
    {
        label: 'Frameworks',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
             
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
            
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
             
            }
        ],
    },
    {
        label: 'Database',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
             
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
           
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
           
            }
        ],
    },
    {
        label: 'AI & ML',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
           
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
           
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
           
            }
        ],
    },
    {
        label: 'Devops',
        content: [
            {
                id: 1,
                icon: '/image/Group 1000008057.png',
                title: "hkdhfl"
            },
            {
                id: 2,
                icon: '/image/Group 1000008057.png',
                title: "hkdhfl"
            },
            {
                id: 3,
                icon: '/image/Group 1000008057.png',
                title: "hkdhfl"
            }
        ],
    },
];


export default function TabsExample() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="md:flex gap-[48px]">
            <ul className="flex-column space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0 w-[228px] border rounded-3xl p-7">
                {tabs.map((tab, idx) => (
                    <li key={idx}>
                        <button
                            onClick={() => setActiveIndex(idx)}
                            className={`inline-flex items-center justify-between px-4 py-3 w-full rounded-lg ${activeIndex === idx
                                ? 'text-white'
                                : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            <span>{tab.label}</span>

                            {/* Show icon only if active */}
                            {activeIndex === idx && (
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5 8L22.5 12L18.5 16"
                                        stroke="#FFA42B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 12H22.5"
                                        stroke="#FFA42B"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="p-6 bg-[linear-gradient(180deg,_#EAEAEA_24.76%,_#FFC77D_100%)] rounded-lg w-[769px] text-gray-700">


                <div className="flex flex-wrap gap-4">
                    {tabs[activeIndex].content.map(({ icon}, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Image src={icon} alt="" width={147} height={115} />
            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
