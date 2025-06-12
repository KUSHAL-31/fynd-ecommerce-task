const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
require("dotenv").config();

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"));

app.use("/products", productRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
