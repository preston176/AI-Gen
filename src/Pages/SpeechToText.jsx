import React, { useState } from 'react';
import axios from 'axios';
import { ReactMic } from 'react-mic';
import Swal from 'sweetalert2';

const SpeechToText = ({ isDarkMode }) => {
    const [recording, setRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [audioBlob, setAudioBlob] = useState(null);
    const [recognizing, setRecognizing] = useState(false);

    const startRecording = () => {
        setRecording(true);
    };

    const stopRecording = () => {
        setRecording(false);
    };

    const onData = (recordedBlob) => {
        // You can use this function if you want to perform any operation with the blob data in real-time.
    };

    const onStop = (recordedBlob) => {
        setAudioBlob(recordedBlob.blob);
        transcribeAudio(recordedBlob.blob);
    };

    const transcribeAudio = async (audioBlob) => {
        setRecognizing(true);
        try {
            const formData = new FormData();
            formData.append('file', audioBlob, 'audio.wav');
            formData.append('model', 'whisper-1');

            const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            });

            setTranscript(response.data.text);
        } catch (error) {
            console.error('Error transcribing audio:', error.response ? error.response.data : error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to transcribe audio. Please try again later.',
            });
        } finally {
            setRecognizing(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-4 gap-4">
            <div className={`${isDarkMode ? "text-white" : "text-black"} text-4xl font-medium pb-6`}>
                AI Speech <span className="text-pink-500">Recognizer</span>
            </div>
            <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-900"} flex flex-col w-full max-w-screen-md items-center justify-center p-4 rounded-md`}>
                <ReactMic
                    record={recording}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#000000"
                    backgroundColor="#FF4081"
                />
                <input
                    type="text"
                    placeholder="Transcription will appear here"
                    className="w-full h-12 bg-transparent border-none outline-none text-white placeholder-white text-lg px-4 mr-2 mt-4"
                    value={transcript}
                    readOnly
                />
                <button
                    className="mt-4 bg-[#DE1B89] hover:bg-[#c448c8] text-white font-bold py-2 px-4 rounded"
                    onClick={recording ? stopRecording : startRecording}
                    disabled={recognizing}
                >
                    {recording ? 'Stop Recording' : 'Start Recording'}
                </button>
            </div>
        </div>
    );
};

export default SpeechToText;
