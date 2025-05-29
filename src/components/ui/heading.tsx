import React from 'react';

export default function Heading({
    subheading,
    title,
    description,
    subheadingClassName = '',
    titleClassName = '',
    descriptionClassName = '',
}) {
    return (
     <div className='pb-14'>
            <p className={`font-poppins font-semibold text-[24px] leading-[16.41px] ${subheadingClassName}`}>
                {subheading}
            </p>

            <h2 className={`font-poppins font-semibold text-[24px] leading-[16.41px] tracking-[0] ${titleClassName}`}>
                {title}
            </h2>

            <p className={`font-poppins font-normal text-[16px] leading-[22px] tracking-[0] ${descriptionClassName}`}>
                {description}
            </p>
       </div>
    );
}
