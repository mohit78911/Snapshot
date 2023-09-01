import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

import SnapshotTable from "./SnapshotTable";
import SearchBox from "./SearchBox";

export default function SnapShot() {
  const [image, setImage] = useState("");
  const [data, setData] = useState([]);
  const getData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/collections?page=1&query=${image}&client_id=-DzO7DyFZFBUXuUjR2Tb8dbbi8Qcg40oNw2kVfqoREI`
      )
      .then((result) => {
        setData(result.data.results[0].preview_photos);
        // console.log(result.data.results[0].preview_photos);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(data);
  return (
    <div class="container"> 
    <div class="row">
      <div class="col-4" className="firstColoum">
      <SearchBox setImage={setImage} image={image} getData={getData} />
      </div>
      <div class="col-8" className="firstColoum">
      <SnapshotTable data={data} />
      </div>
    </div>
    </div>
  );
}
