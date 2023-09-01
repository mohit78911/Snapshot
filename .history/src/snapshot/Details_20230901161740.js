import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Title.css";

export default function Details() {
    const [imageData,setImageData] = useState([])
  const dataHandler = () => {
    axios
      .get(`http://localhost:9000/data`)
      .then((result) => {
        setImageData(result.data);
        console.log("node data : ",result.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(()=>{
    dataHandler()
  },[])
  return (
    <div className="imageContainer">
        {
            imageData.ma
        }
      <img
        className="round"
        src="https://i.pinimg.com/564x/bd/f7/9a/bdf79aef64959c665fe3dda5b4e0e2d1.jpg"
        width={150}
      />
      
    </div>
  );
}
