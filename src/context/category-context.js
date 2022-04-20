import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { CATEGORIES_ACTIONS } from "../utils/Actions/categoryActions";
import { categoryReducer } from "../reducer";
import { categoryInitialValues } from "../utils";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, categoryInitialValues);

  useEffect(() => {
    dispatch({
      type: CATEGORIES_ACTIONS.SHOW_LOADER,
      payload: { loader: true },
    });
    (async () => {
      try {
        const { data, status } = await axios.get("/api/categories");
        dispatch({
          type: CATEGORIES_ACTIONS.SHOW_LOADER,
          payload: { loader: false },
        });
        if (status === 200) {
          dispatch({
            type: CATEGORIES_ACTIONS.INITIALIZE_CATEGORIES,
            payload: { categories: data.categories },
          });
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
