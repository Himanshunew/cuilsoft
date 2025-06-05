import React from 'react';
import Heading from './ui/heading';
import Card from './ui/card';

const cardData = [
    {
        imageSrc: '/image/web.png',
        imageAlt: 'Sample Image 1',
        title: 'Web Development',
        description:
            'Web Development is our core competency and expertise. We have been working with many leading organizations to design, develop and manage their unique web properties.',
    },
    {
        imageSrc: '/image/app.png',
        imageAlt: 'Sample Image 2',
        title: 'App Development',
        description:
            'App Development is our core competency and expertise. We have been working with many leading organizations to design, develop and manage their unique mobile applications.',
    },
    {
        imageSrc: '/image/Web-Designing.png',
        imageAlt: 'Sample Image 3',
        title: 'Web Designing',
        description:
            'Web Designing is our core competency and expertise. We have been working with many leading organizations to design attractive and user-friendly web interfaces.',
    },
    {
        imageSrc: '/image/Digital-Marketing.png',
        imageAlt: 'Digital Marketing',
        title: 'Digital Marketing',
        description:
            'Digital Marketing is our core competency and expertise. We help organizations boost their online presence and reach their target audience effectively.',
    },
];

export default function Services() {
    return (
        <>
            <Heading
                subheading="OUR SERVICES"
                title="We Offer a Range of Digital Services"
                description="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
                subheadingClassName="pt-[100px] text-center font-poppins font-semibold text-[24px] leading-[16.41px] tracking-[0] text-main"
                titleClassName="pt-5 text-center font-poppins font-semibold text-[24px] leading-[16.41px] tracking-[0] text-black"
                descriptionClassName="pt-5 text-center font-poppins font-normal text-[16px] leading-[22px] tracking-[0] text-[#9F9FA9] w-[862px] mx-auto pb-[53px]"
            />

            <div className="container pb-[100px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cardData.map(({ imageSrc, imageAlt, title, description }, index) => (
                        <Card
                            key={index}
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                            title={title}
                            description={description}
                            containerClassName="border border-[#DDDDDD] rounded py-[34px] px-[16px]"
                            imageClassName="w-[80px] h-[80px] mx-auto"
                            titleClassName="font-poppins font-semibold text-[16px] leading-[14.56px] tracking-[0]  text-black pt-[34px]"
                            descriptionClassName="font-poppins font-normal text-[14px] leading-[19px] tracking-[0] text-[#9F9FA9]"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
