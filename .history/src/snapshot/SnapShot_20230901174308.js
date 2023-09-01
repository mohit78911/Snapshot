import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";  

import SnapshotTable from "./SnapshotTable";
import SearchBox from "./SearchBox";
import { ToastContainer, toast } from "react-toastify";
import Title from "./Title";
import { Box } from "@mui/material";
import Details from "./Details";
//=====================================================
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  console.log(data);
  return (
    <Box>
      <Title />
      <div className="container">
        <div className="row">
          <div className="col-4 firstColoum">
            <SearchBox setImage={setImage} image={image} getData={getData} />
          </div>
          {showData ? (
            <div className="col secondColoum">
              <SnapshotTable data={data} />
            </div>
          ) : (
            <div className="col secondColoum">
              <Details />
            </div>
          )}
        </div>
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Please Fill Search Box"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Without any data we can't search anything or no
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              
            </DialogActions>
          </Dialog>
        </div>
        <ToastContainer />
      </div>
    </Box>
  );
}
