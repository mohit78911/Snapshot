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
    if (image === "") {
      console.log("image field is empty");
    } else {
      axios
        .get(
          `https://api.unsplash.com/search/collections?page=1&query=${image}&client_id=-DzO7DyFZFBUXuUjR2Tb8dbbi8Qcg40oNw2kVfqoREI`
        )
        .then((result) => {
          setData(result.data.results[0].preview_photos);
          // console.log(result.data.results[0].preview_photos);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getData();
  });

  console.log(data);
  return (
    <div className="container">
      <div className="row">
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
