export default async function Recipes(){
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  const data= await res.json()

 
  return(
    <div style={{maxWidth:"900px", margin:"0 auto", padding:'20px'}}>
      <h1>Recipes</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"16px"}}>
   {data.meals.map((meal)=>(
    <div key={meal.idMeal} style={{border:'1px solid #ddd',borderRadius:'8px',overflow:"hidden"}}>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:"100%",height:"180px",objectFit:"cover"}}/>
      <div style={{padding:"12px"}}>
        <h3 style={{padding:"12px"}}>{meal.strMeal}</h3>
      </div>
    </div>
   
   ))}
    </div>
     </div>
  )
}