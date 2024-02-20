import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import defaultImage from '../../assets/defaultImage.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className='mb-4 mt-8 flex flex-col justify-evenly items-center h-[40vh] bg-[#858585] bg-opacity-10 shadow-gray-700 rounded-3xl]'>

                <h2 className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[60px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center' >Create Stunning Images with AI</h2>



                <div className="">

                    <Link to="/generate_image">  <h3 className='btn'>Get Started</h3></Link>

                </div>
            </div>
            {/* <ImageSlider /> */}

        </>
    )
}

export default Hero
