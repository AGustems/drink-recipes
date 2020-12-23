import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

// Create the Context
export const CategoryContext = createContext();

// Create the Provider (functions and state)
const CategoryProvider = (props) => {
    // Create the Context State
    const[categories, setCategories] = useState([])

    // Execute the API call
    useEffect(() => {
        const obtainCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categoriesAPI = await axios.get(url)
            setCategories(categoriesAPI.data.drinks)
        }

        obtainCategories()
    },[])
    
    //
    return(
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;