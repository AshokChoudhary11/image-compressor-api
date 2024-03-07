const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://2019civashok7500:2019civashok7500@cluster0.mg0zg97.mongodb.net/?retryWrites=true&w=majority"
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
