let params = new URLSearchParams(window.location.search);
let id = params.get("id");

async function getMeal() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json() ;
    document.getElementById("image").src = data.meals[0].strMealThumb;
    document.getElementById("name").textContent = data.meals[0].strMeal;

        for(let i = 1;i<21;i++){
        if(data.meals[0][`strIngredient${i}`] !== ""){
        document.getElementById("ingredients").innerHTML +=
        `
        <li>${data.meals[0][`strIngredient${i}`]}</li>
        `}
    }
    document.getElementById("method").textContent = data.meals[0].strInstructions;
    
    let videoId = data.meals[0].strYoutube.split("v=")[1];
    document.getElementById("video").src =
    `https://www.youtube.com/embed/${videoId}`;    
    
    console.log(data)

}
getMeal();



