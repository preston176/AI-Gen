import React, { useContext } from 'react'
import Hero from '../Components/Hero/Hero'
import Mid from '../Components/Mid/Mid'
import Testimonial from '../Components/Testimonial/Testimonial'
import { ThemeContext } from '@emotion/react'

const HomePage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return (

        <>
            <Hero isDarkMode={isDarkMode} />
            <Mid isDarkMode={isDarkMode} />
            <Testimonial isDarkMode={isDarkMode} />
        </>

    )
}

export default HomePage
