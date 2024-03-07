import express from "express";
import {
  compressImage,
  testing,
} from "../controller/image-compress-controllers.js";
import multer from "multer";
const upload = multer();
const imageCompressRouter = express.Router();

imageCompressRouter.get("/", testing);
imageCompressRouter.post("/", upload.single("image"), compressImage);

export default imageCompressRouter;
