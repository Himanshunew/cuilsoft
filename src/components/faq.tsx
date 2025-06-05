import React from 'react'
import Heading from './ui/heading'
import Accordion from './ui/Accordion'

// ✅ Interface for FAQ item
interface FAQItem {
  title: string;
  content: string;
}

interface HeadingProps {
  title: string;
  subheading?: string;
  description?: string;
  titleClassName?: string;
  subheadingClassName?: string;
  descriptionClassName?: string;
}


// ✅ FAQ Data with type
const faqData: FAQItem[] = [
  {
    title: 'What services do you offer?',
    content: 'We offer web development, app development, digital marketing, and more.'
  },
  {
    title: 'How long does a project take?',
    content: 'Project duration depends on complexity. Typical projects take 4-6 weeks.'
  },
  {
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  },
  {
    title: 'What is your pricing model?',
    content: 'Our pricing depends on project scope and requirements. Contact us for a quote.'
  },
  {
    title: 'Can you redesign my existing website?',
    content: 'Yes, we specialize in both redesigning and building websites from scratch.'
  },
  {
    title: 'Do you offer SEO services?',
    content: 'Absolutely. We provide on-page and off-page SEO services.'
  },
  {
    title: 'Is hosting included?',
    content: 'We offer hosting guidance or can include hosting in our full-service packages.'
  },
  {
    title: 'What technologies do you use?',
    content: 'We use modern technologies like React, Node.js, Laravel, WordPress, and more.'
  }
];

// ✅ FAQ Component
export default function Faq() {
  return (
    <div className='pb-[100px]'>
      <Heading 
        title="FREQUENTLY ASKED QUESTIONS" 
        titleClassName="text-black text-center" 
      />

      <div className="space-y-4">
        {faqData.map((faq: FAQItem, index: number) => (
          <Accordion
            key={index}
            number={index + 1}
            title={faq.title}
            content={faq.content}
            className="bg-white rounded-b-lg p-4"
            titleClassName="text-black"
            contentClassName="text-gray-700"
          />
        ))}
      </div>
    </div>
  )
}
