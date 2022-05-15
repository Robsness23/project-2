import React from "react"
import { Link, useParams } from "react-router-dom"


function ShowCocktail() {

  const { cocktailId } = useParams()
  const [cocktail, setCocktail] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchCocktail() {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      const data = await resp.json()
      setCocktail(data)
      // console.log(cocktailName)
    } 
    fetchCocktail()
  }, [cocktail, cocktailId])
  
  if (!cocktail) {
    return <p>Cocktail Loading...</p>
  }
  // console.log(cocktail, { cocktailName })



  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{cocktail.drinks[0].strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cocktail.drinks[0].strDrinkThumb} alt={cocktail.drinks[0].strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    🍹
                  </span>{" "}
                  Ingredients
                </h4>
                <p>{cocktail.drinks[0].strIngredient1}  {cocktail.drinks[0].strMeasure1}</p>
                <p>{cocktail.drinks[0].strIngredient2}  {cocktail.drinks[0].strMeasure2}</p>
                <p>{cocktail.drinks[0].strIngredient3}  {cocktail.drinks[0].strMeasure3}</p>
                <p>{cocktail.drinks[0].strIngredient4}  {cocktail.drinks[0].strMeasure4}</p>
                <p>{cocktail.drinks[0].strIngredient5}  {cocktail.drinks[0].strMeasure5}</p>
                <p>{cocktail.drinks[0].strIngredient6}  {cocktail.drinks[0].strMeasure6}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    🗒
                  </span>{" "}
                  Instructions
                </h4>
                <hr />
                <p>{cocktail.drinks[0].strInstructions}</p>
                <hr />
                {/* <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                    🖐
                  </span>{" "}
                  Added By
                </h4>
                <hr />
                <p>{cocktail.addedBy.username}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
        <Link to="/cocktails">{"⬅ Back to all cocktails"}</Link>
      </div>
    </section>
  )
  //   <section className="section">
  //   <div className="container">
      
  //   {/* return */}
  // {/* name: {cocktail.drinks[0].strDrink}
  // Image: {cocktail.drinks[0]strImageSource}
  // ingredients: {strIngredient1}{strMeasure1}
  // Recipe: {strInstructions}
  //     <Link to="/cocktails">{"⬅ Back to all cocktails"}</Link> */}
  //   </div>
  // </section>
}


export default ShowCocktail
