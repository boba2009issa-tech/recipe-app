
let container = document.getElementById("container");
let search = document.getElementById("search");
let image = document.getElementById("image");
let frist = document.getElementById("frist")
search.addEventListener("input",getMeals);
async function getMeals() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`);
    let cards = "";
    const data = await response.json() ;
    if(search.value !== "" && data.meals){
    for(let i = 0;i<data.meals.length;i++){
        cards += `
            <div class="border-4  border-orange-400  rounded-2xl m-5 w-full max-w-72">
            <img class="overflow-hidden rounded-t-2xl w-full object-cover" src =${data.meals[i].strMealThumb} >
            <div class="flex flex-col mt-2 mb-2 mr-2 ml-2 gap-3">
                <p class="inline-block text-orange-400 border-dotted p-2 rounded-2xl border-2 text-2xl capitalize self-center font-extrabold font-serif text-center">${data.meals[i].strMeal}</p>
                <a class="inline-block bg-orange-400 text-white rounded-2xl text-center w-1/2  p-3 font-bold" href="recipe.html?id=${data.meals[i].idMeal}"> View Details</a>
            </div>
        </div>
        `;
        
    }
    };
    console.log(data.meals)
    container.innerHTML = cards;
}

getMeals();