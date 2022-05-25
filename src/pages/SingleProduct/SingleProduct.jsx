import React from "react";
import { useParams } from "react-router-dom";
import { SingleProductCard } from "../../components";
import { useProducts } from "../../context";
import "./SingleProduct.css";

export const SingleProduct = () => {
  const { productId } = useParams();

  const {
    state: { products },
  } = useProducts();

  const getProduct = (product, id) => product.find(({ _id }) => _id === id);

  const singleProduct = getProduct(products, productId);

  return (
    <>
      <main className="single-product-main">
        <SingleProductCard singleProduct={singleProduct} />
      </main>
    </>
  );
};
