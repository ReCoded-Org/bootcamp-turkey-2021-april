class App {
  static async run() {
    const movies = await APIService.fetchMovies()
    HomePage.renderMovies(movies);
    //call back the home page returning function
    MenuPages.goBackHome();
    // call back the genres list creation function
    GenresList.createGenresList()
    // call back the popular actors page creation function
    MenuPages.renderAllPopulars()
    // call back the search function
    MenuPages.runSearchForm()
    //call back about page creation funcion
    MenuPages.renderAboutPage()
    //call back contact page creation funcion
    MenuPages.renderContactPage()
  }
}

class APIService {
  static TMDB_BASE_URL = 'https://api.themoviedb.org/3';
    
  static async fetchMovies() {
    const url = APIService._constructUrl(`movie/now_playing`)
    const response = await fetch(url)
    const data = await response.json()
    return data.results.map(movie => new Movie(movie))
  }

  static async fetchMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}`)
    const response = await fetch(url)
    const data = await response.json()
    return new Movie(data)
  }

  // fetching movie actors of the movie(5 main casts)
  static async fetchActors(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/credits`)
    //console.log(url);
    const response = await fetch(url)
    const data = await response.json()
    return data.cast.slice(0, 5);
  }

  // fetching movie director
  static async fetchDirector(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/credits`)
    //console.log(url);
    const response = await fetch(url)
    const data = await response.json()
    return data.crew.filter(crew => crew.job === "Director")
  }

   
  // fetching movie trailer
  static async fetchTrailer(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/videos`)
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data);
    return data
  }


  // fetching movie related films (5 similar)
  static async fetchSimilarMovies(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/similar`)
    //  console.log(url);
    const response = await fetch(url)
    const data = await response.json()
    //console.log(data.cast.slice(0, 5))
    return data.results.slice(0, 5);
 }

  // fetch personal information of the actor
  static async actorPersonalInfo(actorId) {
    const url = APIService._constructUrl(`/person/${actorId}`) 
    const data = await fetch(url)
    const personalInfo =  await data.json()
    return personalInfo
  }

   // fetch movie credits of the actor 
  static async actorMoviesCredits(actorId) {
    const url = APIService._constructUrl(`/person/${actorId}/movie_credits`)
    const data = await fetch(url)
    const moviesCredits = await data.json()
    return moviesCredits
  }

  // generate the movies of a specific genres (from discover section)
  static async fetchMoviesOfGenre(genreId){
    const urlStart= APIService._constructUrl(`discover/movie`);
    const url = urlStart + `&with_genres=${genreId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }


  // fetch all genres lists and add them to the dropdown button in nav
  static async fetchGenres(){
    const dropdownMenu = document.querySelector(".dropdownList");
    const url = APIService._constructUrl(`genre/movie/list`);
    const response = await fetch(url);
    const data = await response.json();
    return data  
  }


  // fetch the popular actors and need edit here too Actor to PopularActor
  static async fetchAllActors(){
    const url = APIService._constructUrl(`person/popular`)
    const response = await fetch(url);
    const data = await response.json()
    return data.results
    }


  // fetch mutiple search method funcion
  static async fetchMultiSearch(query){
    const url = APIService._constructUrl(`search/multi`)+`&language=en-US&query=${query}&page=1&include_adult=false`
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  }

  static _constructUrl(path) {
    return `${this.TMDB_BASE_URL}/${path}?api_key=${atob('NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI=')}`;
  }
}


class HomePage {
  static container = document.getElementById('container');
  static renderMovies(movies) {
    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add('homePageDiv')
    this.container.innerHTML = ""
    movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add('movieDiv')
      movieDiv.classList.add('col-md-4')
      movieDiv.classList.add('col-sm-5')
      movieDiv.classList.add('col-xs-12')
      const movieImage = document.createElement("img");
      movieImage.src = `${movie.backdropUrl}`;
      movieImage.classList.add('movieImageHomeSearch')
      const movieTitle = document.createElement("h3");
      movieTitle.textContent = `${movie.title}`;
      movieImage.addEventListener("click", function() {
        Movies.run(movie);
      });
      homePageDiv.appendChild(movieDiv)
      movieDiv.appendChild(movieImage);
      movieDiv.appendChild(movieTitle);
      this.container.appendChild(homePageDiv);
    })
  }
}


