import React, {useState, useContext} from 'react'
import {ModalContext} from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'block',
        position: 'absolute',
        overflowY: 'scroll',
        width: 400,
        maxHeight: 750,
        height: '100vh',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({recipe}) => {
    const {drinkRecipe, setIdRecipe, setDrinkRecipe} = useContext(ModalContext)

    // Material UI Modal Config
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles()
    
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    // Show and format the ingredients
    const showIngredients = data => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            if(data[`strIngredient${i}`]){
                ingredients.push(
                    <li><b>{data[`strIngredient${i}`]}:</b> {data[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }


    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={recipe.strDrink}/>
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipe.idDrink)
                            handleOpen()
                            }}>
                        Show Recipe
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            setIdRecipe(null)
                            setDrinkRecipe({})
                            handleClose()
                        }}>
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{drinkRecipe.strDrink}</h2>
                            <h3 className="mt-4">Preparation</h3>
                            <p>{drinkRecipe.strInstructions}</p>
                            <img className="img-fluid my-4" src={drinkRecipe.strDrinkThumb} alt={drinkRecipe.strDrink}/>
                            <h3>Ingredients and Quantities</h3>
                            <ul>
                                {showIngredients(drinkRecipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
