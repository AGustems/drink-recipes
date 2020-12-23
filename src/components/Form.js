import React, {useContext, useState} from 'react'
import {CategoryContext} from '../context/CategoryContext'
import {RecipeContext} from '../context/RecipeContext'

const Form = () => {
    const {categories} = useContext(CategoryContext)
    const {setRecipeSearch, setData} = useContext(RecipeContext)
    
    const [search, setSearch] = useState({
        name: '',
        category: ''
    })
    
    const obtainRecipeData = ({target}) => {
        setSearch(state => ({
            ...state,
            [target.name]: target.value
        }))
    }

    return (
        <form 
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                setRecipeSearch(search)
                setData(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by Category or Ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Search by Ingredient"
                        onChange={obtainRecipeData}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={obtainRecipeData}
                    >
                        <option value="">{'>-- Select a Category --<'}</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                                >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        value="Search Drinks"
                        className="btn btn-block btn-primary"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
