box = document.getElementById("box");
function showData() {
    const data = JSON.parse(localStorage.getItem("meals")) || [];
    
    for (let i = 0; i < data.length; i++) {
        box.innerHTML += `
                    <div class="border-4  border-orange-400  rounded-2xl m-5 w-full max-w-72">
            <img class="overflow-hidden rounded-t-2xl w-full object-cover" src =${data[i].strMealThumb} >
            <div class="flex flex-col mt-2 mb-2 mr-2 ml-2 gap-3">
                <p class="inline-block text-orange-400 border-dotted p-2 rounded-2xl border-2 text-2xl capitalize self-center font-extrabold font-serif text-center">${data[i].strMeal}</p>
                <a class="inline-block bg-orange-400 text-white rounded-2xl text-center w-1/2  p-3 font-bold" href="recipe.html?id=${data[i].idMeal}"> View Details</a>
            </div>
        </div>
        `
    }



}

showData();