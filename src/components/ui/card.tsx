import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
  containerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function Card({
  imageSrc,
  imageAlt = "Image",
  title,
  description,
  containerClassName = "",
  imageClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: CardProps) {
  return (
    <div className={`rounded overflow-hidden bg-white mx-auto ${containerClassName}`}>
      {imageSrc && (
        <Image
          className={`object-cover rounded-md ${imageClassName}`}
          src={imageSrc}
          width={100}
          height={100}
          alt={imageAlt}
          priority={false} // optional; add if you want to control priority
        />
      )}
      <div className="mt-4">
        <h3 className={`text-xl font-semibold font-poppins  ${titleClassName}`}>
          {title}
        </h3>
        <p className={`text-gray-600 font-poppins text-sm ${descriptionClassName}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
