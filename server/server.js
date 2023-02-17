import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });
const DB = process.env.DATABASE;

const app = express();

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error => ", err));

//middlewares

app.use(express.json({ limit: "5mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://sportifybook.netlify.app"],
  })
);

app.use(express.urlencoded({ extended: true }));

// autload routes

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server running on port 8000");
});
