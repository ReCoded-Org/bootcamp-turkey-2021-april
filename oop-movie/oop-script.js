//the API documentation site https://developers.themoviedb.org/3/
const container = document.getElementById('container');

class App {
  static async run(input) {
    //At initialization, fetches now playing movies *else statement* and displays them in the homepage, also gets movies by filter or genres from the navbar to display in the homepage
    let movies
    if (typeof input === "number") { movies = await APIService.fetchMoviesByGenre(input) }
    else { movies = await APIService.fetchMovies(input) }
    HomePage.renderMovies(movies);
  };
};

class APIService {
  static TMDB_BASE_URL = 'https://api.themoviedb.org/3';
  //Creates the url to look up
  static _constructUrl(path) {
    return `${this.TMDB_BASE_URL}/${path}?api_key=${atob('NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI=')}`;
  };

  //returns movie objects (now playing, popular, top rated, upcoming )
  static async fetchMovies(property) {
    const url = APIService._constructUrl(`movie/${property}`)
    const data = await (await fetch(url)).json()
    //results is the array that has the movies as objects inside
    return data.results.map(movie => new Movie(movie))
  };

  //returns single movie object
  static async fetchMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}`)
    const data = await (await fetch(url)).json()
    return new Movie(data)
  };

  //returns actor objects for any given movie id
  static async fetchActors(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/credits`);
    const data = await (await fetch(url)).json();
    return new CastCrew(data);
  };

  //returns related (recommended) movie objects for any given movie id
  static async fetchRelatedMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/recommendations`);
    const data = await (await fetch(url)).json();
    return new RelatedMovies(data);
  };

  //returns trailer object for any given movie id
  static async fetchTrailer(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/videos`);
    const data = await (await fetch(url)).json();
    return new Trailer(data);
  };

  //returns actor details for single actor page for any actor id
  static async fetchSingleActor(personId) {
    const url = APIService._constructUrl(`person/${personId}`);
    const data = await (await fetch(url)).json();
    return new SingleActor(data);
  }

  //returns the movie credits for a person id
  static async fetchMovieCreditsForActor(personId) {
    const url = APIService._constructUrl(`person/${personId}/movie_credits`);
    const data = await (await fetch(url)).json();
    return new MovieCredits(data);
  }

  //returns movies for any genre id
  static async fetchMoviesByGenre(genreId) {
    const data = await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ecfdd3d5230c96c392fc9421937894a9&include_adult=false&with_genres=${genreId}`)).json();
    //results is the array that has the movies as objects inside
    return data.results.map(movie => new Movie(movie))
  }

  //returns popular actors to display on the actor list page
  static async fetchPopularActors() {
    const data = await (await fetch(`https://api.themoviedb.org/3/person/popular?api_key=ecfdd3d5230c96c392fc9421937894a9&language=en-US&page=1`)).json();
    //results is the array that has the people as objects inside
    return data.results.map(person => new SingleActor(person))
  }

  //returns actor results for search
  static async fetchActorSearchResults (search) {
    const personSearchResults = await (await fetch(`https://api.themoviedb.org/3/search/person?api_key=ecfdd3d5230c96c392fc9421937894a9&query=${search}&include_adult=false`)).json()
    //results is the array that has the people as objects inside
    return personSearchResults.results.map(person => new SingleActor(person))
  }

  //returns movie results for search
  static async fetchMovieSearchResults (search) {
    const movieSearchResults = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ecfdd3d5230c96c392fc9421937894a9&query=${search}&include_adult=false`)).json()
    //results is the array that has the movies as objects inside
    return movieSearchResults.results.map(movie => new Movie(movie))
  }

  static async fetchCompanies (companyId) {
    const url = APIService._constructUrl(`/company/${companyId}`);
    const data = await (await fetch(url)).json();
    return new Company(data);
  }
};

class HomePage {
  //displays returned movie objects in the home page
  static renderMovies(movies) {

    //Empty the container div if it has something in it
    if (container.innerText !== "") {
      container.innerText = "";
    }

    const div = document.createElement("div");
    div.setAttribute("class", "homePageMovies row g-3 p-3");
    // div.setAttribute("style", "font-family: Poppins;");

    const moviesContainer = container.appendChild(div);

    movies.forEach(movie => {
      //creates single movie divisions for the home page for each movie
      const movieDiv = document.createElement("div");
      movieDiv.setAttribute("class", "col-md-4 col-sm-6")
      const movieImage = document.createElement("img");
      movieImage.setAttribute("class", "img-fluid homePageMovieImg");
      movieImage.setAttribute("title", `${movie.overview}`)
      movieImage.src = `${movie.backdropUrl}`;

      const movieTitle = document.createElement("h3");
      movieTitle.textContent = `${movie.title.toUpperCase()}`;
      movieTitle.setAttribute("class", "movie-title text-center");

      movieImage.addEventListener("click", function () {
        Movies.run(movie); //calls Movies.run with the movie parameter from movies.forEach(movie)
      });

      movieDiv.appendChild(movieImage);
      movieDiv.appendChild(movieTitle);
      moviesContainer.appendChild(movieDiv);
    })
  }
}

class Movies {
  static async runFromID (movieId) {
    const movie = await APIService.fetchMovie(movieId)
    Movies.run(movie)
  }

  static async run(movie) {
    //gets the movie info from "Movies.run(movie)" and passes it into fetch to get that movie's info
    const movieData = await APIService.fetchMovie(movie.id)
    const castCrew = await APIService.fetchActors(movie.id)
    const relatedMovies = await APIService.fetchRelatedMovie(movie.id)
    const trailer = await APIService.fetchTrailer(movie.id)

    MoviePage.renderMovieSection(movieData, castCrew, relatedMovies, trailer);
  };
};

//Classes for pages start here
class MoviePage {
  static renderMovieSection(movie, castCrew, relatedMovies, trailer) {
    MovieSection.renderMovie(movie);
    MovieSection.renderCastCrew(castCrew);
    MovieSection.renderRelatedMovies(relatedMovies);
    MovieSection.renderTrailer(trailer);
  };
};

class MovieSection {
  static renderMovie(movie) {

    //Loop through genres and create a html string to display
    const genres = movie.genres.map(genre => genre.name).join(", ")

    //Loop through languages and create a html string to display        
    const languages = movie.spokenLanguages.map(language => language.name).join(", ")

    //Loop through production companies and create a html string to display
    const production = movie.productionCompanies.map(company => `
    <div class="company-card col-md-4 col-s-6 col-6">
      <h6>${company.name}</h6>
      <img style="width: 100%" src=${movie.productionLogoUrl(movie.productionCompanies.indexOf(company))} alt="${company.name}" height="150px" width="300px" href='Company.getCompanyById(${company.id})' target="blank"> 
    </div>`).join(" ")

    // <img id="movie-poster" src="${movie.posterUrl}" class="img-fluid ">
    // class="d-flex justify-content-center align-items-center x-0" style="width: 100%; height: 100%;" used flex things

    container.innerHTML = `
      <div class="hero container-fluid" style="background-image: url(${movie.backdropUrl})">
        <div class="hero-color">

          <div class="content-wrapper container-fluid row justify-content"> <!-- DONT add a container fluid to this div -->
            
            <div id="poster-wrapper" class="col-sm-4 col-10">
              <img id="movie-poster" src="${movie.posterUrl}" class="img-fluid">
            </div>
            
            <div class="text-content col-sm-8 col-10">
              <h2 id="movie-title">${movie.title}</h2>
              <h5 id="genres">Genres: ${genres}</h5>
              <h5 id="vote">Vote Count: ${movie.voteCount}, Vote Average: ${movie.voteAverage}</h5>
              <h5 id="details">Spoken Languages: ${languages}, Release Date: ${movie.releaseDate}, Runtime: ${movie.runtime} </h5>
              <h3>Overview:</h3>
              <p id="movie-overview">${movie.overview}</p>
            </div>
            
          </div>
        </div>
      </div>

      <div id="castCrew-wrapper" class="row my-2" style="width: 95%;">       
      </div>
      
      <div class="trailerDiv row align-items-center container-fluid " >
      </div>

      <div class="column my-4" style="text-align: center; width: 95%;">
        <h3>Movies you might like:</h3>
        <div id ="related-movies" class="row justify-content-center gx-4 my-3">
        </div>
      </div>
    
      <h3 class="text-center">Production Companies</h3>
      <div class="productionDiv row justify-content-center g-5">
      ${production}
      </div>`
  }

  static renderCastCrew(castCrew) {
    const castCrewDiv = document.querySelector('#castCrew-wrapper')
    castCrew.director.name = castCrew.director.name + ", Director"
    castCrew.actors.unshift(castCrew.director)

    //Loop through director and actors and create a html string including their names and photos, onclick image, call renderActorPage with the actor's id 
    const directorAndActors = castCrew.actors.map(actor => `
    <div class="actor col-md-2 col-sm-4 col-6">
      <img style="cursor: pointer;" src=${castCrew.actorsProfileUrl(castCrew.actors.indexOf(actor))} class="img-fluid" onclick="ActorPage.run(${actor.id})" >
      <h6>${actor.name}</h6>
    </div>`).join(" ")

    castCrewDiv.innerHTML = `     
        <h3>Director and Actors:</h3>
        <div class="row gx-3 my-2">  
        ${directorAndActors}
        </div>`
    }

  static renderRelatedMovies(relatedMovies) {
    const relatedMoviesDiv = document.querySelector('#related-movies')

    //Loop through related movies and create a html string to display
    const recommendations = relatedMovies.movies.map(movie => `
    <div class="related-movie col-md-2 col-sm-4 col-6">
      <img src=${relatedMovies.relatedMoviesPosterUrl(relatedMovies.movies.indexOf(movie))} class="img-fluid" role="button" onclick="Movies.runFromID(${movie.id})">
      <h6>${movie.title}</h6>
    </div>`).join(" ")
    relatedMoviesDiv.innerHTML = recommendations
  }

  //Displays the trailer from youtube in the trailer section of single movie page, takes trailer class instance as a parameter
  static renderTrailer(trailer) {
    const trailerDiv = document.querySelector('.trailerDiv');
    trailerDiv.innerHTML = `    
      <h3 class="text-center">Trailer</h3>
      <div class="ratio ratio-16x9">
        <iframe class="trailer" src="${trailer.trailerUrl()}" allowfullscreen></iframe>
      </div>
    `
  }
};

class ActorListPage {
  static async run() {

    //Empty the container div if it has something in it
    if (container.innerText !== "") {
      container.innerText = "";
    }

    //gets popular actors from API and returns an array of actor objects
    const actorData = await APIService.fetchPopularActors()
    ActorListPage.renderActors(actorData)
  }
  static renderActors(actors) {
    const div = document.createElement("div");
    div.setAttribute("class", "actorListPageActors row p-4");
    const actorsContainer = container.appendChild(div);

    actors.forEach(actor => {
      //creates single movie divisions for the home page for each movie
      const actorDiv = document.createElement("div");
      actorDiv.setAttribute("class", "actorListPageActor col-lg-2 col-md-3 col-sm-4 col-6")
      const actorImage = document.createElement("img");
      actorImage.setAttribute("class", "img-fluid actorListPageImg");
      actorImage.src = `${actor.actorsProfileUrl()}`;

      const actorTitle = document.createElement("h3");
      actorTitle.textContent = `${actor.name.toUpperCase()}`;
      actorTitle.setAttribute("class", "actor-name text-center");

      actorImage.addEventListener("click", function () {
        ActorPage.run(actor.id); //calls ActorPage.run with the id parameter from actor.forEach(actor)
      });

      actorDiv.appendChild(actorImage);
      actorDiv.appendChild(actorTitle);
      actorsContainer.appendChild(actorDiv);
    })
  }
}

class ActorPage {
  static async run(personId) {
    const actorData = await APIService.fetchSingleActor(personId)
    const movieCredits = await APIService.fetchMovieCreditsForActor(personId)

    ActorPage.renderActorPage(actorData, movieCredits)
  }
  static renderActorPage(actorData, movieCredits) {
    //A function to create the string of the birthday and deathday if the actor is deceased, otherwise only birthday, none if no info
    const birthAndDeathday = actorData => {
      if (actorData.birthday != null) {
        if (actorData.deathday != null) { return `Birthday: ${actorData.birthday} Deathday: ${actorData.deathday}` }
        else { return `Birthday: ${actorData.birthday}` }
      }
      else return ``
    }

    //A function to create the string for the gender of the actor
    const gender = actorData => actorData.gender == 1 ? "Female" : "Male";

    //Loop through movies played in and create a html string to display 
    const moviesCast = movieCredits.moviesInCast.map(movie => `
    <div class="movie-card col-md-2 col-sm-4 col-6">
      <img class="img-fluid" src=${movieCredits.castMoviesPosterUrl(movieCredits.moviesInCast.indexOf(movie))} alt="${movie.title}" onclick="Movies.runFromID(${movie.id})">
      <h6>${movie.title} as ${movie.character}</h6>
    </div>`).join(" ")

    //Loop through movies worked in and create a html string to display
    const moviesCrew = movieCredits.moviesInCrew.map(movie => `
    <div class="movie-card col-md-2 col-sm-4 col-6">
      <img class="img-fluid" src=${movieCredits.crewMoviesPosterUrl(movieCredits.moviesInCrew.indexOf(movie))} alt="${movie.title}" onclick="Movies.runFromID(${movie.id})">
      <h6>${movie.title} as ${movie.job}</h6>
    </div>`).join(" ")

    container.innerHTML = `
    <div class="row pt-4 mx-2">
        <div class="col-md-4 col-sm-4">
          <img id="actor-profile" class="img-fluid" src=${actorData.actorsProfileUrl()}> 
        </div>
        <div class="col-md-8 col-sm-8 actor-content">
        <h2 id="actor-name">${actorData.name}</h2>
        <h5 id="gender">Gender: ${gender(actorData)}</h5>
        <h5 id="popularity">Popularity: ${actorData.popularity}</h5>
        <h5 id="birthday & deathday">${birthAndDeathday(actorData)}</h5>
        <h5 id="biography">Biography: </h5>
        <p> ${actorData.biography} </p>
      </div>}        
    </div>
    <div class="row" style="text-align: center;">
      <h3>Movies In Cast</h3>
      <div class="row justify-content-center">
        ${moviesCast}
      </div>
    </div>
    <div class="row" style="text-align: center;">
      <h3>Movies In Crew</h3>
      <div class="row justify-content-center">
        ${moviesCrew}
      </div>
    </div>`
  };
};

class SearchPage {
  static async renderSearchResults(search) {
    const movieSearchResults = await APIService.fetchMovieSearchResults(search)
    const personSearchResults = await APIService.fetchActorSearchResults(search)

    let movies, people
    if (movieSearchResults.length === 0) { movies = "<h4>Unfortunately, no such movies found.</h4>" }
    
    //Loop through movie search results and create a html string to display
    else {movies = movieSearchResults.map(movie => `
      <div class="searchResult-card col-md-2 col-sm-3 col-6">
        <img src='${movie.posterUrl}' class="img-fluid" alt="${movie.title}" onclick="Movies.runFromID(${movie.id})">
        <h4>${movie.title}</h4>
      </div>`).join(" ");}  
    
    if (personSearchResults.length === 0) { people = "<h4>Unfortunately, no such people found.</h4>"}
    
    //Loop through person search results and create a html string to display
    else {people = personSearchResults.map(person => `
    <div class="searchResult-card col-md-2 col-sm-3 col-6">
      <img src='${person.actorsProfileUrl()}' class="img-fluid" alt="${person.name}" onclick="ActorPage.run(${person.id})">
      <h4>${person.name}</h4>
    </div>`).join(" ")}
    
    container.innerHTML = `
    <h2>Movie Search Results</h2>
    <div class="row searchResults">${movies}</div>
    <h2>People Search Results</h2>
    <div class="row searchResults">${people}</div>`
  }
}

// Search button functionality
const submit = document.querySelector("#submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const search = document.querySelector("#search").value;    
    SearchPage.renderSearchResults(search)
  })

class AboutPage {
  static renderAboutPage(){
    container.innerHTML =`
    <div class ="aboutPage" >
      <p>Made by blood, sweat and tears of Ali Rıza Şahin and Ufuk Deniz Demirbilek</p>
      <h3>Contents</h3>
      <ol>
        <li>HomePage</li>
        <ul>
          <li>Filter and Genre Selection</li>
          <li>Display movies according to genre or filter selected from dropdown menu</li>
        </ul>
        <li>Single Movie Page</li>
          <ul>
            <li>Single Movie Details with Trailer and Cast & Crew</li>
            <li>Every card is linked to either single actor or movie page</li>
          </ul>
        <li>Actor List Page</li>
          <ul>
            <li>Display Popular Actors</li>
          </ul>
        <li>Search</li>
          <ul>
            <li>For any given input, searches in people and movies, displays all</li>
            <li>Every card is linked to either single actor or movie page</li>
          </ul>
      </ol>
    </div>`
  }
}

//Classes for objects start here

class Movie {
  static PICTURE_BASE_URL = 'http://image.tmdb.org/t/p/w780';
  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.releaseDate = json.release_date;
    this.runtime = json.runtime + " minutes";
    this.overview = json.overview;
    this.backdropPath = json.backdrop_path;
    this.posterPath = json.poster_path;
    this.genres = json.genres;
    this.spokenLanguages = json.spoken_languages;
    this.voteAverage = json.vote_average;
    this.voteCount = json.vote_count;
    this.productionCompanies = json.production_companies;
  };

  //Backdrop url is the pictures of the movies that can be used as a background
  get backdropUrl() {
    return this.backdropPath ? Movie.PICTURE_BASE_URL + this.backdropPath : "";
  };

  //Poster path url is the posters of the movies
  get posterUrl() {
    return this.posterPath ? Movie.PICTURE_BASE_URL + this.posterPath : "";
  };

  //Production logo url is the url of production company logos
  productionLogoUrl(i) {
    return this.productionCompanies[i].logo_path ? Movie.PICTURE_BASE_URL + this.productionCompanies[i].logo_path : "";
  };
};

class CastCrew {
  constructor(json) {
    this.actors = json.cast.slice(0, 5);
    this.director = json.crew.find((person) => person.job === "Director");
  };

  //Profile url is the pictures of the cast & crew
  actorsProfileUrl(i) {
    return this.actors[i].profile_path ? Movie.PICTURE_BASE_URL + this.actors[i].profile_path : "";
  };
}

class RelatedMovies {
  constructor(json) {
    this.movies = json.results.slice(0, 5);
  };

  //Poster url is the pictures of the movie posters
  relatedMoviesPosterUrl(i) {
    return this.movies[i].poster_path ? Movie.PICTURE_BASE_URL + this.movies[i].poster_path : "";
  };
}

class Trailer {
  static TRAILER_BASE_URL = 'https://www.youtube.com/embed/';
  constructor(json) {
    this.trailer = json.results[0];
  };

  //Trailer url is the pictures of the movie posters
  trailerUrl() {
    return this.trailer.key ? Trailer.TRAILER_BASE_URL + this.trailer.key : "";
  };
}

class Company {
  constructor(json){
    this.homepage = json.homepage
  }

  static async getCompanyById (companyId) {
    const company = await APIService.fetchCompanies(companyId)
    return `${company.homepage}`
  }
}

class SingleActor {
  constructor(json) {
    this.name = json.name;
    this.gender = json.gender; // 1: Female, 2:Male
    this.profilePath = json.profile_path;
    this.popularity = json.popularity;
    this.biography = json.biography;
    this.birthday = json.birthday;
    this.deathday = json.deathday;
    this.knownForDepartment = json.known_for_department
    this.id = json.id
  }

  //Profile url is the pictures of the cast & crew
  actorsProfileUrl() {
    return this.profilePath ? Movie.PICTURE_BASE_URL + this.profilePath : "";
  };
}

class MovieCredits {
  constructor(json) {
    this.moviesInCast = json.cast.slice(0, 6)
    this.moviesInCrew = json.crew.slice(0, 6)
  }

  //Backdrop url is the pictures of the movies that can be used as a background
  castMoviesPosterUrl(i) {
    return this.moviesInCast[i].poster_path ? Movie.PICTURE_BASE_URL + this.moviesInCast[i].poster_path : "";
  };

  crewMoviesPosterUrl(i) {
    return this.moviesInCrew[i].poster_path ? Movie.PICTURE_BASE_URL + this.moviesInCrew[i].poster_path : "";
  };
}

document.addEventListener("DOMContentLoaded", App.run("now_playing"));