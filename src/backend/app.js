const exress = require("express");
const book = require("./Bookdata");
const app = exress();
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
require("./Config");

app.get("/data", (req, res) => {
  book
    .find()
    .then((result) => {
      res.status(202).json(result);
      console.log("DATA FETCH DONE");
    })
    .catch((error) => {
      console.log("DATA CAN'T FETCH");
    });
});

app.post("/post", jsonparser, (req, res) => {
  let data = new book({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.body.image,
  });
  data
    .save()
    .then((result) => {
      res.status(202).json(result);
      console.log("DATA ADDED SUCCESSFULLY");
    })
    .catch((error) => {
      console.log("ERROR WITH ADDING DATA");
    });
});

app.delete("/delete/:id", (req, res) => {
  book
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(202).json(result);
      console.log("DATA DELETED SUCCESSFULLY");
    })
    .catch((error) => {
      console.log("ERROR WITH DELETING DATA");
    });
});

app.put("/update/:id", jsonparser, (req, res) => {
  book
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
        },
      }
    )
    .then((result) => {
      res.status(202).json(result);
      console.log("DATA UPDATE SUCCESSFULLY");
    })
    .catch((error) => {
      console.log("ERROR WITH UPDATING");
    });
});

app.listen(port, () => {
  console.log(`RUNNING SUCCESSFULLY ${port}`);
});
