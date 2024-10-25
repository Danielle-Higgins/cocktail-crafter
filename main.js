const input = document.querySelector("#search-box");
const getCocktailBtn = document.querySelector("#cocktail-btn");

const cocktailImg = document.querySelector(".cocktail-img");
const cocktailName = document.querySelector(".cocktail-name");
const cocktailInstruction = document.querySelector(".cocktail-info");

getCocktailBtn.addEventListener("click", () => {
  const inputVal = input.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(`${error}`));
});
