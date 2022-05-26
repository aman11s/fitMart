import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader, SingleProductCard } from "../../components";
import { useDocumentTitle } from "../../hooks";
import "./SingleProduct.css";

export const SingleProduct = () => {
  const { productId } = useParams();

  const { setDocumentTitle } = useDocumentTitle("Products");

  const [singleProduct, setSingleProduct] = useState({});
  const [pageLoader, setPageLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setPageLoader(true);
        const { data, status } = await axios({
          method: "GET",
          url: `/api/products/${productId}`,
        });
        if (status === 200) {
          setPageLoader(false);
          setDocumentTitle(data.product.title);
          setSingleProduct(data.product);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [productId, setDocumentTitle]);

  if (pageLoader) {
    return (
      <main className="main-min-height loader-page">
        <Loader />
      </main>
    );
  }
  return (
    <main className="single-product-main">
      {pageLoader && <Loader />}
      <SingleProductCard singleProduct={singleProduct} />
    </main>
  );
};
