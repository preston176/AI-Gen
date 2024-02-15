import BoltIcon from '@mui/icons-material/Bolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Mid = () => {
    const cards = [
        {
            icon: <BoltIcon fontSize='large' />,
            title: "Fast and Easy",
            description: "Create stunning images in seconds.",
        },
        {
            icon: <PsychologyIcon fontSize='large' />,
            title: "AI Powered",
            description: "We use OpenAI's GPT-3 to generate images.",
        },
        {
            icon: <MonetizationOnIcon fontSize='large' />,
            title: "Free to Use",
            description: " Our tool is free to use and you can create unlimited images.",
        },
    ]

    return (
        <div className='flex rounded-[3000px] items-center justify-between pt-8  sm:flex-row mobile:flex-col mobile:gap-5 '>
            {
                cards.map((card, index) => (
                    <div key={index} className="flex flex-col justify-around items-center h-60 bg-[#858585] bg-opacity-10 shadow-gray-700 rounded-xl mobile:w-screen md:w-[320px] lg:w-[400px]">
                        <h2 className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[40px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center">{card.title}</h2>
                        <div className="flex justify-center items-center">
                            {card.icon}
                        </div>
                        <div className="">
                            <h3 className="font-thin w-auto">{card.description}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Mid
