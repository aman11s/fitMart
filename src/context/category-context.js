import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get("/api/categories");
        if (status === 200) {
          setCategories(data.categories);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
