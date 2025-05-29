import React from 'react'
import Heading from './ui/heading'
import Accordion from './ui/Accordion'




const faqData = [
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
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  },
  {
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  },
  {
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  },
  {
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  },
    {
    title: 'Do you provide support after delivery?',
    content: 'Yes, we offer maintenance and support after the project is live.'
  }
];

export default function Faq() {
  return (
  
<div className='pb-[100px]'>
      <Heading title="FREQUENTLY ASKED QUESTIONS"  subheading={null}   description={null} titleClassName="text-black text-center pb-[60px]"/>

        <div className="space-y-4">
      {faqData.map((faq, index) => (
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
