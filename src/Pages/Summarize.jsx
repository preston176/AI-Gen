import { useRef, useState } from 'react';
import axios from 'axios';
import '../Components/ImageGenerator/ImageGenerator.css';
import Swal from 'sweetalert2';

const Summarize = ({ isDarkMode }) => {
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const inputReference = useRef(null);

    const handleSummarize = async () => {
        if (inputReference.current.value === '') {
            // alert('Please enter some text to summarize.');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please enter some text to summarize",
            });
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post('YOUR_OPENAI_API_ENDPOINT', {
                text: inputReference.current.value
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            });

            setSummary(response.data.summary);
            setLoading(false);
        } catch (error) {
            console.error('Error generating summary:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to generate summary. Please try again later.'
            });
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-4 gap-4 ">
            <div className={`${isDarkMode ? "text-white" : "text-black"} text-4xl font-medium pb-6`}>Text <span className="text-pink-500">Summarization</span></div>
            <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-900"} flex flex-col w-full max-w-screen-md items-center justify-center  p-4 rounded-md`}>
                <textarea ref={inputReference} placeholder="Paste your text here..." rows="5" cols="50" className="w-full h-40 bg-transparent border-none outline-none text-white placeholder-white text-lg px-4 mr-2" />
            </div>
            <button className="mt-4 bg-[#DE1B89] hover:bg-[#c448c8] text-white font-bold py-2 px-4 rounded" onClick={handleSummarize} disabled={loading}>Summarize</button>
            {loading && <div className="loading">Loading...</div>}
            {summary && (
                <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-900"} flex flex-col w-full max-w-screen-md items-center justify-center p-4 rounded-md`}>
                    <h2 className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-bold mb-2`}>Summary:</h2>
                    <p className={`${isDarkMode ? "text-white" : "text-black"} text-lg`}>{summary}</p>
                </div>
            )}
        </div>
    );
}

export default Summarize;
