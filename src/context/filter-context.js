import { createContext, useReducer, useContext } from "react";
import { filterReducer } from "../reducer";
import { filterInitialValues } from "../utils/initialValues";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialValues);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
