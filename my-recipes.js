async function getMeals() {
    const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    const data = await response.json();

    document.getElementById("box").innerHTML = "";

    for (let i = 0; i < 100; i++) {
        document.getElementById("box").innerHTML += `
        <div class="border-4 border-orange-400 rounded-2xl m-5 w-full max-w-72">
            <img
                class="overflow-hidden rounded-t-2xl w-full object-cover"
                src="${data.meals[i].strMealThumb}"
                alt="${data.meals[i].strMeal}"
            >

            <div class="flex flex-col mt-2 mb-2 mr-2 ml-2 gap-3">
                <p class="inline-block text-orange-400 border-dotted p-2 rounded-2xl border-2 text-2xl capitalize self-center font-extrabold font-serif text-center">
                    ${data.meals[i].strMeal}
                </p>

                <a
                    class="inline-block bg-orange-400 text-white rounded-2xl text-center w-1/2 p-3 font-bold"
                    href="recipe.html?id=${data.meals[i].idMeal}"
                >
                    View Details
                </a>
            </div>
        </div>
        `;
    }
}
getMeals();