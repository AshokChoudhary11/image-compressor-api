import express from "express";

const imageCompressRouter = express.Router();

imageCompressRouter.get("/", (res, req) => {
  res.statusCode(200).json({ message: "hello world" });
});
