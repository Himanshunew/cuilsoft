import React from 'react';

interface HeadingProps {
  subheading?: string;
  title: string;
  description?: string;
  subheadingClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}


export default function Heading({
    subheading,
    title,
    description,
    subheadingClassName = '',
    titleClassName = '',
    descriptionClassName = '',
}: HeadingProps) {
    return (
        <div className='pb-14 '>

            <p className={`font-poppins font-semibold text-[24px] leading-[16.41px] text-main ${subheadingClassName}`}>
                {subheading}
            </p>

            <h2 className={`font-poppins font-semibold text-[24px] leading-[30px] tracking-[0] text-black  ${titleClassName}`}>
                {title}
            </h2>

            <div className='w-[838px] mx-auto'>
                <p className={`font-poppins font-normal text-[16px] leading-[22px] tracking-[0] text-[#9F9FA9]  ${descriptionClassName}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}
