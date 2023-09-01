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
    <div>
      <h2>IMAGE 's What you want, All Are Here!</h2>
      <div style={{flex:"5"}}></div>
      <SearchBox setImage={setImage} image={image} getData={getData} />
      <SnapshotTable data={data} />
      <div>{data.id}</div>
    </div>
  );
}
