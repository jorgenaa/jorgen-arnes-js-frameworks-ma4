import React from 'react';

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

export default IngredientList;