import React, { useState, useEffect } from 'react'
import axios from "axios";
import "css/Okurimononavi.css"

function OkurimonoNavi() {

  const [img, setImg] = useState([])
  const [url, setUrl] = useState([])


  const getOkurimonoNavi = async () => {
    const response = await axios.get("api/navi")
    setImg([response.data[0][2],response.data[1][2]])
    setUrl([response.data[0][3],response.data[1][3]])
  };

  useEffect(() => {
 
    getOkurimonoNavi()
    
  } ,[])

 
  return (
    <div className="mt-4">
      <h3 className="okurimono-h3">OkurimonoNavi</h3>
    <div className="nav-container">
      <a href={url[0]}target="_blank" rel="noopener noreferrer"><img className="sliderImage" src={img[0]} alt=""/></a>
    <div>
    <a href={url[1]}target="_blank" rel="noopener noreferrer"><img className="sliderImage" src={img[1]} alt=""/></a>
  </div>
  </div>
  </div>
  )
}

export default OkurimonoNavi
