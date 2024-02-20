import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ImageGen from './Pages/ImageGen';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='mx-auto max-w-7xl'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generate_image" element={<ImageGen />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
