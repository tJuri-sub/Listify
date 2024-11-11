const { mongoose } = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");

const app = express();

// mongodb database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected."))
  .catch((err) => console.log("database not connected.", err));

// cors/midwares
app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Server is running port on ${port}`));
