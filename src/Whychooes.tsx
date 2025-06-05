import React from 'react';
import Heading from './components/ui/heading';
import Image from 'next/image';
import IconBox from './components/ui/iconbox';
import { FaShieldAlt } from 'react-icons/fa';
import { FaBolt, FaUsers } from 'react-icons/fa6';


interface IconBoxItem {
  title: string;
  subtitle: string;
  Icon : React.ReactNode
}

const IconBoxData: IconBoxItem[] = [
  {
    Icon: <FaShieldAlt/>,
    title: "Clients Served",
    subtitle: "25+",
  },
  {
    Icon: <FaBolt/>,
    title: "Completed Projects",
    subtitle: "45+",
  },
  {
    Icon: <FaUsers />,
    title: "Years Of Going",
    subtitle: "3+",
  },
  {
    Icon: <FaUsers />,
    title: "Satisfaction Guaranteed",
    subtitle: "100%",
  },
];

export default function WhyChoose() {
  return (
    <div className='text-center'>
      <Heading
        title="A Commitment to Quality, Innovation, and Customer Satisfaction"
        subheading="WHY CHOOSE US?"
        titleClassName='text-black'
        subheadingClassName='text-main pb-[20px]'
      />
      <div className='bg-black'>
        <div className="container mx-auto gap-[126px] flex pt-[116px]">
          <div className="w-1/2 flex flex-col gap-[28px] pb-[116px]">
            {IconBoxData.map((item, index) => (
              <IconBox
                key={index}
                // icon  ={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
          <div className="w-1/2 p-0">
            <Image
              src="/image/Group 1000008052.png"
              width={556}
              height={616}
              alt="Your image description"
              className='h-[616px]'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
