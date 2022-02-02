const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const cors = require("cors");
const postRoutes = require("./routes/posts");

const app = express();

app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.CONNECTION_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    console.log("Connected")
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
