import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { CATEGORIES_ACTIONS } from "../utils/Actions/categoty-actions";
import { categoryReducer } from "../reducer";
import { categoryInitialValues } from "../utils/initialValues";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, categoryInitialValues);

  useEffect(() => {
    dispatch({
      type: CATEGORIES_ACTIONS.SHOW_LOADER,
      payload: { categoryLoader: true },
    });
    (async () => {
      try {
        const { data, status } = await axios.get("/api/categories");
        dispatch({
          type: CATEGORIES_ACTIONS.SHOW_LOADER,
          payload: { categoryLoader: false },
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
