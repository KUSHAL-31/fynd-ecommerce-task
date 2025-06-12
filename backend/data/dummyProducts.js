require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

const tshirtImage =
  "https://res.cloudinary.com/dzdgpwtox/image/upload/w_900,c_scale/l_final_designs:seller_design_199087:f_20210515121055.png,w_360,h_400,c_fit,x_0,y_0/tshirts/black_f.jpg";
const jeansImage =
  "https://cdn-images.farfetch-contents.com/24/99/29/84/24992984_55310906_600.jpg";

  const dummyData = [
    {
      name: "Levi’s Slim Jeans",
      price: 1399,
      image: jeansImage,
      category: "Jeans",
      brand: "Levi’s",
    },
    {
      name: "Puma Sport T-shirt",
      price: 1499,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Puma",
    },
    {
      name: "Zara Classic Jeans",
      price: 1099,
      image: jeansImage,
      category: "Jeans",
      brand: "Zara",
    },
    {
      name: "HRX Pro T-shirt",
      price: 2299,
      image: tshirtImage,
      category: "Tshirts",
      brand: "HRX",
    },
    {
      name: "Puma Street Fit Jeans",
      price: 999,
      image: jeansImage,
      category: "Jeans",
      brand: "Puma",
    },
    {
      name: "Zara Logo T-shirt",
      price: 1899,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Zara",
    },
    {
      name: "HRX Urban Jeans",
      price: 1599,
      image: jeansImage,
      category: "Jeans",
      brand: "HRX",
    },
    {
      name: "Levi’s Premium T-shirt",
      price: 1799,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Levi’s",
    },
    {
      name: "Zara Skinny Jeans",
      price: 1899,
      image: jeansImage,
      category: "Jeans",
      brand: "Zara",
    },
    {
      name: "Puma Dry Fit T-shirt",
      price: 999,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Puma",
    },
    {
      name: "HRX Stretch Jeans",
      price: 2299,
      image: jeansImage,
      category: "Jeans",
      brand: "HRX",
    },
    {
      name: "Levi’s Crew Neck T-shirt",
      price: 849,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Levi’s",
    },
    {
      name: "Zara Ripped Jeans",
      price: 2799,
      image: jeansImage,
      category: "Jeans",
      brand: "Zara",
    },
    {
      name: "Puma Graphic T-shirt",
      price: 699,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Puma",
    },
    {
      name: "HRX Jogger Jeans",
      price: 1199,
      image: jeansImage,
      category: "Jeans",
      brand: "HRX",
    },
    {
      name: "Levi’s Oversized T-shirt",
      price: 1299,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Levi’s",
    },
    {
      name: "Zara Vintage Jeans",
      price: 2049,
      image: jeansImage,
      category: "Jeans",
      brand: "Zara",
    },
    {
      name: "Puma Cotton T-shirt",
      price: 1149,
      image: tshirtImage,
      category: "Tshirts",
      brand: "Puma",
    },
    {
      name: "Levi’s Straight Jeans",
      price: 1999,
      image: jeansImage,
      category: "Jeans",
      brand: "Levi’s",
    },
    {
      name: "HRX V-neck T-shirt",
      price: 999,
      image: tshirtImage,
      category: "Tshirts",
      brand: "HRX",
    },
  ];
  
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(dummyData);
    console.log("Dummy products inserted!");
    process.exit();
  })
  .catch((err) => {
    console.error("Error inserting dummy products:", err);
    process.exit(1);
  });
