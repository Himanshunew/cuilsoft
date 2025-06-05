import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface CardProps {
  image: string;
  description?: string;
  name: string;
  rating?: number;
  className?: string;
}

export default function ReviewCard({
  image,
  description,
  name,
  rating = 5,
  className = ''
}: CardProps) {


  return (
    <div className={`max-w-sm rounded-2xl overflow-hidden bg-[#F4F3EC] p-4 ${className}`}>
      <div className="max-w-[70px] mx-h-[70px]">
        <Image src={image} alt={name} className="object-cover object-center" width={1000} height={1000} />
      </div>
      <div className="mt-4">
        <p className="text-black text-[16px] mb-2 pt-[52px] pb-[34px]">{description}</p>
        <div className="items-center">
          <span className="font-bold text-lg text-[#7B7B7B]">{name}</span>
          <div className="flex justify-between items-center gap-1 w-full pt-[48px]">
            <div>
              <Image
                src="/image/google.png"
                alt="Descriptive text"
                width={53}
                height={20}
              />
            </div>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <FaStar
                    className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
                  /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
