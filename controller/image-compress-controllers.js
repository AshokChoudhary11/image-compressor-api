import sharp from "sharp";

export const testing = (req, res) => {
  res.status(200).json({ message: "hello world" });
};
export const compressImage = async (req, res) => {
  console.log("trse");
  try {
    const image = req.file.buffer;
    const resolution = req.body.resolution * 1;
    const compressedImageBuffer = await sharp(image).resize(resolution).toBuffer();
    res.set("Content-Type", "image/jpeg");
    res.send(compressedImageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
