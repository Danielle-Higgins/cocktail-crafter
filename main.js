const input = document.querySelector("#search-box");
const getCocktailBtn = document.querySelector("#cocktail-btn");
const cardList = document.querySelector(".card-list");

getCocktailBtn.addEventListener("click", () => {
  const inputVal = input.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`;

  // check if the ul already has list items inside
  if (cardList.innerHTML) {
    cardList.innerHTML = "";
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      console.log(data.drinks);

      data.drinks.forEach((drink) => {
        // create list item
        const listItem = document.createElement("li");
        listItem.classList.add("card-item");

        // append to the ul
        cardList.appendChild(listItem);

        const image = document.createElement("img");
        image.classList.add("cocktail-img");
        image.src = drink.strDrinkThumb;
        image.alt = `${drink.strDrink} image`;
        listItem.appendChild(image);

        const cocktailName = document.createElement("p");
        cocktailName.classList.add("cocktail-name");
        cocktailName.textContent = drink.strDrink;
        listItem.appendChild(cocktailName);

        const cocktailInfo = document.createElement("p");
        cocktailInfo.classList.add("cocktail-info");
        cocktailInfo.textContent = drink.strInstructions;
        listItem.appendChild(cocktailInfo);
      });
    })
    .catch((error) => console.log(`${error}`));

  input.value = "";
});
