import express from "express";
import imageCompressRouter from "./router/image-compress-routes.js";
import morgan from "morgan";
import cors from "cors";
// import mongoose from "mongoose";
const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.get("/health", (req, res) => {
  res.json({ message: "server is up running !" });
});
app.use("/api/v1/compress", imageCompressRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
