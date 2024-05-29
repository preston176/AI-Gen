import React, { useRef, useState } from 'react';
import defaultImage from '../../assets/defaultImage.jpg';
import axios from 'axios';
import './ImageGenerator.css';
import Swal from 'sweetalert2';

const ImageGenerator = ({ isDarkMode }) => {
    // ImageURL State
    const [imageURL, setImageURL] = useState('/');
    const inputReference = useRef(null);
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {
        if (inputReference.current.value === '') {
            alert('Please enter a description');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post("https://api.openai.com/v1/images/generations", {
                prompt: `${inputReference.current.value}`,
                n: 1,
                size: "512x512",
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                }
            });

            const data = response.data;
            const imageURL = data.data[0].url;
            setImageURL(imageURL);
            setLoading(false)
        } catch (error) {
            console.error('Error generating image:', error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Failed to generate image. Please try again later.",
            });
            setLoading(false)
            setImageURL(defaultImage)
            // alert('Failed to generate image. Please try again later.');
        }
    };

    const handleDownload = () => {
        if (imageURL !== '/') {
            // Create a temporary anchor element
            const anchor = document.createElement('a');
            anchor.href = imageURL;
            anchor.download = `${inputReference.current.value}.jpg`; // Set the download attribute with the desired filename
            anchor.click();
        } else {
            alert('No image to download. Please generate an image first.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-4 gap-4">
            <div className={`${isDarkMode ? "text-white" : "text-black"} text-4xl font-medium pb-6`}>AI Image <span className="text-pink-500">Generator</span></div>
            <div className="flex flex-col">
                <img className="min-w-[200px] h-auto rounded-md max-w-[300px]" src={imageURL === "/" ? defaultImage : imageURL} alt="generated-image" />
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading ...</div>
                </div>
            </div>
            <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-900"} flex flex-col w-full max-w-screen-md items-center justify-center  p-4 rounded-md`}>
                <input ref={inputReference} type="text" placeholder="Describe what you would like to see" className="w-full h-12 bg-transparent border-none outline-none text-white placeholder-white text-lg px-4 mr-2" />
            </div>
            {/* buttons container */}
            <div className="flex flex-row gap-20">
                <button className="mt-4 bg-[#DE1B89] hover:bg-[#c448c8] text-white font-bold py-2 px-4 rounded" onClick={generateImage}>Generate</button>
                <button className="mt-4 bg-[#DE1B89] hover:bg-[#c448c8] text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>Download Image</button>
            </div>
        </div>
    );
}

export default ImageGenerator;
