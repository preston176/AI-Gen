
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];

const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
const ImageSlider = () => {
    return (
        <div>
            <Slide slidesToScroll={2} slidesToShow={2} indicators={false} responsive={responsiveSettings}>
                {/* children here */}

                {
                    images.map((image, index) => (
                        <div key={index} className="each-slide-effect rounded-2xl">
                            <div style={{ 'backgroundImage': `url(${image})` }}>
                                {/* <span>Slide {index + 1}</span> */}
                            </div>
                        </div>
                    ))
                }

            </Slide>
        </div>
    );
};

export default ImageSlider;