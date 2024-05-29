import BoltIcon from '@mui/icons-material/Bolt';
import ArticleIcon from '@mui/icons-material/Article';
import TranscribeIcon from '@mui/icons-material/Transcribe';
import { Link } from 'react-router-dom';

const AiServices = ({ isDarkMode }) => {



    const ThemeStyles = {
        dark: "bg-[#111] shadow-gray-700",
        darkText: 'text-white',
        lightText: 'text-black',
        light: 'bg-[#858585] shadow-gray-700 bg-opacity-10'
    }

    const cards = [
        {
            icon: <BoltIcon fontSize='large' />,
            title: "Generate Images",
            description: "Describe and get images",
            link: '/services/generate_image'
        },
        {
            icon: <TranscribeIcon fontSize='large' />,
            title: "Speech to Text",
            description: "Convert your spoken words into text instantly with our advanced speech-to-text feature.",
            link: '/services/speech_to_text'
        },
        {
            icon: <ArticleIcon fontSize='large' />,
            title: "Summarization",
            description: "Summarize long documents, articles, or reports into concise overviews.",
            link: '/services/summarize'
        },
    ]
    //TODO: To be implemented
    // const cards2 = [
    //     {
    //         icon: <BoltIcon fontSize='large' />,
    //         title: "Generate Images",
    //         description: "Describe and get images",
    //     },
    //     {
    //         icon: <TranscribeIcon fontSize='large' />,
    //         title: "Speech to Text",
    //         description: "Convert your spoken words into text instantly with our advanced speech-to-text feature.",
    //     },
    //     {
    //         icon: <ArticleIcon fontSize='large' />,
    //         title: "Summarization",
    //         description: "Summarize long documents, articles, or reports into concise overviews.",
    //     },
    // ]

    return (
        <>
            <div className={`${isDarkMode ? ThemeStyles.dark : ThemeStyles.light} mb-0 mt-8 flex flex-col justify-evenly items-center h-[40vh] rounded-3xl`}>
                <h2 className='bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[60px] font-mono p-0 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center' >
                    Services</h2>
            </div>
            <div className='flex rounded-[3000px] items-center justify-between pt-8 py-4  sm:flex-row mobile:flex-col mobile:gap-5 '>
                {
                    cards.map((card, index) => (
                        <Link to={card.link}>
                            <div key={index} className={`${isDarkMode ? ThemeStyles.dark : ThemeStyles.light} flex flex-col justify-around items-center h-60 rounded-xl mobile:w-screen md:w-[320px] lg:w-[400px] hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-150`}>
                                <h2 className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[40px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center">{card.title}</h2>
                                <div className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles.lightText} flex justify-center items-center scale-[2]`}>
                                    {card.icon}
                                </div>
                                <div className="">
                                    <h3 className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles.lightText} w-auto m-auto text-center`}>{card.description}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {/* TODO: To be implemented */}
            {/* <div className='flex rounded-[3000px] items-center justify-between pt-8  sm:flex-row mobile:flex-col mobile:gap-5 '>
                {
                    cards2.map((card, index) => (
                        <div key={index} className={`${isDarkMode ? ThemeStyles.dark : ThemeStyles.light} flex flex-col justify-around items-center h-60 rounded-xl mobile:w-screen md:w-[320px] lg:w-[400px]`}>
                            <h2 className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text laptop:text-[40px] font-mono p-4 md:text-[76px] sm:text-[46px] mobile:text-[28px] small_mobile:text-[25px] text-center opacity-5">{card.title}</h2>
                            <div className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles2.lightText} flex justify-center items-center scale-[2] opacity-5`}>
                                {card.icon}
                            </div>
                            <div className="">
                                <h3 className={`${isDarkMode ? ThemeStyles.darkText : ThemeStyles.lightText} w-auto m-auto text-center opacity-100`}>{card.description}</h3>
                            </div>
                        </div>
                    ))
                }
            </div> */}

        </>
    )
}

export default AiServices
