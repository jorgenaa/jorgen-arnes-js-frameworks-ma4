import {useState, useEffect} from 'react';
import RecipeItem from './RecipeItem';
import SearchRecipe from './SearchRecipe';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
    const titleMsg = "For fully description click here";

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setRecipes(json.results)
            setFilteredRecipes(json.results)
        }) 
        .catch(error => console.log(error))
    }, []);

   const filterRecipes = (e) => {
        const searchValue = e.target.value.toLowerCase();

		const filteredArray = recipes.filter((recipe) => {
			const lowerCaseName = recipe.title.toLowerCase();

		if (lowerCaseName.startsWith(searchValue)){
			return true;
		}
		return false;
	});
	setFilteredRecipes(filteredArray);
    }

    return (
        <>
            <SearchRecipe handleSearch={filterRecipes} />

            <div className="recipe-list">
                {filteredRecipes.map(recipe => {
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