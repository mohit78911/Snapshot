import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Title.css";

export default function Details() {
  const [imageData, setImageData] = useState([]);
  const dataHandler = () => {
    axios
      .get(`http://localhost:9000/data`)
      .then((result) => {
        setImageData(result.data);
        console.log("node data : ", result.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    dataHandler();
  }, []);
  return (
    <div className=" ">
      {imageData.map((value) => {
        return <img className="round" src={value.image} width={150} />;
      })}
    </div>
  );
}
