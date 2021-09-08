# Movie Project
This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.

This project uses The Movie DB API: `https://api.themoviedb.org/3`. It is up to
you to use your Google and Postman skills to explore the API and understand the
data.

# Already built for you
- A home page that shows popular movies
- When you click one of the movies, you'll see the Single Movie page, which includes:
    - Movie poster
    - Movie title
    - Movie release date
    - Movie runtime
    - Movie description
    - An empty cast section

# What you and your partner will build

## Homepage

### Navbar
Add a universal navbar (it appears on every page) to the home page that includes
buttons that go to the following pages:

- Home button, takes you to the home page
- Movies button that has a dropdown list to show different movie genres. For
  example: Action, Sci-Fi, Comedy ...etc, When you click one of them it should
  load the movies for that genre.
- Actor list page
- About page that has a description of the website
- Search box where you can type the movie or actor name and display the
related results.
- A filter dropdown to filter the displayed movies in the home page, based
on (popular, relase date, top rated, now playing and up coming) 

### Footer
Add a universal footer that includes:

- Credit to you and your partner for building the website, 
- You and your partner's github link inside an icon and optionally, your social
  media links

### Styling

- Make it so that hovering over the movie makes the mouse pointer icon seem
  clickable. Right now, if you are about to click a movie, it's not obvious that
  it's clickable.

## Movies List Page

### Styling

- Using CSS and Bootstrap, display the page as a grid with 3 columns (3 movies
  in the same row)
- Make it responsive where it displays 2 columns for tablets and 1 column for
  phones
- Style the rest of the page however you like.
- Add the rating and genres to the movies in the home page and a description
  when you hover over one of them

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

## Actor List Page
Displays a list of actors styles in the same way as the movies list page, but
with the actor photo and the actor name. Clicking any actor should go to the
Single Actor Page. CSS should most certainly be reused here!

## Single Actor Page
This page can be reached by clicking on an actor in the actors list page or the
credits in the single movie page.

### Data Display
- The actor name
- The actor gender
- A picture of the actor
- The actor popularity
- The birthday of the actor and (if available) death day
- A biography about the actor
- A list of movies the actor participated in

## Bonus
If you finish early you can work on the same functionalities, but for TV shows.
Your code should be completely reusable (e.g., don't just copy paste a second
copy of the files).
