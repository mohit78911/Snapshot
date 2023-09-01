import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

import SnapshotTable from "./SnapshotTable";
import SearchBox from "./SearchBox";
import { ToastContainer, toast } from "react-toastify";
import Title from "./Title";
import { Box } from "@mui/material";

export default function SnapShot() {
  const [image, setImage] = useState(""); //string
  const [data, setData] = useState([]); //Array
  const [showData, setShowData] = useState(false); //Boolean

  const getData = (e) => {
    e.preventDefault();
    let trimedImage = image.trim().trimStart().trimEnd();
    if (trimedImage == "") {
      setShowData(false);
      toast.error("Can't Find ");
    } else {
      setShowData(true);
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

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(data);
  return (
    <Box>
    <Title/>
    <div className="container">
      <div className="row">
        <div className="col-4 firstColoum">
          <SearchBox setImage={setImage} image={image} getData={getData} />
        </div>
        {showData ? (
          <div className="col secondColoum">
            <SnapshotTable data={data} />
          </div>
        ) : <}
      </div>
      <ToastContainer />
    </div>
    </Box>
  );
}
