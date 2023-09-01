import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Title.css";

export default function Details() {
  const [imageData, setImageData] = useState([]);
  const dataHandler = () => {
    axios
      .get(`http://localhost:8000/data`)
      .then((result) => {
        setImageData(result.data);
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    dataHandler();
  }, []);
  return (
    <div className="imageContainer">
      <div className="imageContainer">
        {imageData.map((value) => {
          return (
            <div>
              <img className="round" src={value.image} width={150} />
              <span></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
