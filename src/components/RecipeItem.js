import React from 'react';
import IngredientList from './IngredientList';

export const RecipeItem = ({name, image, url, title, ingredients }) => {
    return (
        <>
            <a href={url} title={title} className="card card--hover">
                <img className="card__img" src={image} alt="recipe" />
                <div className="card__body">
                    <h5 className="card__title">{name}</h5>
                    <IngredientList className="card__ingredientList" ingredients={ingredients} />
                </div>
            </a>
        </>
    )
}



export default RecipeItem;
