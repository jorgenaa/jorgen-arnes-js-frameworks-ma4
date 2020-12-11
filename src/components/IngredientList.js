import React from 'react';
import PropTypes from 'prop-types';

export const IngredientList = ({ingredients}) => {
  const ingredientsArray = ingredients.split(',');

    return(  
            <> 
                {ingredientsArray.map(ingredient => {
                    return <li>{ingredient}</li>;
                })}
            </>
    )
};

IngredientList.propTypes = {
     ingredients: PropTypes.string.isRequired
 };

export default IngredientList;