class Movies {
  static async run(movie) {
    const movieData = await APIService.fetchMovie(movie.id)
    console.log(movieData)

    const actorsData = await APIService.fetchActors(movie.id)
    // console.log(actorsData)

    const directorData = await APIService.fetchDirector(movie.id)
    // console.log(directorData)

    const trailerData = await APIService.fetchTrailer(movie.id)
    // console.log(movieData);
    
    const similarMovies = await APIService.fetchSimilarMovies(movie.id);
    // console.log(similarMovies);

    MoviePage.renderMovieSection(movieData, actorsData, trailerData, similarMovies, directorData);
      
  }
}

class MoviePage {
  static container = document.getElementById('container');
  static renderMovieSection(movie, actorsData, trailerData, similarMovies, directorData) {
    MovieSection.renderMovie(movie, actorsData, trailerData, similarMovies, directorData);
  }
}

class MovieSection {
    static renderMovie(movie, actors, trailer, similar, director) {
        MoviePage.container.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img id="movie-backdrop" src=${movie.backdropUrl}>
        </div>
        <div class="col-md-8">
          <h2 id="movie-title">${movie.title}</h2>
          <h3>Genres</h3>
          <!--  Generating the string of genres of the movie --!>

          <p id="genres">${movie.genres.map(genres => genres.name).join(", ")}</p>
          <h3>Date of Release</h3>
          <p id="movie-release-date">${movie.releaseDate}</p>
          <h3>Runtime</h3>
          <p id="movie-runtime">${movie.runtime}</p>
          <h3>Langauge</h3>
          <p id="movie-language">${movie.language}</p>
          <h3>Rating:</h3>
          <p"> ${movie.rating}</p>
          <h3>Votes:</h3>
          <p"> ${movie.votes}</p>
        </div>
        <div class="col-12">
          <h3>Overview:</h3>
          <p id="movie-overview">${movie.overview}</p>
        </div>
      </div>

      <h3 class="singleMovieActors">Movie Cast:</h3>
      <div class="five-actors col-12">
      </div>

      </br>

      <h3>Similar Movies:</h3>
      <div class="five-similar-movies col-12"></div>
      <br>

      <div>
      <h3>Trailer:</h3>

      <iframe class="trailerVideo" width="100%" height="480" src="https://www.youtube.com/embed/${trailer.results.map(trailer =>trailer.key)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </br>

      <h3>Production Companies:</h3>
      <div class="five-companies">
      ${movie.companies.map(company => {return `<div id="companyOfMovie">
      <img class="imgOfCompanyOfMovie" src= ${Movie.BACKDROP_BASE_URL + company.logo_path}></br><h5 class="productionCompTitle">${company.name}</h5>
      </div>`}).join(' ')}
      </div>

      <br>
      <h3>Director</h3>
      <p>${director[0].name}</p>`;

    const renderActors = function() {
      const actorsList = document.querySelector('.five-actors');
      for(let i = 0; i < 5; i++){
        actorsList.innerHTML += `
          <div class="actor-of-movie-div">
              <img class="actor-of-movie-img" src=${Movie.BACKDROP_BASE_URL + actors[i].profile_path} class="actorPicture">
              <h5>${actors[i].name}</h5>
          </div>
        `;
      }
      const eventListenerToActors = function (){
        const actorImage = document.querySelectorAll('.actor-of-movie-div')
        for (let i = 0; i < 5; i++){
          actorImage[i].addEventListener('click', function() {
              // console.log(actors[i])
              Actor.run(actors[i])
          });
        };
      }();
    }();

    const renderSimilarMovies = function() {
      const similarMoviesList = document.querySelector('.five-similar-movies');
      for(let i = 0; i < 5; i++){
        similarMoviesList.innerHTML += `
          <div class="movie-of-similar-div">
              <img class="similar-movie" src=${Movie.BACKDROP_BASE_URL + similar[i].poster_path} class="actorPicture">
              <h5>${similar[i].title}</h5>
          </div>
        `;
      }
      const eventListenerToSimilar = function (){
        const similarMoviePoster = document.querySelectorAll('.movie-of-similar-div')
        for (let i = 0; i < 5; i++){
          similarMoviePoster[i].addEventListener('click', function() {
              // console.log(similar[i])
              Movies.run(similar[i])
          });
        };
      }();
    }();
    }
}




class Actor {
  static async run(actor) {
    const actorInfo = await APIService.actorPersonalInfo(actor.id)
    // console.log(actorInfo)
 
    const actorMoviesCredits = await APIService.actorMoviesCredits(actor.id)
    // console.log(actorMoviesCredits)
    
    ActorPage.renderActorSection(actorInfo, actorMoviesCredits)

  }
}



class ActorPage {
  static container = document.getElementById('container');
  static renderActorSection(actorInfo, actorMoviesCredits) {
    ActorSection.renderActor(actorInfo, actorMoviesCredits);
  }
}




class ActorSection {
  static renderActor(data, movies) {
    // specifying the actor gender
    let gender ="";
    if (data.gender === 1) {
      gender = "female"
    } else {
      gender = 'Male';
    }

    // specify the actor birthday and death if available
    let birthdata;
    if (data.deathday == null && data.birthday != null) {
      birthdata = `<p id="actorBirthDate">Birthday: ${data.birthday}</p>
      <p id="actorDeatDate">Deathday: Unkown</p>`
    }
    else if (data.deathday != null && data.birthday != null) {
      birthdata = `<p id="actorBirthDate">Birthday: ${data.birthday}</p>
      <p id="actorDeatDate">Deathday: ${data.deathday}</p>`
    }
    else if (data.deathday != null && data.birthday == null) {
      birthdata = `<p id="actorBirthDate">Birthday: Unkown</p>
      <p id="actorDeatDate">Deathday: ${data.deathday}</p>`
    }
    else if (data.deathday == null && data.birthday == null) {
      birthdata = `<p id="actorBirthDate">Birthday: Unkown</p>
      <p id="actorDeatDate">Deathday: Unkown</p>`
    }

    // cheching if the place of birth is null
    let birthPlace;
    if (data.place_of_birth == null) {
      birthPlace= "Unkown"
    } else {
      birthPlace= data.place_of_birth
    }

    MoviePage.container.innerHTML = `
      <div class="column">
        <div class="row">
          <div class="col-md-4">
            <img id="movie-backdrop" src=${Movie.BACKDROP_BASE_URL + data.profile_path} alt=${data.name}> 
          </div>
          <div class="col-md-8">
            <div>
              <h2 id="actorName">${data.name}</h2>
              <p id="actorGender">Gender: ${gender}</p>
              ${birthdata}
              <p id="actorPlaceOfBirth"> Place of Birth: ${birthPlace}</p>
              <p id="popularity"> Popularity: ${data.popularity}</p>

              <h4>Biography:</h4>
              <p id="actorBiography">${data.biography}</p>
            </div>
          </div>
        </div>

        <br>
        <h4>Movies of Actor:</h4>
        <div id="actorMoviesCredits"> 
        </div>
      </div>
    `;

    const addMoviesCredites = function() {
      // console.log ('XXXXXXXXXXX' + movies.cast[0].original_title)
      const actorMoviesCredits = document.querySelector('#actorMoviesCredits');
      for (let i = 0; i < 10; i++ ){
        actorMoviesCredits.innerHTML += `
        <div class="singleMovieCreditDiv col-md-3 col-sm-5 col-xs-12">
          <img class="singleMovieCreditsImage" src=${Movie.BACKDROP_BASE_URL + movies.cast[i].backdrop_path}>
          <p>${movies.cast[i].original_title}</p>
        </div>
        `
      }
      const eventListenerToMovieCredit = function() {
        const singleMovieCreditDiv = document.querySelectorAll('.singleMovieCreditDiv');
        for (let j=0; j< singleMovieCreditDiv.length; j++)
        singleMovieCreditDiv[j].addEventListener('click', function(){
          Movies.run(movies.cast[j])
        })
      }();
    }();

  }
}


class Movie {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.releaseDate = json.release_date;
        this.runtime = json.runtime + " minutes";
        this.overview = json.overview;
        this.backdropPath = json.backdrop_path;
        this.genres = json.genres;
        this.language = json.original_language;
        this.votes = json.vote_count;
        this.rating = json.vote_average;
        this.companies = json.production_companies
        // console.log(json)
        
    }


    get backdropUrl() {
        return this.backdropPath ? Movie.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}

class GenresList{
  static async createGenresList() {
    const genresListData = await APIService.fetchGenres()
    // console.log(genresListData)
    console.log('\n')
    console.log('\n')

    MenuPages.renderGenresList(genresListData)
  }
}



class MenuPages{
  static goBackHome() {
    const homePageBtn = document.getElementById('homePage');
    homePageBtn.addEventListener('click', function(){
      // console.log("test this out")
    document.getElementById('container').innerHTML = "";
    App.run();
    })
  };


  static renderGenresList(listData, moviesData) {
    // console.log('test test')
    const genresList = document.querySelector('.dropdownList');
    // console.log(genresList)
    // console.log(listData.genres[0].name)
    // console.log("before loop")

    for (let i = 0; i< listData.genres.length; i++){
      genresList.innerHTML +=`
      <button class="singleGenresBtn">${listData.genres[i].name}</button>
      `
    }

    const eventListenereToGenres = function (){
      const genresBtnList = document.querySelectorAll('.singleGenresBtn')
      for (let j = 0; j < genresBtnList.length; j++){
       genresBtnList[j].addEventListener('click', async function(){
        //  console.log('It is easy man')
          const genreMovies = await APIService.fetchMoviesOfGenre(listData.genres[j].id)
          // console.log(genreMovies)
          const arrMovieObj = genreMovies.results.map(movie=>new Movie(movie))
          // console.log(arrMovieObj)
          HomePage.renderMovies(arrMovieObj)
       }) 
      }
    }()
  }


  // fetch actors when clicking on the actors button
  static renderAllPopulars(){
    const container = document.getElementById('container');
    const actorsBtn = document.getElementById('actorPage');
    // console.log("test")
    actorsBtn.addEventListener('click', async function(){
      // console.log("testy")
      const actorsArr = await APIService.fetchAllActors()
      // console.log(actorsArr)
      container.innerHTML =`<div class="popularActorDiv"></div>`
      const popularActorDiv= document.querySelector('.popularActorDiv')
      for(let i = 0; i < actorsArr.length; i++) {
      popularActorDiv.innerHTML += `
        <div class="actorPageSingle col-md-4 col-sm-5 col-xs-12">
          <img class="actorPageSingleImg" src=${Movie.BACKDROP_BASE_URL + actorsArr[i].profile_path}>
          <h2 class="actorPageSingleName">${actorsArr[i].name}</p>
        </div>
      `
      }
      const eventListerToPopularActor = async function() {
        const popularActorList = document.querySelectorAll('.actorPageSingle')
        const actorsArr = await APIService.fetchAllActors()
        console.log(actorsArr)
        for (let j = 0; j < popularActorList.length; j++){
          popularActorList[j].addEventListener('click', function(){
            Actor.run(actorsArr[j])
          })
        }
      }()
    })  
  }



  // rendering the search result when requesting a query
  static runSearchForm(){
    const container = document.getElementById('container');
    const searchFrom = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput')
    searchFrom.addEventListener('submit', async function(e) {
      e.preventDefault();
      // console.log('test')
      // console.log(searchInput.value)
      const fetchedData = await APIService.fetchMultiSearch(searchInput.value)
      // console.log(fetchedData)
      let moviesArr = [];
      let personArr = [];
      for (let i = 0; i < fetchedData.length; i++){
        if (fetchedData[i].media_type === "movie"){
          moviesArr.push(fetchedData[i])
        } else if (fetchedData[i].media_type === "person") {
          personArr.push(fetchedData[i])
        }
      }
      console.log('\n')
      console.log(moviesArr)
      console.log('\n')
      console.log(personArr) 
      container.innerHTML = `
        <h2 class="moviesSearchResultsTitle">Movies Results</h2>
        <div id="moviesSearchResults"></div>
        <br>
        <h2 class="personsSearchResultsTitle">Actors Results</h2>
        <div id="personsSearchResults"></div>
      `
      const moviesSearchResults = document.getElementById('moviesSearchResults')
      const personsSearchResults = document.getElementById('personsSearchResults')

      function renderResults(){
        if (moviesArr.length != 0) {
          for (let i =0; i < moviesArr.length; i++){
            moviesSearchResults.innerHTML += `
              <div class="searchSingleMovie col-md-4 col-sm-5 col-xs-12">
                <img class="movieImageSearch" src=${Movie.BACKDROP_BASE_URL + moviesArr[i].poster_path}>
                <h3 id="movieTitle">${moviesArr[i].original_title}</h3>
              </div>
              <br>
            `
          }
        function eventToSearchMovies(){
          const listOfSearchMovies = document.querySelectorAll('.searchSingleMovie')
          // console.log(listOfSearchMovies)
          for(let i = 0; i < listOfSearchMovies.length; i++){
            listOfSearchMovies[i].addEventListener('click', function(){
              Movies.run(moviesArr[i])
            })
          }
        }
        eventToSearchMovies()
        }
        else {
          moviesSearchResults.innerHTML += `<p>Sorry, Thers is no avilable results, please try another search word</p>`
        }
        
        if (personArr.length != 0){
          for (let i =0; i < personArr.length; i++){   
            personsSearchResults.innerHTML += `
              <div class="searchSinglePerson col-md-4 col-sm-5 col-xs-12">
                <img class="actorImageSearch" src=${Movie.BACKDROP_BASE_URL + personArr[i].profile_path}>
                <h3 id="personTitle">${personArr[i].name}</h3>
              </div>
              <br>
            `
          }
          function eventToSearchPersons(){
            const listOfSearchPersons = document.querySelectorAll('.searchSinglePerson')
            // console.log(listOfSearchPersons)
            for(let i = 0; i < listOfSearchPersons.length; i++){
              listOfSearchPersons[i].addEventListener('click', function(){
                Actor.run(personArr[i])
              })
            }
          }
          eventToSearchPersons()
        }
        else {
          personsSearchResults.innerHTML += `<p>Sorry, Thers is no avilable results, please try another search word</p>`
        }
      }
      renderResults()
    })
  }



  static renderAboutPage(){
    const container = document.getElementById('container');
    const aboutBtn  = document.getElementById('aboutPage');
    aboutBtn.addEventListener('click', function(){
      container.innerHTML = `
        <div class="about-section">
          <h1>Movies Treasure</h1>
          <h2>All You Need To Get Familiar With Movies And Actors</h2>
          <br>
          <h3>Introduction</h3>
          <p><strong>MOVIES TREASURE</strong> is a one page application that gets data from the MOVIE DATABASE API in a stylish and user-friendly way for those who want to get info about movie and actors including free of charge.</p>
          <br>
          <h3>What Can You Do</h3>
          <ol>
            <li>Get familiar with new movies that are playing in a timely manner</li>
            <li>See all the movies according to their genres from 1950 until 2021! with a summary of the movies and a snap on similar films, trailer, production compaies, director, and actors.</li>
            <li>Meet the most popular actors and actress who are leading the movies industry and see all thier previous master peices</li>
            <li>Smart search engine for any movie or actors typing one single words for multiple results</li>
            <li>And enjoy searching for a nice movie to spend the night with! :D</li>

        </div>
        <br>
      `
      })
  }


  static renderContactPage(){
    const container = document.getElementById('container');
    const contactBtn = document.getElementById('contactPage');
    contactBtn.addEventListener('click', function(){
      container.innerHTML = `
        <h2 style="text-align:center">Our Team</h2>
        <div class="TeamRow col-md-8">
          <div class="teamColumn col-md-5 col-sm-5 col-xs-12">
            <div class="card">
              <img src="https://avatars.githubusercontent.com/u/81829702?v=4" alt="Mohamad" style="width:100%">
                <div class="cardInfoContainer">
                  <h2>Mohamad Ziada</h2>
                  <p>Digital Marketing Specialist and Junior Web Developr.</p>
                  <p>info@mhdziad.com</p>
                  <p><button class="cardButton"><a href="https://www.facebook.com/Mohamad.Ziada.93" target="_blank">Contact Me</a></button></p>
                </div>
            </div>
          </div>

          <div class="teamColumn col-md-5 col-sm-5 col-xs-12">
            <div class="card">
              <img src="https://avatars.githubusercontent.com/u/81989914?v=4" alt="Mulham" style="width:100%">
              <div class="cardInfoContainer">
                <h2>Moulham Hallak</h2>
                <p>Technical Egnineer and a Junior Web Developr.</p>
                <p>moulham@example.com</p>
                <p><button class="cardButton"><a href="https://www.facebook.com/Mohamad.Ziada.93" target="_blank">Contact Me</a></button></p>
              </div>
            </div>
          </div>
        </div>
      `
    })
  }
}

document.addEventListener("DOMContentLoaded", App.run);






