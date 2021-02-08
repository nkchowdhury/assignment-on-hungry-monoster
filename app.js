
const searchMeals = () =>{
  const searchText = document.getElementById("meal-field").value;
  // console.log(searchText);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

  const mealContainer = document.getElementById('meals-container');
  meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.innerText = meal.strMeal;
    mealDiv.className = 'meal-div'


    const mealInfo = `
    <div class="card">
    <img src="${meal.strMealThumb}" alt="">
    <div class="card-body">
    <h3 class='meal-tittle'>${meal.strMeal}</h3> 
    </div>  
  </div>
    `
    mealDiv.innerHTML = mealInfo;
    mealContainer.appendChild(mealDiv);

  })
  
}


// const displayMeals = meals => {

//   const mealContainer = document.getElementById('meals-container');
//   meals.forEach(meal => {
//     const mealDiv = document.createElement('div');
//     mealDiv.className = 'single-rusalt row align-items-center';
//     mealDiv.innerHtml = `
//     <div class="col-md-4">
//     <h3 class="meal-name">Beef</h3>
//     `;
//     mealContainer.appendChild(mealDiv);

//   })
  
// }




