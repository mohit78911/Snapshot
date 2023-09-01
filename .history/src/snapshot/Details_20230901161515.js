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
        setImageData(result);
        console.log("node data",result);
      })
      .catch((error) => console.log(error));
  };
  useEffect(()=>{
    dataHandler()
  },[])
  return (
    <div className="imageContainer">
      <img
        className="round"
        src="https://i.pinimg.com/564x/bd/f7/9a/bdf79aef64959c665fe3dda5b4e0e2d1.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/736x/b8/96/4b/b8964b1377abc69682cc9f283b6785b2.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/7e/c9/21/7ec921b4667491ab9bd898162baa521f.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/736x/bd/72/63/bd72636155a89e5f111a6adfc4ef129e.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/736x/6b/cd/fb/6bcdfb3f352b2922c73c0ae04074bceb.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/736x/87/81/cb/8781cb11435fd5c24c20a7cb414b1acf.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/07/c3/13/07c31386da5ee23e6bd04f313797755c.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/b8/58/41/b85841ab7b8a0f5649d634ea77744b1c.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/52/84/b8/5284b8e8ed591c925a10adea027cf913.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/c0/db/47/c0db4730536710d622d3e4cde0f4d2a0.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/0d/b7/91/0db791361e639229f9a6013f0b1968c7.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/57/c6/f6/57c6f668acb65d7f34f7598c52cfddfe.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/54/12/47/5412471c2eef9300778da4312aae074a.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/bb/34/94/bb3494232b82b491d12a0639ec181874.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/10/2b/a1/102ba1e1a391baf8af6370d6bdbb30f1.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/e7/14/ba/e714baaf7b7485b71297053d3b8fcd07.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/f4/93/fa/f493fa6288f10d4b454d58aefaf28704.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/fc/46/b7/fc46b75fe8bb1f08cd368b637ee32cda.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/236x/8b/99/e0/8b99e0ef6b45ce988415738dca289e0a.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/5f/3c/11/5f3c11d7987119a4a05a4a07796afa39.jpg"
        width={150}
      />
      <img
        className="round"
        src="https://i.pinimg.com/564x/73/cc/32/73cc32e27fe394567aea15ab68fc1378.jpg"
        width={150}
      />
    </div>
  );
}
