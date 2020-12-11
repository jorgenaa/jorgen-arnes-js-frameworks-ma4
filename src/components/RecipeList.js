import {useState, useEffect} from 'react';
import RecipeItem from './RecipeItem';
const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
    const titleMsg = "For fully description click here";

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setRecipes(json.results)
        }) 
        .catch(error => console.log(error))
    }, []);

   
    return (
        <>
            <div className="recipe-list">
                {recipes.map(recipe => {
                    const {title, thumbnail, href, ingredients} = recipe;
                    
                    return(
                        <RecipeItem name={title} 
                                    image={thumbnail} 
                                    url={href} 
                                    ingredients={ingredients} 
                                    key={title}
                                    title={titleMsg} />
                    
                    );
                })}
            
            </div>
        </>
    );
}

export default RecipeList;