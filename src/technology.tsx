'use client';

import React from 'react'
import Heading from './components/ui/heading'
import TabsExample from './components/ui/vertical-tab'

export default function Technology() {
    return (
        <section className="pt-20">
            <div className="mx-auto text-center">
                <Heading
                    subheading="OUR TECHNOLOGY"
                    title="Enhance Software Development With a Comprehensive Technology Stack"
                    description="As a leading software development company, we follow agile methods to ensure fast development and solutions that can grow with your needs. Our approach focuses on innovation, allowing us to create custom software that meets your specific requirements while adapting quickly to changes."
                titleClassName='pb-[20px] pt-4 w-[476px] mx-auto'
                />
            </div>

<div className='bg-black pt-16 pb-16'>
<div className='container'>

<TabsExample />
</div>
</div>


        </section>
    )
}
