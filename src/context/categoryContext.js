import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const CategoryContext = createContext(null);

const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await axios.get("/api/categories");
            console.log(res);
        })();
    }, [])

    return <CategoryContext.Provider value={}>
        {children}
    </CategoryContext.Provider>
}

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
