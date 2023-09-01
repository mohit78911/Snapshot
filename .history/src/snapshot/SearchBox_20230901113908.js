import React from "react";
import { Button, TextField } from "@mui/material";
import "./SearchBox.css";

function SearchBox({ getData, setImage, image }) {
  return (
    <div>
      <div>
        <form onSubmit={getData} className="mt-2">
          <TextField
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            label="Search Image"
          />
          <Button type="submit">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
