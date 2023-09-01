import React from "react";
import { Button, TextField } from "@mui/material";
import "./SearchBox.css";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

function SearchBox({ getData, setImage, image }) {
  return (
    <div>
      <div>
        <form onSubmit={getData} className="mt-2">
          <TextField
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     getData();
            //   }
            // }}
            wid
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="Search Image"
          />
          <Button type="submit" sx={{ marginTop: "5px" }}>
            <LocationSearchingIcon />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
