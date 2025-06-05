import React from 'react'
import Heading from './components/ui/heading'
import Button from './components/ui/button'
import Card from './components/ui/card'


const cardData = [
  {
    title: 'IT Technology',
    description: 'Web Development.',
    photo: '/image/image.png',
  },
  {
    title: 'Card 2',
    description: 'This is the second card description.',
      photo: '/image/image.png',
  },
  {
    title: 'Card 3',
    description: 'This is the third card description.',
    photo: '/image/image.png',
  },
];

export default function Project() {
    return (
        <div className='bg-black'>

            <div className='container pt-14'> <div className="flex">
                <div className="w-1/2 text-white ">

                    <Heading subheading="PROJECTS" title="Our Portfolio" description="We have worked on some of the best projects over the years. Check out our work here" subheadingClassName='text-main pb-4' titleClassName="pb-2 text-white " descriptionClassName="text-[#9F9FA9]" />

                </div>
                <div className="w-1/2  text-white text-end "><Button title='View All' className='bg-main py-3 px-9' >View All </Button></div>
            </div>
        <div className="flex gap-4 w-[944px] mx-auto pb-12">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.photo}
          containerClassName="bg-white shadow-md rounded text-white text-center rounded-3xl w-[272px] pb-4"
          titleClassName="text-black mb-[20px] "
          imageClassName="w-full"
          descriptionClassName="mt-[20px]"
        />
      ))}
    </div></div>



        </div>
    )
}
