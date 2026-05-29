

export default async function recipesDetail({params}){
  const resolvedParams = await params;
  const id = resolvedParams.id
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await res.json()
  if(!data.meals){
    return <p>
      Recipes not found 
    </p>
  }
  const meal =data.meals[0]
  return(
   
    <div style={{marginTop:'50px',textAlign:'center'}}>
      
    
      <div key={meal.idMeal} style={{textAlign:'center'}}>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"300px",display:'block',margin:'0 auto'}}/>
     
       <h2 style={{padding:"12px",fontWeight:"bold"}}>{meal.strMeal}</h2> 
       <h3 style={{maxWidth:'800px',margin:'20px auto',padding:'0 20px'}}>{meal.strInstructions}</h3>
      </div>
   
    </div>
  )
}