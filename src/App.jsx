import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ImageGen from './Pages/ImageGen';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import { ThemeContext } from '@emotion/react';
import AiServices from './Pages/AiServices';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <div className='mx-auto max-w-7xl'>
          <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/generate_image" element={<ImageGen />} />
              <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
              <Route path="/services" element={<AiServices isDarkMode={isDarkMode} />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
