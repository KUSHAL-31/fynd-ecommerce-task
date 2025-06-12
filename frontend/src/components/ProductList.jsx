import { useState, useEffect } from "react";
import axios from "axios";
import FilterDropdown from "./FilterDropdown";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products`, {
          params: { search, sort, category, brand, page },
        });
        if (res.data.success) {
          setProducts(res.data.products);
        } else {
          alert("Failed to fetch products")
        }
      } catch (err) {
        alert("Somethinh went wrong");
      }
    };
    fetchProducts();
  }, [search, sort, category, brand, page]);

  return (
    <div className="product-list-container">
      <div className="controls">
        <input
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <FilterDropdown
          options={[
            { label: "Sort", value: "" },
            { label: "Low to High", value: "asc" },
            { label: "High to Low", value: "desc" },
          ]}
          value={sort}
          onChange={setSort}
        />

        <FilterDropdown
          options={[
            { label: "All Categories", value: "" },
            { label: "Jeans", value: "Jeans" },
            { label: "Tshirts", value: "Tshirts" },
          ]}
          onChange={setCategory}
        />

        <FilterDropdown
          label="Brand"
          options={[
            { label: "All Brands", value: "" },
            { label: "Levi’s", value: "Levi’s" },
            { label: "Puma", value: "Puma" },
          ]}
          value={brand}
          onChange={setBrand}
        />
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
