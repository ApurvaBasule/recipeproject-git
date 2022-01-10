


getrandomMeal();
async function getrandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respdata = await resp.json();
    const randomMeal = respdata.meals[0];
    console.log(randomMeal);
    addMeal(randomMeal, true)

}

async function getmealbyid(id) {
    const mealbyid = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
}

async function getmealbysearch(term) {
    const mealbysearch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term)
}


function addMeal(randomMealname, random = false) {
    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = ` 
<div class="meal-header">
          ${random ? `<span class ="random">
          Random Recipe
       </span>  ` : ''}      

   <img 
   src=" ${randomMealname.strMealThumb} "
    alt= " ${randomMealname.strMeal} " 
     /> 
   </div>
   <div class = " meal-body">
   <h4> ${randomMealname.strMeal} </h4>
   <button class = "fav-btn">
   <i class ="fas fa-heart"></i>
   </button>
   </div>`;

    const meals = document.getElementById('meals');
    meals.appendChild(meal);
    

  
const btn = meal.querySelector(".meal-body .fav-btn .fa-heart");
  console.log(btn);
  btn.addEventListener("click" ,() => {
 btn.classList.toggle("active");
     });
}