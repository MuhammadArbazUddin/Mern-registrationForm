const express = require("express");
const app = express();
const Users = require("./models/user");
app.use(express.json());

const cors = require("cors");
app.use(cors());

require("./db/connection");

app.post("/", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(4000);
