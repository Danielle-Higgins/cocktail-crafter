# Cocktail Crafter: <a target="_blank" href="https://danielle-higgins.github.io/cocktail-crafter/">Visit Here</a>

<img src="https://github.com/Danielle-Higgins/cocktail-crafter/blob/main/cocktail-preview.png">

Search for a cocktail of your choosing. You'll recieve a picture of the cocktail, the name, and the instructions of how to make it.

## Tech Used

<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

Built using The Cocktail DB API, this project calls on the API when the search button is clicked on. What the API gives you is an object with one property called "drinks". The drinks property's value is an array of objects which are the cocktails that the user has searched for. The user may get more than one result. I then used a loop to loop through each object (cocktail) in the array. In the HTML, I have an unordered list which will "store" all the cocktails. When looping through each object, I dynamically created list items which are appended to the unordered list. Then I create and image, and two paragraphs where the text content is the name of the cocktail and the instructions respectively. I append these to the list item. So, when the user searches for a cocktail, lets say, a margarita, you will get a list of cocktails that match what you searched for. The list will contain, the image of the cocktail, the name, and the instructions on how to make it.

Here is a link to the API I used: <a target="_blank" href="https://www.thecocktaildb.com/api.php">TheCocktailDB</a>

## Optimizations

If/when I improve this project, I would like to make a rotating list of drinks (an automatic carousel) from the cocktailDB.

## Lessons Learned:

I got more practice using APIs and learning more on how to use them. I also got more practice with dynamically creating elements in the DOM. Separation of concerns.
