import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idRecipe, setIdRecipe] = useState(null)
    const [drinkRecipe, setDrinkRecipe] = useState({})
    
    useEffect(() => {
        const obtainRecipe = async () => {
            if(!idRecipe) return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            const result = await axios.get(url)
            setDrinkRecipe(result.data.drinks[0])
        }
        obtainRecipe()
    }, [idRecipe])
    
    return (
        <ModalContext.Provider
            value={{
                drinkRecipe,
                setIdRecipe,
                setDrinkRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider