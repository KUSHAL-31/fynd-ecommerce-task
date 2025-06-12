const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const { search, sort, category, brand, page = 1, limit = 8 } = req.query;

    const query = {};
    if (search) query.name = { $regex: search, $options: "i" };
    if (category) query.category = category;
    if (brand) query.brand = brand;

    const sortOption =
      sort === "asc" ? { price: 1 } : sort === "desc" ? { price: -1 } : {};

    const products = await Product.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({ success: true, products, total });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: err.message || err,
    });
  }
};