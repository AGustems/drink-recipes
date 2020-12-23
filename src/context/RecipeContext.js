import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipeContext = createContext()

const RecipeProvider = (props) => {
    const [recipe, setRecipe] = useState([])
    const [recipeSearch, setRecipeSearch] = useState({
        name: '',
        category: ''
    });
    const [data, setData] = useState(false)

    useEffect(() => {
        if(data){
            const obtainRecipes = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${recipeSearch.name}&c=${recipeSearch.category}`
                const result = await axios.get(url)
                setRecipe(result.data.drinks)
            }

            obtainRecipes()
        }
        
        

    }, [recipeSearch])

    return(
        <RecipeContext.Provider
            value={{
                recipe,
                setRecipeSearch,
                setData
            }}
        >
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider