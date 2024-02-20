import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Mid from '../Components/Mid/Mid'
import TrustedBy from '../Components/TrustedBy/TrustedBy'
import Testimonial from '../Components/Testimonial/Testimonial'

const HomePage = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Header />
            <Hero />
            <Mid />
            <TrustedBy />
            <Testimonial />
        </div>
    )
}

export default HomePage
