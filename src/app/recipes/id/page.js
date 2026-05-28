

export default async function recipesDetail({params}){
  const id = params.id
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await res.json()

  return(
    <div>
    {data.meals.map((meal)=>(
      <div key={meal.idMeal}>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"100%",height:"180px",objectFit:"cover"}}/>
     
       <h2 style={{padding:"12px"}}>{meal.strMeal}</h2> 
       <h3 style={{maxWidth:"900px"}}>{meal.strInstructions}</h3>
      </div>
    ))}
    </div>
  )
}