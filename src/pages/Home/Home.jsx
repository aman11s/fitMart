import React from "react";
import { CategoryCard, Hero, Loader, TrumpCard } from "../../components";
import { trumpCardObj } from "../../utils";
import { useCategory } from "../../context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Home = () => {
  useDocumentTitle("Home");
  const { state } = useCategory();
  const { categories, categoryLoader } = state;

  return (
    <>
      <Hero />
      <h2 className="h2 mt-5 text-center">Why Choose Us?</h2>
      <div className="m-4 mb-6 trump-cards container-flex-justify-center">
        {trumpCardObj.map((data) => {
          return <TrumpCard key={data.id} data={data} />;
        })}
      </div>
      <h2 id="category" className="h2 mt-5 text-center">
        Featured Categories
      </h2>
      {categoryLoader && <Loader />}
      <div className="category m-4">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </>
  );
};
