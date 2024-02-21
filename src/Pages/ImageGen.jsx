import React from 'react'
import ImageGenerator from '../Components/ImageGenerator/ImageGenerator'

import { ThemeContext } from "@emotion/react";
import { useContext } from "react";



const ImageGen = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <ImageGenerator isDarkMode={isDarkMode} />
    </div>
  )
}

export default ImageGen
