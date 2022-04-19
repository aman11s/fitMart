import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { categoryReducer } from "../reducer";
import { categoryInitialValues } from "../utils";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, categoryInitialValues);

  useEffect(() => {
    dispatch({ type: "LOADER", payload: true });
    (async () => {
      try {
        const { data, status } = await axios.get("/api/categories");
        dispatch({ type: "LOADER", payload: false });
        if (status === 200) {
          dispatch({ type: "CATEGORIES", payload: data.categories });
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ state }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
