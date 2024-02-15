import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'

const Hero = () => {
    return (
        <>
            <div className='mt-8 flex justify-center items-center h-full bg-[#858585] bg-opacity-10 shadow-gray-700 rounded-[3000px]'>

                <h2 className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[60px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center' >Create Stunning Images with AI</h2>

            </div>
            <ImageSlider />
        </>
    )
}

export default Hero
