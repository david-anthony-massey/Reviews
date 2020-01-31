const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get("/dist", urlencodedParser, (req, res) => {
  db.getCurrentItem(req.query.productID, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/todo", (req, res) => {
  const task = req.body.task;
  console.log(task);
  db.addTask(task, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3030, () => {
  console.log("I'm now listening on port 3030!");
});
