import {useEffect} from 'react';

const RecipeList = () => {
    
    const url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))
    }, []);

   
    return null;
}

export default RecipeList;