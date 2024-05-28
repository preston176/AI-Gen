import React, { useContext } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'
import defaultImage from '../../assets/defaultImage.jpg'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

const Hero = ({ isDarkMode }) => {


    const ThemeStyles = {
        dark: "bg-[#111] shadow-gray-700",
        darkBtn: 'bg-red-50 text-black p-4 rounded hover:bg-red-500 hover:text-white',
        lightBtn: 'bg-red-500 text-white p-4 rounded hover:bg-red-400 hover:text-black',
        light: 'bg-[#858585] shadow-gray-700 bg-opacity-10'
    }
    return (
        <>
            <div className={`${isDarkMode ? ThemeStyles.dark : ThemeStyles.light} mb-4 mt-8 flex flex-col justify-evenly items-center h-[40vh] rounded-3xl`}>


                <h2 className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[60px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center' ><Typewriter
                    options={{
                        strings: ['Create Stunning Images in Seconds', 'Describe and Create any Content in Seconds', 'AI Powered', 'Free to Use'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h2>



                <div className="">

                    <Link to="/services">  <h3 className={`${isDarkMode ? ThemeStyles.darkBtn : ThemeStyles.lightBtn}' hover:scale-105 transition ease-in-out delay-50 hover:transition-all`}>Get Started</h3></Link>

                </div>
            </div>
            {/* <ImageSlider /> */}

        </>
    )
}

export default Hero
