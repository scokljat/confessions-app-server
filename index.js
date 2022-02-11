const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const postRoutes = require("./routes/posts");

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.CONNECTION_URL, console.log("Connected"))
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
