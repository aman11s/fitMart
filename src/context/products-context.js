import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer";
import { productInitialValues } from "../utils/initialValues";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productInitialValues);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts };
