import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchResults";
import Card from "../components/Card";
import { paginate } from "../utils/paginate";
import Loading from "./Loading";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProductData, setNewProductData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const data = await fetchData();
      const newData = paginate(data);
      setNewProductData(newData);

      if (newProductData) {
        setTotalPages(newData.length);

        setProducts(newData[page]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (loading) return;
    setProducts(newProductData[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  if (loading) {
    return <Loading />;
  }

  const paginatePAges = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <section className="mt-8 ml-4 mr-4 md:mr-20 md:ml-20 lg:ml-32 lg:mr-32 mb-2 lg:mt-24">
      <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-coffeePot2 mb-2">
        Products
      </h1>

      <div className=" md:mt-4 grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3">
        {products.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
      <div className="text-center mt-4 mb-4">
        {paginatePAges.map((i) => {
          return (
            <button
              key={i}
              className={`p-2 mr-2 bg-coffeePot1 ${
                i === page ? "bg-coffeePot2" : null
              }`}
              onClick={() => handlePage(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
