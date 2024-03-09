import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import OpenAI from "openai";

const About = ({ isDarkMode }) => {
    const [models, setModels] = useState([]);
    const [showAllModels, setShowAllModels] = useState(false);

    useEffect(() => {
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true });

        async function loadModels() {
            try {
                const list = await openai.models.list();
                setModels(list.data);
            } catch (error) {
                console.error('Error loading models:', error);
            }
        }

        loadModels();
    }, []);

    const toggleShowAllModels = () => {
        setShowAllModels(!showAllModels);
    };

    return (
        <div className={`${isDarkMode ? "text-white" : "text-black"} text-gray-900`}>
            <h2 className='text-center font-bold text-2xl py-2'>About</h2>
            <p className={`${isDarkMode ? "text-white" : "text-black"} font-bold text-center text-lg`}>Welcome to this AI Gen Project! </p>
            <p className='text-lg text-center py-2'>We are passionate about harnessing the power of AI to create innovative solutions for generating images, audio, and more. <br /> Our project leverages cutting-edge technology provided by OpenAI to enable users to explore the realm of artificial intelligence in creative ways.</p>
            <div className="models-used">
                <h3 className="text-xl font-semibold mb-4 text-center">Models used:</h3>
                {
                    models.length === 0 ? (
                        <div className="flex flex-col m-auto">
                            <ThreeDots color="#000" height={50} width={100} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {models.slice(0, showAllModels ? models.length : 6).map((modelData, index) => (
                                <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}  rounded-lg shadow-md p-4 `}>
                                    <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">{modelData.id}</h4>
                                    <p className="text-sm font-medium mb-1">Object: {modelData.object}</p>
                                    <p className="text-sm font-medium mb-1">Created: {new Date(modelData.created * 1000).toLocaleString()}</p>
                                    <p className="text-sm font-medium">Owned by: {modelData.owned_by}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
                {/* View More button */}

                {models.length > 6 && (
                    <button className="text-blue-500 font-semibold mt-4 m-auto flex flex-col" onClick={toggleShowAllModels}>
                        {showAllModels ? 'Show Less' : 'View More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default About;
