import React, {useContext} from 'react'
import {RecipeContext} from '../context/RecipeContext'

import Recipe from './Recipe'

const RecipeList = () => {
    const {recipe} = useContext(RecipeContext)
    
    return (
        <div className="row mt-5">
            {recipe.map(recipe => (
                <Recipe 
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    )
}

export default RecipeList
