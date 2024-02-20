import React from 'react'

const ImageGenerator = () => {
    return (
        <>
            <div className="flex flex-col m-auto items-center justify-center mt-[80px] mb-[20px] gap-[30px]">
                <div className="text-[70px] font-medium	pb-[30px]">AI Image <span className='text-pink-500'>Generator</span></div>
                <div className="flex flex-col"><img className='w-[512px]' src="" alt="default-image" /></div>
                <div className="flex w-[1000px] h-[95px] justify-around items-center rounded-[50px] bg-[#1F3540]">
                    <input type="text" placeholder='Describe what you would like to see' className='w-[600px] h-[50px] bg-transparent border-none outline-none font-[18px] text-white pl-[35px] mr-[35px]' />
                    <div className="">Generate</div>
                </div>
            </div>
        </>
    )
}

export default ImageGenerator
