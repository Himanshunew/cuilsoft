import React from "react";
import Heading from "./components/ui/heading"; // ✅ Adjust path if needed
import Image from "next/image";

export default function IndustriesSections () {
  return (
    <div className="mt-24 text-center px-4 bg-[#FFFCF9] pb-24">
      <Heading
        subheading="INDUSTRIES WE SERVE"
        title="We Offer a Range of Industrial Serve"
        description="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
        subheadingClassName="text-main pb-4"
        titleClassName="pb-2 text-black"
        descriptionClassName="text-[#9F9FA9]"
      />

      <div className="mt-10 max-w-4xl mx-auto">


    <Image
  src="/image/Industries-image.svg"
  alt="Digital Marketing"
  className="w-fill "
  width={800} 
  height={509}

/>
      </div>
    </div>
  );
}
