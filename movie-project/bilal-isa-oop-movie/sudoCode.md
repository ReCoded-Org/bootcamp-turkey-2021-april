## Single Movie Page
We build part of the single movie page for you, but the information isn't
totally complete, a few more features are needed:

- The main 5 actors of the movies in the credit section
- The movie language
- A related movies section which includes at least five related movies
- A trailer section that has the movie trailer from youtube
- The movie production company name and logo
- The director name 
- The movie rating and how many votes has it received

### Functionality
- Clicking an actor in the main actors should go to the single actor page.

### Other requirements
- There's an issue with duplication in the movie page that has to be fixed (and
  you need to open the site and read the code to fix it)
- Style the page however you like

## Solution for Single Movie Page:

<!-- [DONE] Step 1 [DONE] -->
- Adding the main 5 actors in the credit section:
- Adding actor single page.

const containerDiv = document.getElementbyId('container');
for (let i = 0; i < 5; i++){
  const innerDiv = document.createElement('div');
  innerDiv.innerHTML = `
    <img src='from the API' alt='actor name'>
    <a href='actor page from the API'> actor name from the API </a>
  `;
  innerDiv.setAttribute('class', 'columnActor');
  containerDiv.append(innerDiv);
}

<!-- [DONE] Step 2 [DONE] --> 
- Adding the movie language 

it's already added in movieSection class (need update on API).

<!-- [DONE] Step 3 [DONE] -->
- Related movie section (5 minimum) (by genere, category or ratings)

1- we will take the list of movies
2- search for comparsion with our selected movie genres
3- for the one's that match select 5 of them and put them

<!-- [DONE] Step 4 [DONE] -->
- Adding trailer section

do a fetch for the movies trailer from the API
Append it to the end of the page.

<!-- [DONE] Step 5 [DONE] -->
- Adding Movie producer and logo

do a fetch for the movie producer and logo from the API
append them to the website.

<!-- [DONE] Step 6 [DONE] --> 
- Adding director name.

do a fetch for the movie driector from the API
append them to the website.

<!-- [DONE] Step 7 [DONE] -->
- Adding Movie ratings and amount of votes. 

do a fetch for the movie ratings and votes from the API
append them to the website.

<!-- [DONE] Step 8 [DONE] -->
- Fix the bug   <!-- We couldn't find the bug :) -->

<!-- [DONE] Step 9 [DONE] -->
- Add styling