import React from 'react';
import CustomForm from './components/ui/form';
import Image from 'next/image';

export default function Form() {
  return (
    <div className="bg-black p-[118px] mb-[100px] text-white">
 
      <div className="flex flex-row gap-8 items-center container bg-main rounded-[40px] p-[50px]">
        
     
        <div className=" w-1/2">
          <Image
            src="/image/form-img.png"
            alt="Form Illustration"
            width={321}
            height={485}
            className=" h-auto rounded"
          />
        </div>

        <div className=" w-1/2 bg-[#3D3D3D] rounded-[40px] p-[40px]">
          <CustomForm />
        </div>
      </div>
    </div>
  );
}
