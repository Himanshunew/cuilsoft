import Image from "next/image";
import { FaStar } from "react-icons/fa";   // <-- You need to import FaStar!
import type { IconType } from 'react-icons';

interface CardProps {
  image?: string;
  description?: string;
  name?: string;
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

  // Cast FaStar to React component type to fix TS error
  const StarIcon = FaStar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className={`max-w-sm rounded-2xl overflow-hidden bg-[#F4F3EC] p-4 ${className}`}>
      <img src={image} alt={name} className="w-[70px] h-[70px]" />
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
                <StarIcon
                  key={i}
                  className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
