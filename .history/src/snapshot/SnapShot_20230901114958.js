import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

import SnapshotTable from "./SnapshotTable";
import SearchBox from "./SearchBox";

export default function SnapShot() {
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const getData = (e) => {
    // e.preventDefault();
    if(image = ''){
      console.log("image field is empty")
    }else{

    }
    
  };

  useEffect(() => {
    getData();
  });

  console.log(data);
  return (
    <div className="container"   > 
    <div className="row" >
      <div className="col-4 firstColoum">
      <SearchBox setImage={setImage} image={image} getData={getData} />
      </div>
      <div className="col secondColoum">
      <SnapshotTable data={data} />
      </div>
    </div>
    </div>
  );
}
