import BoltIcon from '@mui/icons-material/Bolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Mid = ({ isDarkMode }) => {



    const ThemeStyles = {
        dark: "bg-[#111] shadow-gray-700",
        darkText: 'text-white',
        lightText: 'text-black',
        light: 'bg-[#858585] shadow-gray-700 bg-opacity-10'
    }

    const cards = [
        {
            icon: <BoltIcon fontSize='large' />,
            title: "Fast and Easy",
            description: "No ads ... No Privacy Risks",
        },
        {
            icon: <PsychologyIcon fontSize='large' />,
            title: "AI Powered",
            description: "We use OpenAI's GPT to generate images.",
        },
        {
            icon: <MonetizationOnIcon fontSize='large' />,
            title: "Free to Use",
            description: " Our tool is free to use ... allowing you to create without limits.",
        },
    ]

    return (
        <div className='flex rounded-[3000px] items-center justify-between pt-8  sm:flex-row mobile:flex-col mobile:gap-5 '>
            {
                cards.map((card, index) => (
                    <div key={index} className={`${isDarkMode ? ThemeStyles.dark : ThemeStyles.light} flex flex-col justify-around items-center h-60 rounded-xl mobile:w-screen md:w-[320px] lg:w-[400px]`}>
                        <h2 className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[40px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center">{card.title}</h2>
                        <div className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles.lightText} flex justify-center items-center scale-[2]`}>
                            {card.icon}
                        </div>
                        <div className="">
                            <h3 className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles.lightText} w-auto m-auto text-center`}>{card.description}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Mid
