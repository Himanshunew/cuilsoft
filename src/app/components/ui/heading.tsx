import React from 'react'

export default function heading(subheding, tiitle, description) {
    return (
        <>
            <p className="text-center font-semibold text-[24px] leading-[16.41px] font-poppins">
                {subheding}
            </p>

            <h2 className="font-poppins font-semibold text-[24px] leading-[16.41px] tracking-[0]">
                {tiitle}
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-[22px] tracking-[0] text-center"
            > {description}</p>
        </>
    )
}
