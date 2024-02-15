import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Mid from './Components/Mid/Mid';

const App = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <Header />
      <Hero />
      <Mid />
    </div>
  )
}

export default App
