//the API documentation site https://developers.themoviedb.org/3/
// This is the key to use in API postman
// console.log(atob('NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI='));

class App {
  static async run(filter) {
    const movies = await APIService.fetchMovies(filter)
    HomePage.renderMovies(movies);
  }
}

class APIService {
  static TMDB_BASE_URL = 'https://api.themoviedb.org/3';

  // Fetching list of movies then sending the data to Movie Class.
  static async fetchMovies(filter) {
    const url = APIService._constructUrl(`movie/${filter}`)
    const response = await fetch(url)
    const data = await response.json()
    return data.results.map(movie => new Movie(movie))
  }

  // Fetching list of movies genres with their ids;
  static async fetchMoviesGenres() {
    const url = APIService._constructUrl(`genre/movie/list`)
    const response = await fetch(url)
    const data = await response.json()
    return data.genres;
  }

  //   Fetching the list of popular actors to display: (need to make a class called Actor)
  static async fetchListOfActors() {
    const url = APIService._constructUrl(`person/popular`);
    const response = await fetch(url)
    const data = await response.json();
    return HomePage.renderActors(data.results); 
  }

  // Fetching the movie data for a specific movie then sending data to the Movie Class.
  static async fetchMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}`)
    const response = await fetch(url)
    const data = await response.json()
    return new Movie(data)
  }

  // Fetching the movie credits for a specific movie then sending data to the Movie Class.
  static async fetchActors(movieData) {
    const url = APIService._constructUrl(`movie/${movieData}/credits`)
    const response = await fetch(url)
    const data = await response.json()
    return new Movie(data)
  }

  // Fetching the movie trailer for a specific movie then sending data to the Movie Class.
  static async fetchTrailer(trailer) {
    const url = APIService._constructUrl(`movie/${trailer}/videos`)
    const response = await fetch(url)
    const data = await response.json()
    return new Movie(data)
  }

  // Fetching actor information for a specific actor then sending data to the HomePage Class.
  static async fetchActorInfo(actor) {
    const url1 = APIService._constructUrl(`/person/${actor}`)
    const response1 = await fetch(url1)
    const data1 = await response1.json()

    const url2 = APIService._constructUrl(`/person/${actor}/movie_credits`)
    const response2 = await fetch(url2)
    const data2 = await response2.json()

    return ActorPage.renderActor(data1, data2);
  }

  // Fetching related movies from a specific movie then sending the data to the Movie Class.
  static async fetchRecommendations(recommendations) {
    const url = APIService._constructUrl(`/movie/${recommendations}/similar`)
    const response = await fetch(url)
    const data = await response.json()
    return new Movie(data)
  }

  // Fetching data depending on the search box
  static async fetchSearchedItem(searchText) {
    const url = APIService._constructUrl(`search/multi`) + `&language=en-US&query=${searchText}&page=1&include_adult=false`;
    const response = await fetch(url)
    const data = await response.json();
    return OtherPages.renderSearchBox(data.results);
  }

  static _constructUrl(path) {
    return `${this.TMDB_BASE_URL}/${path}?api_key=${atob('NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI=')}`;
  }
}

// Homepage class to render either Movies, or Actors, depending on the given choice
class HomePage {
  static container = document.getElementById('container');
  
  static renderMovies(movies) {
    // console.log(movies);
    const div = document.createElement("div");
    div.classList.add('row', 'justify-content-center');
    movies.forEach(movie => {

      let windowWidth = '';
      if(window.innerWidth > 991) windowWidth = 'col-3';
      else if(window.innerWidth > 450) windowWidth = 'col-6';
      else windowWidth = 'col-12';

      const movieDiv = document.createElement("div");
      movieDiv.classList.add(windowWidth, 'movieDiv');
      
      const imageDiv = document.createElement("div");
      const movieImage = document.createElement("img");
      movieImage.src = `${movie.backdropUrl}`;
      movieImage.classList.add('moviePageImage', 'AllImages');
      imageDiv.append(movieImage);
      imageDiv.style.cursor = "pointer";

      const titleDiv = document.createElement("div");
      const movieTitle = document.createElement("h5");
      movieTitle.textContent = `${movie.title}`;
      titleDiv.append(movieTitle);

      const addingHiddenOverState = async function() {
        const specificMovieData = await APIService.fetchMovie(movie.id);
        let genresList = "";
        specificMovieData.genres.forEach(data => genresList += `${data.name} `);

        const hiddenDiv = document.createElement("div");
        hiddenDiv.classList.add('hoverOverState');
        const hiddenContent = document.createElement("p");
        hiddenDiv.innerHTML = `
          <p>Language: ${movie.language}</p>
          <p>Release Date: ${movie.releaseDate}</p>
          <p>Rating: ${movie.rating}</p>
          <p>Genres:</p><p>${genresList}</p>
        `;
        hiddenDiv.append(hiddenContent);
        imageDiv.appendChild(hiddenDiv);
      }();

      imageDiv.addEventListener("click", function () {
        Movies.run(movie);
      });

      movieDiv.appendChild(imageDiv);
      movieDiv.appendChild(titleDiv);
      div.append(movieDiv);
      this.container.appendChild(div);
    })
  }

//   Method to render the list of actors page.
  static renderActors(actors){
    // console.log(actors);
    // for(let i = 0; i < actors.le)
    const div = document.createElement('div');
    div.classList.add('row', 'justify-content-center');

    actors.forEach(actor => {
      let imgSrc = '', windowWidth = '';
      if(actor.profile_path === null) imgSrc = './img/defaultPortrait.jpg';
      else imgSrc = Movie.getImage(actor.profile_path);

      if(window.innerWidth > 991) windowWidth = 'col-3';
      else if(window.innerWidth > 450) windowWidth = 'col-6';
      else windowWidth = 'col-12';

      div.innerHTML += `
        <div class=${windowWidth} style="cursor:pointer">
          <div>
            <img class="actorPageImage AllImages actorDiv" src=${imgSrc}>
          </div>
          <div>
            <h5 class="actorDivName">${actor.name}</h5>
          </div>
        </div>
      `;
    });
    this.container.append(div);

    const actorEventListener = function(){
      const actorList = document.getElementsByClassName('actorDiv');
      for(let i = 0; i < actorList.length; i++){
        actorList[i].addEventListener('click', function(){
          APIService.fetchActorInfo(actors[i].id);
        });
      }
    }();
  }
}

// Movies class to call all the fetches and pass them to MoviePage
class Movies {
  static async run(movie) {
    const movieData = await APIService.fetchMovie(movie.id)
    const actorsData = await APIService.fetchActors(movie.id);
    const movieTrailer = await APIService.fetchTrailer(movie.id);
    const recommendations = await APIService.fetchRecommendations(movie.id);
    MoviePage.renderMovieSection(movieData, actorsData, movieTrailer, recommendations);
  }
}

// MoviePage gets the container a single movie information and call MovieSection to add movie information
class MoviePage {
  static container = document.getElementById('container');
  static renderMovieSection(movie, actors, trailer, recommendations) {
    MovieSection.renderMovie(movie, actors, trailer, recommendations);
  }
}

// Single Movie Page:
class MovieSection {
  static renderMovie(movie, actors, trailer, rec) {

    // Generating the string of genres of the movie
    let genres = "(";
    for (let i = 0; i < movie.genres.length; i++) {
      if (i !== movie.genres.length - 1) genres += movie.genres[i].name + ", ";
      else genres += movie.genres[i].name + ")";
    }

    // Generating the trailer key and name to add.
    let trailerKey = "", trailerName = "";
    for (let i = 0; i < trailer.trailer.length; i++) {
      if (trailer.trailer[i].type === 'Trailer') {
        trailerKey = trailer.trailer[i].key;
        trailerName = trailer.trailer[i].name;
      }
    }

    let imgSrc = '';
    if(movie.posterPath === null) imgSrc = './img/defaultPortrait.jpg';
    else imgSrc = Movie.getImage(movie.posterPath);

    MoviePage.container.innerHTML = `
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4">
            <img id="movie-backdrop" class="AllImages" src=${imgSrc}> 
          </div>
          
          <div class="col-md-8 justify-content-start">
            <h2 id="movie-title">${movie.title}</h2>
            <p id="genres"> Genres: ${genres}, Language: ${movie.language}</p>
            <p id="movie-release-date">Release Date: ${movie.releaseDate}</p>
            <p id="movie-runtime"> Duration: ${movie.runtime}</p>
            <p id="movieDirector"> Director: </p>
            <p id="movie-rating-votes"> Rating: ${movie.rating}, Votes: ${movie.vote}</p>
            <h3 class="justify-content-center"> Overview: </h3>
            <p id="movie-overview">${movie.overview}</p>
          </div>
        </div>
        
        <br>
        <div class='embed-responsive embed-responsive-16by9'>
          <iframe class="embed-responsive-item" src=${Movie.getMovieTrailer(trailerKey)} title=${trailerName} allowfullscreen></iframe>
        </div>
        
        <br>
        <div class="column">
          <h3> Related Movies: </h3>
          <div id="relatedMovies" class="row justify-content-center"> </div>
        </div>

        <br>
        <div class="column">
          <h3> Production Companies: </h3>
          <div id="producers" class="row justify-content-center"> </div>
        </div>
      </div>

      <div class="col-md-4">
        <h3> Cast: </h3>
        <div id="actorsContainer" class="row justify-content-center"> </div>
      </div>
    </div>
    `;

    const renderActors = function () {
      const container = document.getElementById('actorsContainer');
      for (let i = 0; i < 8; i++) {
        let imgSrc = '';
        if(actors.cast[i].profile_path === null) imgSrc = './img/defaultPortrait.jpg';
        else imgSrc = Movie.getImage(actors.cast[i].profile_path);

        container.innerHTML += `
          <div class="col-6" style="cursor:pointer">
            <div>
              <img src=${imgSrc} class="actorPicture AllImages actorList">
            </div>
            <div>
              <p>${actors.cast[i].name}</p>
            </div>
          </div>
        `;
      }

      const actorEventListener = function () {
        const list = document.getElementsByClassName('actorList');
        for (let i = 0; i < list.length; i++) {
          list[i].addEventListener('click', function () {
            APIService.fetchActorInfo(actors.cast[i].id);
          });
        }
      }();
    }();

    const renderDirector = function () {
      const container = document.getElementById('movieDirector');
      for (let i = 0; i < actors.crew.length; i++) {
        if (actors.crew[i].job === 'Director') container.textContent += `${actors.crew[i].name}`;
      }
    }();

    const renderProducers = function () {
      const container = document.getElementById('producers');
      for (let i = 0; i < movie.producers.length; i++) {
        container.innerHTML += `
          <div class="col-4">
            <div>
              <img src=${Movie.getImage(movie.producers[i].logo_path)} class="producerImg">
            </div>
            <div>
              <p> ${movie.producers[i].name} </p>
            </div>
          </div>
        `;
      }
    }();

    const renderRelatedMovies = function () {
      const container = document.getElementById('relatedMovies');

      // Generating an array of random numbers to generate related movies.
      const length = rec.recommendations.length, randomArr = [], chosenElement = [];
      for (let i = 0; i < length; i++) randomArr.push(i);

      container.innerHTML += `<br>`;

      if (length < 6) {
        for (let i = 0; i < length; i++) {
          let imgSrc = '';
          if(rec.recommendations[i].backdrop_path === null) imgSrc = './img/defaultHorizontal.jpg';
          else imgSrc = Movie.getImage(rec.recommendations[i].backdrop_path);

          container.innerHTML += `
            <div class="col-6">
              <div>
                <img src=${imgSrc} class="relatedImg AllImages relatedMovieListener" style="cursor:pointer">
              </div>
              <div class="col-6" style="cursor:pointer">
              <div>
                <span class="relatedMovie">${rec.recommendations[i].title}</span>
              </div>
            </div>
          `;
        }
      }
      else {
        for (let i = 0; i < 6; i++) {
          let getRandom = randomArr[Math.floor(Math.random() * randomArr.length)];
          while (chosenElement.includes(getRandom)) {
            getRandom = randomArr[Math.floor(Math.random() * randomArr.length)];
          }

          let imgSrc = '';
          if(rec.recommendations[getRandom].backdrop_path === null) imgSrc = './img/defaultHorizontal.jpg';
          else imgSrc = Movie.getImage(rec.recommendations[getRandom].backdrop_path);

          container.innerHTML += `
            <div class="col-6">
              <div>
                <img src=${imgSrc} class="relatedImg AllImages relatedMovieListener" style="cursor:pointer">
              </div>
              <div>
                <span class="relatedMovie">${rec.recommendations[getRandom].title}</span>
              </div>
            </div>
          `;
          chosenElement.push(getRandom);
        }
      }

      // Add an event listener to go the page of the selected recommended page.
      const relatedMoviesEventListener = function () {
        const list = document.getElementsByClassName('relatedMovieListener');
        if(list > 5) for (let i = 0; i < 6; i++) {
          list[i].addEventListener('click', function () {
            const movieTitle = document.getElementsByClassName('relatedMovie')[i].innerHTML;
            for (let j = 0; j < rec.recommendations.length; j++) {
              if (rec.recommendations[j].title == movieTitle) Movies.run(rec.recommendations[j]);
              else continue;
            }
          });
        }
        else for (let i = 0; i < list.length; i++) {
          list[i].addEventListener('click', function () {
            const movieTitle = document.getElementsByClassName('relatedMovie')[i].innerHTML;
            for (let j = 0; j < rec.recommendations.length; j++) {
              if (rec.recommendations[j].title == movieTitle) Movies.run(rec.recommendations[j]);
              else continue;
            }
          });
        }
      }();
    }();
  }
}

// Comment written by Bilal Avvad:
/*
  This class is the class i'm most proud of,
  1- while reading the API data i noticed too many errors that i tried to fix using some self-calling functions
  2- I added a function that i haven't seen anyone else added, which is calculating the age of the actors
  3- I added 12 movies for each actor, but some actors had below 12 movies, so i made an if condition so that no matter what i don't get any error.
  4- Due to number 3, i had to make an event listener with an if condition as well to make sure everything is working with no errors to be found.
  5- I added an if conditions to check if the image is available or not, and made a default image that you can see in the (img) folder.
*/
// Single Actor Page:
class ActorPage {

  static container = document.getElementById('container');

  // A method to create the single actor page that takes the actor and his movies as a parameter.
  static async renderActor(actor, movies) {

    // Declaring variables that will store age, gender, and birth-death values.
    let actorDates = "", actorAge = 0, gender = "";

    // Checking if the actor is alive or not to display his birthdate - deathdate.
    if (actor.deathday === null) actorDates = actor.birthday;
    else actorDates = `${actor.birthday} - ${actor.deathday}`;

    // Assigning the gender to the actor.
    if (actor.gender === 1) gender = 'Female';
    else gender = 'Male';

    // A self calling function that will calculate the age of the actor:
    if (actor.birthday === null) {
      actorDates = "Unknown";
      actorAge = "Unknown";
    }
    else {
      const calculateAge = function () {
        const age = actor.birthday.split('-');                              // Get the age of the actor
        const currentDate = new Date().getDate();                           // Get the current date value
        const currentMonth = new Date().getMonth() + 1;                     // Get the current month value
        const currentYear = new Date().getFullYear();                       // Get the current year value
        if (currentMonth < age[1]) actorAge = currentYear - age[0] + 1;
        else if (currentMonth > age[1]) actorAge = currentYear - age[0];
        else {
          if (currentDate < age[2]) actorAge = currentYear - age[0] + 1;
          else actorAge = currentYear - age[0];
        }
      }();
    }

    // Adding actor information to the page.
    let imgSrc = '';
    if(actor.profile_path === null) imgSrc = './img/defaultPortrait.jpg';
    else imgSrc = Movie.getImage(actor.profile_path);

    MoviePage.container.innerHTML = `
      <div class="column">
        <div class="row">
          <div class="col-md-4">
            <img id="movie-backdrop" class="AllImages" src=${imgSrc} alt=${actor.name}> 
          </div>

          <div class="col-md-8">
            <div>
              <h2 id="actorName"> ${actor.name} </h2>
              <p id="actorAge"> Age: ${actorAge}</p>
              <p id="actorBirthday"> Date of Birth: ${actorDates}</p>
              <p id="actorPlaceOfBirth"> Place of Birth: ${actor.place_of_birth}</p>
              <p id="actorGender"> Gender: ${gender}</p>
              <p id="actorKnownFor"> Known for: ${actor.known_for_department}</p>
              <p id="popularity"> Popularity: ${actor.popularity}</p>

              <h4>Biography:</h4>
              <p id="actorBiography">${actor.biography}</p>
            </div>
          </div>
        </div>

        <br>
        <div class="row" id="moviesList"> </div>
      </div>
    `;

    // Adding the movie list to the page.
    const addMovies = function () {
      const container = document.getElementById('moviesList');
      
      if (movies.cast.length > 11) for (let i = 0; i < 12; i++) {
        let imgSrc = '';
        if(movies.cast[i + 1].backdrop_path === null) imgSrc = './img/defaultHorizontal.jpg';
        else imgSrc = Movie.getImage(movies.cast[i + 1].backdrop_path);

        container.innerHTML += `
          <div class="col-3">
            <div>
              <img class="movieImg AllImages actorMoviesListener" style="cursor:pointer" src=${imgSrc} alt=${movies.title}>
            </div>
            <div>
              <p class='actorMovie'>${movies.cast[i + 1].title}</p>
            </div>
          </div>
        `;
      }
      else for (let i = 0; i < movies.cast.length; i++) {
        let imgSrc = '';
        if(movies.cast[i].backdrop_path === null) imgSrc = './img/defaultHorizontal.jpg';
        else imgSrc = Movie.getImage(movies.cast[i].backdrop_path);
        container.innerHTML += `
          <div class="col-3">
            <div>
              <img class="movieImg AllImages actorMoviesListener" style="cursor:pointer" src=${imgSrc} alt=${movies.title}>
            </div>
            <div>
              <p class='actorMovie'>${movies.cast[i].title}</p>
            </div>
          </div>
        `;
      }
    }();

    // Event Listener for the movies
    const actorMoviesEventListener = function () {
      const list = document.getElementsByClassName('actorMoviesListener');
      if(movies.cast.length > 11) for (let i = 0; i < 12; i++) {
        list[i].addEventListener('click', function () {
          const movieTitle = document.getElementsByClassName('actorMovie')[i].innerHTML;
          for (let j = 0; j < movies.cast.length; j++) {
            if (movies.cast[j].title == movieTitle) Movies.run(movies.cast[j]);
            else continue;
          }
        });
      }
      else for (let i = 0; i < movies.cast.length; i++) {
        list[i].addEventListener('click', function () {
          const movieTitle = document.getElementsByClassName('actorMovie')[i].innerHTML;
          for (let j = 0; j < movies.cast.length; j++) {
            if (movies.cast[j].title == movieTitle) Movies.run(movies.cast[j]);
            else continue;
          }
        });
      }
    }();
  }
}

class Movie {
  static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
  static TRAILER_BASE_URL = 'https://www.youtube.com/embed/'
  constructor(json) {
    // console.log(json);
    this.id = json.id;
    this.title = json.title;
    this.releaseDate = json.release_date;
    this.runtime = json.runtime + " minutes";
    this.overview = json.overview;
    this.backdropPath = json.backdrop_path;
    this.posterPath = json.poster_path;
    this.language = json.original_language;
    this.vote = json.vote_count;
    this.rating = json.vote_average;
    this.genres = json.genres;
    this.producers = json.production_companies;
    this.cast = json.cast;
    this.crew = json.crew;
    this.trailer = json.results;
    this.recommendations = json.results;
    this.genres_ids = json.genre_ids;
  }

  get backdropUrl() {
    return this.posterPath ? Movie.BACKDROP_BASE_URL + this.posterPath : "";
  }

  static getImage(url) {
    return Movie.BACKDROP_BASE_URL + url;
  }

  static getMovieTrailer(url) {
    return Movie.TRAILER_BASE_URL + url;
  }
}

// Print the results of the search to the screen:
class OtherPages {
  static container = document.getElementById('container');

  static renderSearchBox(data){
    // console.log(data);
    const div = document.createElement('div');
    div.classList.add('row', 'justify-content-center');
    const moviesActorsArr = [];

    for(let i = 0; i < data.length; i++){
      if(data[i].media_type === 'movie' || data[i].media_type === 'person') moviesActorsArr.push(data[i]);
    }

    for(let i = 0; i < moviesActorsArr.length; i++){
      if(moviesActorsArr[i].media_type === 'movie'){
        div.innerHTML += `
          <div class="col-3 searchDiv">
            <div>
              <img class="searchImage AllImages" style="cursor:pointer" src=${Movie.getImage(moviesActorsArr[i].poster_path)}>
            </div>
            <div>
              <h5>${moviesActorsArr[i].title}</h5>
            </div>
          </div>
        `;
      }
      else {
        div.innerHTML += `
          <div class="col-3 searchDiv">
            <div>
              <img class="searchImage AllImages" style="cursor:pointer" src=${Movie.getImage(moviesActorsArr[i].profile_path)}>
            </div>
            <div>
              <h5>${moviesActorsArr[i].name}</h5>
            </div>
          </div>
        `;
      }
    }
    this.container.append(div);

    // Adding an event listener to go to specific actor / movie
    const searchDiv = document.getElementsByClassName('searchDiv');
    for(let i = 0; i < searchDiv.length; i++){
      searchDiv[i].addEventListener('click', function(){
        document.getElementById('container').innerHTML = "";
        console.log(moviesActorsArr[i]);
        if(moviesActorsArr[i].media_type === 'movie') Movies.run(moviesActorsArr[i]);
        else APIService.fetchActorInfo(moviesActorsArr[i].id);
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", App.run('now_playing'));

// List of event listeners starts here
const homeButton = document.getElementById('homeButton');
const moviesButton = document.getElementById('moviesHomePage');
const actorsButton = document.getElementById('actorsHomePage');
const aboutButton  = document.getElementById('aboutHomePage');
const aboutDiv = document.getElementById('about');
const contactButton = document.getElementById('contactUsPage');
const contactUsDiv = document.getElementById('contactUs');
const searchButton = document.getElementById('search');
const filterButton = document.getElementsByClassName('dropdown-item');

homeButton.style.cursor = 'pointer';
homeButton.addEventListener('click', function(){
  moviesButton.classList.remove('active');
  actorsButton.classList.remove('active');
  aboutButton.classList.remove('active');
  document.getElementById('container').innerHTML = "";
  aboutDiv.setAttribute('class', 'hidden');
  contactUsDiv.setAttribute('class', 'hidden');
  App.run('now_playing');
});

moviesButton.style.cursor = 'pointer';
moviesButton.addEventListener('click', function(){
  document.getElementById('container').innerHTML = "";
  aboutDiv.setAttribute('class', 'hidden');
  contactUsDiv.setAttribute('class', 'hidden');
  App.run('now_playing');
});

actorsButton.style.cursor = 'pointer';
actorsButton.addEventListener('click', function(){
  document.getElementById('container').innerHTML = "";
  aboutDiv.setAttribute('class', 'hidden');
  contactUsDiv.setAttribute('class', 'hidden');
  APIService.fetchListOfActors();
});

aboutButton.style.cursor = 'pointer';
aboutButton.addEventListener('click', function(){
  document.getElementById('container').innerHTML = "";
  contactUsDiv.setAttribute('class', 'hidden');
  aboutDiv.setAttribute('class', 'shown');
});

contactButton.style.cursor = 'pointer';
contactButton.addEventListener('click', function(){
  document.getElementById('container').innerHTML = "";
  aboutDiv.setAttribute('class', 'hidden');
  contactUsDiv.setAttribute('class', 'shown');
});

searchButton.style.cursor = 'pointer';
searchButton.addEventListener('click', function(e){
  const searchBox = document.getElementById('searchBox').value;
  document.getElementById('container').innerHTML = "";
  e.preventDefault();
  aboutDiv.setAttribute('class', 'hidden');
  contactUsDiv.setAttribute('class', 'hidden');
  APIService.fetchSearchedItem(searchBox);
});

// Comment written by Bilal Avvad:
/*
  This function is the function i'm also most proud of,
  1- I added all movie genres to the html file in the same order as the the API data of it.
  2- By doing so, i can easily compare the fetched data with the chosen element.
  3- Since they are in the same order, the index at which a genre has been chosen, it will select the same index in the data from the API to get the id.
  4- Comparing the id with the list of movies we have to make sure we made call the correct movie.
  5- Filtering according to genre have 19 selectable items, while according to type have 4 selectable items. by making them in order, i was able to manipulate the numbers to continue.
  6- if the numbers of the index (in the html) is more than 19, it will check the else condition and apply it.
*/
// Filtering movies
for(let i = 0; i < filterButton.length; i++){
  filterButton[i].addEventListener('click', function(){
    document.getElementById('container').innerHTML = "";
    aboutDiv.setAttribute('class', 'hidden');
    contactUsDiv.setAttribute('class', 'hidden');
    
    if(i < 19) {
      const genreMovies = async function (){ 
        const genresList = await APIService.fetchMoviesGenres();
        const specificGenre = genresList[i].id;
        const allMovieList = await APIService.fetchMovies('now_playing');

        const result = await allMovieList.filter(movie => movie.genres_ids.includes(specificGenre));
        HomePage.renderMovies(result);
      }();
    }
    else {
      const generateMovies = async function(){
        switch(filterButton[i].textContent){
          case 'Currently Playing': HomePage.renderMovies(await APIService.fetchMovies('now_playing')); break;
          case 'Most Popular': HomePage.renderMovies(await APIService.fetchMovies('popular')); break;
          case 'Top Rated': HomePage.renderMovies(await APIService.fetchMovies('top_rated')); break;
          case 'Upcoming': HomePage.renderMovies(await APIService.fetchMovies('upcoming')); break;
        }
      }();
    }
  });
}

// Comment written by Bilal Avvad:
/*
  This is the most hard part in the whole project for me,
  1- Making everything shorter in terms of code (i tried as much as possible)
  2- Initially, following up where things are being called and catching what is happening, eventually it was easy given how many times i had to do it.
  3- Trying to use simple yet, small code to do the functionalities because i think (if i didn't work almost solo) 750 Lines of code is bad and it can be improved and refactored (As Halit and Ammar always tell me to do so)
  4- Keeping up with time, university, and normal family work was a bit challenging but i rushed through it and finished it in less than 2 weeks :)
  5- I'm super glad of how the website turned out to be even though i'm not fully satisfied but it is a working beauty!

  Overall i learned that planning and taking the time to understand anything is very much needed while working on such big projects,
  Also, in the future i will have to work with others so trying to read someone else's code to understand it and work with it was an amazing experience!
*/

/*          *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&
                 MMM88&&&&&&&&
                 'MMM88&&&&&&'
                   'MMM8&&&'      *
          |\___/|
          )     (             .              '
         =\     /=
           )===(       *
          /     \
          |     |
         /       \
         \       /
  _/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
  |  |  |  |( (  |  |  |  |  |  |  |  |  |  |
  |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
  |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |              */
