import React from 'react';
import ReviewCard from './ui/review-card';
import Heading from './ui/heading';
import Button from './ui/button';
import TestimonialSelector from './ui/testimonals';

interface Review {
  image: string;
  description: string;
  name: string;
  rating: number;
}

export default function Testimonials() {
  const staticReview: Review[] = [
    {
      image: "/image/person.png",
      description: "Cuilsoft is overall great, communication was flawless, they are easy to work with. Team was practically a part of our internal team. Highly recommended!",
      name: "Alice Johnson",
      rating: 4,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      image: "/image/person.png",
      description: "Excellent service and support. They really understood our needs and delivered beyond expectations.",
      name: "Bob Smith",
      rating: 5,
    }
  ];

  return (
    <div className="container pb-[100px] pt-[100px]">
      <Heading
        subheading="WHY CUSTOMERS LOVE US?"
        title="Loved by Customers, Trusted by All"
        subheadingClassName="text-primary mb-2 text-main text-center pb-[20px]"
        titleClassName="text-black text-center"
      />
      <div className="grid grid-cols-3 gap-6 pb-[60px]">
        {staticReview.slice(0, 6).map((review, index) => (
          <ReviewCard
            key={index}
            image={review.image}
            description={review.description}
            name={review.name}
            rating={review.rating}
          />
        ))}
      </div>
      <div className="mx-auto text-center">
        <Button title="See All Reviews" className="bg-main rounded-[20px] px-[94px] py-[14px]" />
      </div>
      <TestimonialSelector />
    </div>
  );
}
