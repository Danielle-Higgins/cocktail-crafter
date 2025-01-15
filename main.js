const BASEURL = "https://www.thecocktaildb.com/api/json/v1/1";

class CocktailCrafter {
  constructor(input, btn, cardList) {
    this.input = document.getElementById(input);
    this.searchBtn = document.getElementById(btn);
    this.cardList = document.querySelector(`.${cardList}`);

    this.attachEventListners();
  }

  attachEventListners() {
    this.searchBtn.addEventListener("click", () => this.handleSearch());
  }

  handleSearch() {
    const inputVal = this.input.value;

    if (!inputVal) return;
    else this.searchCocktail(inputVal);

    if (this.cardList.innerHTML) this.cardList.innerHTML = "";

    this.input.value = "";
  }

  async searchCocktail(cocktail) {
    const url = `${BASEURL}/search.php?s=${cocktail}`;

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok!");

      const data = await response.json();
      console.log(data);
      console.log(data.drinks);

      this.displayDrinks(data.drinks);
    } catch (error) {
      console.log("Error", error);
    }
  }

  displayDrinks(array) {
    array.forEach((drink) => {
      // create list item
      const li = document.createElement("li");
      li.classList.add("card-item");

      // append to the ul
      this.cardList.appendChild(li);

      const img = document.createElement("img");
      img.classList.add("cocktail-img");
      img.src = drink.strDrinkThumb;
      img.alt = `${drink.strDrink} image`;
      li.appendChild(img);

      const cocktailName = document.createElement("p");
      cocktailName.classList.add("cocktail-name");
      cocktailName.textContent = drink.strDrink;
      li.appendChild(cocktailName);

      const cocktailInfo = document.createElement("p");
      cocktailInfo.classList.add("cocktail-info");
      cocktailInfo.textContent = drink.strInstructions;
      li.appendChild(cocktailInfo);
    });
  }
}

const cocktail = new CocktailCrafter("search-box", "cocktail-btn", "card-list");
