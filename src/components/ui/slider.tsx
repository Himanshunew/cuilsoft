'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className, ...props }) => (
  <button className={className} {...props}>
    {title}
  </button>
);

const slides: Slide[] = [
  {
    id: 1,
    title: 'We Are All About Creativity & Innovation',
    description:
      'We as a team help in converting your ideas and thoughts into a living reality. The best thing about us is our cost-effective & user-friendly approach to building an app or website to ride the bandwagon of the ever-growing digital arena and hence create more and new opportunities for our clients.',
    imageSrc: '/image/Illustration.png',
  },
  {
    id: 2,
    title: 'Building the Future with Creative Ideas',
    description:
      'We provide tailor-made digital solutions, turning concepts into engaging web and mobile applications. Our approach ensures user-friendly and scalable results.',
    imageSrc: '/image/Illustration.png',
  },
  {
    id: 3,
    title: 'Innovation That Drives Success Forward',
    description:
      'Through our passion for technology, we create impactful digital experiences and opportunities, empowering businesses to grow and evolve.',
    imageSrc: '/image/Illustration.png',
  },
];

export default function SimpleSlider() {
  const [current, setCurrent] = useState<number>(0);

  const currentSlide = slides[current] ?? slides[0];
  const title = currentSlide.title;
  const words = title.split(' ');
  const lastWord = words.pop() ?? '';
  const rest = words.join(' ');

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="relative mt-10 bg-secondary px-6 py-8">
      <div className="mx-auto max-w-[1200px] h-[637px] flex flex-col justify-center items-center text-black text-center rounded-md">
        <div className="flex w-full gap-20">
          {/* Text Section */}
          <div className="w-1/2 flex flex-col justify-center text-left">
            <h2 className="font-poppins font-bold text-4xl leading-[46px]">
              {rest} <span className="text-main">{lastWord}</span>
            </h2>
            <p className="mt-10 text-lg h-[140px]">{currentSlide.description}</p>

            <div className="flex gap-4">
              <Button
                title="Click Here"
                className="bg-main mt-6 text-white text-[16px] font-medium px-6 py-3 rounded"
              />
              <Button
                title="Learn More"
                className="border border-main mt-6 text-main text-[16px] font-medium px-6 py-3 rounded"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-1/2 h-full relative flex justify-center items-center">
            {currentSlide.imageSrc ? (
              <Image
                src={currentSlide.imageSrc}
                alt={`${currentSlide.title} image`}
                className="pt-[120px]"
                width={489}
                height={509}
              />
            ) : (
              <div className="text-gray-400 italic">No image available</div>
            )}
          </div>
        </div>
      </div>

      {/* Dots Only – No Arrows */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-main scale-110" : "bg-gray-300"
              }`}
          ></button>
        ))}
      </div>

      {/* Slide Dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-colors cursor-pointer ${current === index ? 'bg-white' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
