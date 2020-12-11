import React from 'react';
import PropTypes from "prop-types";
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

RecipeItem.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeItem;
