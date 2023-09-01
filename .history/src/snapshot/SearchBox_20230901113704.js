import React from "react";
import { TextField } from "@mui/material";
import "./SearchBox.css"

function SearchBox({ getData, setImage, image }) {
  return (
    <div>
      <div>
        <form onSubmit={getData} className="mt-2">
          <TextField fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="Search Image"
          />
          <button type="submit" className="btn btn-primary m-1">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
