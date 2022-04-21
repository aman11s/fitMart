import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Sidebar } from "../../components";

export const Products = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <Sidebar />
    </>
  );
};
