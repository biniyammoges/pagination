import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Product = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(`/api/products?page=${page}`);
      setProducts(data.products);
      setPages(data.pages);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, [setLoading, setProducts, page]);

  return (
    <div className="container">
      <div className="grid">
        {loading && <h2>Loading ..</h2>}
        {products.map((product) => (
          <div key={product._id} className="product">
            <p className="product-name"> {product.name}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-brand">{product.brand}</p>
          </div>
        ))}
      </div>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </div>
  );
};

export default Product;
