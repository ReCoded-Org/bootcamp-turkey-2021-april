//the API documentation site https://developers.themoviedb.org/3/

class App {
  static async run(movieLink , genreId=null) {
    let movies = await APIService.fetchMovies(movieLink,genreId);
    HomePage.renderMovies(movies);
  }
  static async search(query) {
    const search = await APIService.search(query);
    HomePage.renderSearch(search);
  }
  static async filterMovieType(){
    const movieGenres = await APIService.fetchFilterMovis();
    HomePage.renderFilter(movieGenres);
  } 
}
class Allstaffs {
  static async run() {
    const person = await APIService.fetchPersons();
    StaffPage.renderStaffsSection({ person });
  }
}
///////////////////////////////////////////////////////////////////////////

class APIService {
  static TMDB_BASE_URL = "https://api.themoviedb.org/3";

  static async search(query) {
    const url = APIService._constructUrl(`search/multi`) + "&query=" + query;
    const response = await fetch(url);
    const data = await response.json();
    return data.results
      .filter(item => item.media_type == "movie" || item.media_type == "person")
      .map(item => {
        if (item.media_type == "movie") return new Movie(item);
        else return new Staff(item);
      });
    return data.results.filter(item => {
      if (item.media_type == "movie") return new Movie(item);
      else if (item.media_type == "person") return new Staff(item);
    });
  }
  static async fetchMovies(movieLink , genreId) {
    const url = APIService._constructUrl(`movie/${movieLink}`);
    const response = await fetch(url);
    const data = await response.json();
    
   if(genreId){

      const filterMovie = data.results.filter(movie =>  movie.genre_ids.includes(genreId) ).map(movie => new Movie(movie));
      return filterMovie
   }
   else{
     const movies= data.results.map(movie => new Movie(movie));
     return movies;
   }
  }
  static async fetchMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}`);
    const response = await fetch(url);
    const data = await response.json();
    return new Movie(data);
  }
  static async fetchPersons() {
    const url = APIService._constructUrl(`person/popular`);
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(person => new Staff(person));
  }
  // Fetch for Actors
  static async fetchPopularActors() {
    const url = APIService._constructUrl(`person/popular`);
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(actor => new Staff(actor));
  }
  static async fetchActorById(id) {
    const url = APIService._constructUrl(`person/${id}`);
    const response = await fetch(url);
    const data = await response.json();
    return new Staff(data);
  }
  static async fetchMoviesByActor(id) {
    const url = APIService._constructUrl(`person/${id}/movie_credits`);
    const response = await fetch(url);
    const data = await response.json();
    return data.cast.map(movie => new Movie(movie)).slice(0, 12);
  }

  static async fetchStaffByMovieId(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/credits`);
    const response = await fetch(url);
    const data = await response.json();
    const cast = data["cast"].map(staff => new Staff(staff));
    const crew = data["crew"].map(staff => new Staff(staff));
    return { cast, crew }; 
  }
 // Fetch Filter Movie
  static async fetchFilterMovis() {
    const url = APIService._constructUrl(`genre/movie/list`);
    const response = await fetch(url);
    const data = await response.json();
    const movieGenres = data["genres"].map(type => (type))
    return movieGenres
  }
  
  // Fetch for similar movie 
  static async fetchSimilarMovies(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/similar`);
    const response = await fetch(url);
    const data = await response.json();
    const similarMovie = data["results"].map(similerMov => new Movie(similerMov)).slice(0, 5);
    // console.log(similarMovie)
    return similarMovie;
  }

  // Fetch for Trailer
  static async fetchTrailerOfMovie(movieId) {
    const url = APIService._constructUrl(`movie/${movieId}/videos`);
    const response = await fetch(url);
    const data = await response.json();
    const trailerMovie = data["results"]
      .filter(video => video.type == "Trailer")
      .filter(video => video.site == "YouTube")
      .map(trailer => new Trailer(trailer));
    return trailerMovie;
  }

  static _constructUrl(path) {
    return `${this.TMDB_BASE_URL}/${path}?api_key=${atob("NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI=")}`;

    //https://api.themoviedb.org/3/movie/106912?api_key=542003918769df50083a13c415bbc602&language=en-US
  }
}

///////////////////////////////////////////////////////////////////////////////

class HomePage {
  static container = document.getElementById("container");
  static mainContainer = document.getElementById("mainContainer");
  static renderMovies(movies) {
    this.mainContainer.innerHTML = "";
    this.container.innerHTML = "";
    const allCardsContainer = document.createElement("div");
    allCardsContainer.className = "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3";

    movies.forEach(movie => {
      const oneCard = document.createElement("div");
      oneCard.className = "col ";
      
      const cardContents = document.createElement("div");
      cardContents.className = "card btn ";

      const movieTitle = document.createElement("p");
      movieTitle.textContent = `${movie.title}`;
      movieTitle.id = "movie-title";
      
      const hoverImageDiv = document.createElement("div");
       hoverImageDiv.className = " container_foto";
      const movieImage = document.createElement("img");
      movieImage.src = `${movie.backdropUrl}`;
      movieImage.className = "card-img-top";
      hoverImageDiv.appendChild(movieImage)
      
      const hiddenDiv = document.createElement("div");
      hiddenDiv.className="hideDiv";
      
      const movieDetails = document.createElement("p");
      movieDetails.innerHTML = `Raiting: ${movie.vote_average} `;
      
      hiddenDiv.appendChild(movieDetails)
      hoverImageDiv.appendChild(hiddenDiv)
      
      

      hoverImageDiv.addEventListener("click", function () {
        Movies.run(movie.id);
      });

      cardContents.appendChild(hoverImageDiv);
      cardContents.appendChild(movieTitle);
      oneCard.appendChild(cardContents);

      allCardsContainer.appendChild(oneCard);
      this.container.appendChild(allCardsContainer);
    });
  }
  static renderSearch(search) {
    this.mainContainer.innerHTML = "";
    this.container.innerHTML = "";
    const allCardsContainer = document.createElement("div");
    allCardsContainer.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5";

    search.forEach(item => {
      console.log(item);
      const oneCard = document.createElement("div");
      oneCard.className = "col";

      const cardContents = document.createElement("div");
      cardContents.className = "card pointer";

      const title = document.createElement("p");
      const image = document.createElement("img");
      image.className = "card-img-top";
      if (item instanceof Movie) {
        title.textContent = `${item.title}`;
        image.src = `${item.backdropUrlPoster}`;
        image.addEventListener("click", function () {
          Movies.run(item.id);
        });
      } else if (item instanceof Staff) {
        title.textContent = `${item.name}`;
        image.src = `${item.profilePathUrl}`;
        image.addEventListener("click", function () {
          Actors.run(item.id);
        });
      }

      cardContents.appendChild(image);
      cardContents.appendChild(title);
      oneCard.appendChild(cardContents);

      allCardsContainer.appendChild(oneCard);
      this.container.appendChild(allCardsContainer);
      document.getElementById("search").value = "";
    });
  }
  static renderFilter(movieGenres){
    
   // console.log(movieGenres) 

   const optionList = document.getElementById("navBar");
   
    movieGenres.forEach(option =>{
     const oneOption = document.createElement("a");
     oneOption.className = "dropdown-item";
     oneOption.textContent = option.name;
     oneOption.href = "#";
     oneOption.addEventListener("click", function () {
         App.run("now_playing", option.id);

         
        });
     optionList.appendChild(oneOption)
  
  
   })  
  }
  static renderAbout(){  
   this.mainContainer.innerHTML = "";
    this.container.innerHTML = "";
    const aboutDiv = document.createElement("div");
    aboutDiv.innerHTML = `
      <div class="about">
      <h3>Let's talk about AR Movies</h3>
      <p>The Movie Database (AR Movies) is a <em>community built</em> movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. AR Movies's strong <em>international focus</em> and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>

      <h4>The AR Movies Advantage</h4>
      <div class="wrapper">
        <div>
          <div>1</div>
          <p>Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, AR Movies has become a premiere source for metadata.</p>
        </div>

        <div>
          <div>2</div>
          <p>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</p>
        </div>

        <div>
          <div>3</div>
          <p>We're international. While we officially support 39 languages we also have extensive regional data. Every single day AR Movies is used in over 180 countries.</p>
        </div>

        <div>
          <div>4</div>
          <p>Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on AR Movies is nothing short of amazing.</p>
        </div>

        <div>
          <div>5</div>
          <p>Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</p>
        </div>
      </div>
    </div>`;
    this.container.appendChild(aboutDiv);
  }
}

/////////////////////////////////////////////////////////////////////////////////

class Movies {
  static async run(id) {
    const movie = await APIService.fetchMovie(id);
    const staff = await APIService.fetchStaffByMovieId(id);
    const similarMovie = await APIService.fetchSimilarMovies(id);
    const trailerMovie = await APIService.fetchTrailerOfMovie(id);
    
    await MoviePage.renderMovieSection({ movie, staff, similarMovie, trailerMovie });
  }
}

class Actors {
  static async run(id) {
    const actor = await APIService.fetchActorById(id);
    const movies = await APIService.fetchMoviesByActor(id);
    await ActorPage.renderMovieSection({ actor, movies });
  }
}

/////////////////////////////////////////////////////////////////////////////////

class MoviePage {
  static mainContainer = document.getElementById("mainContainer");
  static container = document.getElementById("container");
  static renderMovieSection(data) {
    MovieSection.renderMovie(data);
  }
}

class StaffPage {
  static container = document.getElementById("container");
  static mainContainer = document.getElementById("mainContainer");
  static renderStaffsSection(data) {
    AllStaffList.renderstaff(data);
  }
}
class ActorPage {
  static mainContainer = document.getElementById("mainContainer");
  static container = document.getElementById("container");
  static renderMovieSection(data) {
    ActorsSection.renderActors(data);
  }
}

//////////////////////////////////////////////////////////////////////////////////
class AllStaffList {
  static renderstaff(person) {

    StaffPage.mainContainer.innerHTML = "";

    const staffcontainer = person.person.reduce((acc, currentValue) => {
      return (acc = `${acc}
      <div class = "col">
        <div class="card btn" onClick="Actors.run(${currentValue.id})">
        <img src="${currentValue.profilePathUrl}" "> 
          <p id="movie-title">${currentValue.name}</p>
        </div>
      </div>
      `);
    }, "");
    StaffPage.container.innerHTML = `
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">${staffcontainer}</div>
    `;
  }
}

class MovieSection {
  static renderMovie(data) {
    const { staff, movie, similarMovie, trailerMovie } = data;

    // Actors
    const actorDivs = staff.cast.slice(0, 5).reduce((acc, currentValue) => {
      return (acc = `${acc}
      
        <div class="card actor pointer"  onClick="Actors.run(${currentValue.id})">
          <img src="${currentValue.profilePathUrl}" > 
          <p id="movie-title">${currentValue.original_name}</p>
        </div> `);
    }, "");

    // director
    const directorDivs = staff.crew
      .filter(actor => actor.isDirector())
      .reduce((acc, currentValue) => {
        return (acc = `${acc}
       
        <div class="card actor" >
          <img src="${currentValue.profilePathUrl}" > 
          <p id="movie-title">${currentValue.original_name}</p>
        </div> `);
      }, "");

    // Trailer Movie
    const theTrailerofMovie = trailerMovie.reduce((acc, movie) => {
      return (acc = `${acc}
      <div class="col-md-4 col-sm-6">
        <div class="card "> 
          <iframe width="100%" height="315" 
            src="${movie.trailerPathUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
      </div>
      `);
    }, "");

    // similar Movie
    const theSimilarMoviesDiv = similarMovie.reduce((acc, movie) => {
      return (acc = `${acc} 
      <div class="col-md-4 col-sm-6">
        <div class="card ">
          <img class= "relatedMovie" src="${movie.backdropUrl}">
          <p> ${movie.title} </p>
         </div> 
      </div>
      `);
    }, "");

    // production_companies
    const productionCompaniesDiv = movie.newProductionCompanies.reduce((acc, currentValue) => {
      return (acc = `${acc}
      <div class="col-md-4 col-sm-6">
      <div class="card alpha">
      <img class="companyLogo" src = "${currentValue.logo_path}">
       <p> ${currentValue.name}</p>
      </div>
      </div>`);
    }, "");

    // Genres of Movie
    let movieGenres = "";
    for (let i = 0; i < movie.genres.length; i++) {
      movieGenres += movie.genres[i].name;
      if (i != movie.genres.length - 1) movieGenres += ", ";
    }

    // innerHTML
    MoviePage.mainContainer.innerHTML = `
    <div class="largeBg" style="background-image: url(${movie.backdropUrlBackground});">
    <div class="layer">
      <div class="container">
         <div class="row">
            <div class="col-md-4">
              <img id="movie-backdrop" src=${movie.backdropUrlPoster}> 
            </div>
            <div class="col-md-8">
              <h2 id="movie-title">${movie.title}</h2>
              <p class="small">${movie.releaseDate} - ${movieGenres} - ${movie.runtime} - ${movie.language}</p>
              <div class="d-flex flex-row flex-wrap align-items-center ">
                <div class="mr-2">
                  <img src="./images/star.png" width="30" >
                </div>
                <div class="d-flex flex-column flex-wrap">
                  <p class="average mb-0 "><b>${movie.vote_average}</b></p>
                  <p class="small count mb-0 ">${movie.vote_count}</p>
                </div>
              </div>
              <p id="movie-overview" class="mt-2">${movie.overview}</p>
              <h3 class="mt-4" >Production Companies</h3>
              <div class="row">${productionCompaniesDiv}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    MoviePage.container.innerHTML = `
      
      <h3>Actors</h3>
      <div class="d-flex flex-row flex-wrap ">${actorDivs}</div>
      
      <h3>Directors</h3>
      <div class="d-flex flex-row flex-wrap marginB">${directorDivs}</div>

      <h3>The trailer of the movie</h3>
      <div class="row marginB">${theTrailerofMovie}</div>

       <h3>The related movies</h3>
      <div class="row marginB"> ${theSimilarMoviesDiv} </div>
    `;
  }
}

class ActorsSection {
  static renderActors(data) {
    const { actor, movies } = data;

    const deathData = actor.deathday ? `<p><b>Day of Death:</b> ${actor.deathday}</p>` : "";
    const moviesDiv = movies.reduce((acc, currentValue) => {
      return (acc = `${acc}
      <div class="col-md-4 col-sm-6">
        <div class="card pointer" onClick="Movies.run(${currentValue.id})">
           <img  src = "${currentValue.backdropUrl}">
           <p> ${currentValue.title}</p>
        </div>
      </div>
      `);
    }, "");
    // innerHTML
    ActorPage.mainContainer.innerHTML = `

    <div class="largeBg" style="background-image: url(${actor.profilePathUrlLarge});">
     <div class="layer">
       <div class="container">
          <div class="row">
            <div class="col-md-4 ">
              <img id="movie-backdrop" src=${actor.profilePathUrl}> 
            </div>
            <div class="col-md-8 ">
              <h1>${actor.name}</h1>
              <p><i>${actor.theGender}</i></p>
              <p><b>Birthday:</b> ${actor.birthday}</p>
              ${deathData}
              <p><b>Popularity:</b> ${actor.popularity}</p>
              <p>${actor.biography}</p>
            </div>
         </div>
        </div>
     </div>
    </div>
  
    `;
    ActorPage.container.innerHTML = `  

      <h3 >Movies By ${actor.name}: </h3>
      <div class="row">${moviesDiv}</div>
    `;
  }
}
/////////////////////////////////////////////////////////////////////////////

class Movie {
  static BACKDROP_BASE_URL = "http://image.tmdb.org/t/p/w780";
  static PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w600_and_h900_bestv2";
  static PROFILE_BASE_URL_EXTRA_LARGE = "http://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
  constructor(json) {
    this.id = json.id;
    this.genres = json.genres;
    this.title = json.title;
    this.releaseDate = json.release_date;
    this.runtime = json.runtime + " minutes";
    this.language = json.original_language.toUpperCase();
    this.overview = json.overview;
    this.backdropPath = json.backdrop_path;
    this.production_companies = json.production_companies;
    this.vote_average = json.vote_average;
    this.vote_count = json.vote_count;
    this.poster_path = json.poster_path;
    this.name = json.name
  }

  get backdropUrl() {
    return this.backdropPath ? Movie.BACKDROP_BASE_URL + this.backdropPath : "/images/movieImg.jpg";
  }
  get backdropUrlPoster() {
    return this.backdropPath ? Movie.PROFILE_BASE_URL + this.poster_path : "/images/notAvailable.jpeg";
  }
  get backdropUrlBackground() {
    return this.backdropPath ? Movie.PROFILE_BASE_URL_EXTRA_LARGE + this.backdropPath : " ";
  }
  get newProductionCompanies() {
    return this.production_companies.map(company => {
      company.logo_path = company.logo_path ? Movie.BACKDROP_BASE_URL + company.logo_path : "/images/companyLogo.png";
      return company;
    });
  }
}

////////////////////////////////////////////////////////////////////////////

class Staff {
  static PROFILE_BASE_URL = "http://image.tmdb.org/t/p/w780";
  static PROFILE_BASE_URL_LARGE = "http://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
  constructor(json) {
    this.id = json.id;
    this.original_name = json.original_name ? json.original_name : json.name;
    this.name = json.name;
    this.profile_path = json.profile_path;
    this.job = json.job ? json.job : json.known_for_department;
    this.gender = json.gender;
    this.birthday = json.birthday;
    this.popularity = json.popularity;
    this.biography = json.biography;
    this.deathday = json.deathday;
  }

  get profilePathUrl() {
    return this.profile_path ? Staff.PROFILE_BASE_URL + this.profile_path : "/images/notAvailable.jpeg";
  }
  get profilePathUrlLarge() {
    return this.profile_path ? Staff.PROFILE_BASE_URL_LARGE + this.profile_path : "/images/notAvailable.jpeg";
  }
  get theGender() {
    let gender = "";
    switch (this.gender) {
      case 0:
        gender = "Not specified";
        break;
      case 1:
        gender = "Female";
        break;
      case 2:
        gender = "Male";
        break;
      case 3:
        gender = "Non-binary";
        break;
      default:
        gender = "Unknown";
    }
    return gender;
  }
  isDirector() {
    return this.job == "Director";
  }
}

///////////////////////////////////////////////////////////////////////////

class Trailer {
  static TRAILER_BASE_URL = "https://www.youtube.com/embed/";
  constructor(json) {
    this.id = json.id;
    this.key = json.key;
  }

  get trailerPathUrl() {
    return this.key ? Trailer.TRAILER_BASE_URL + this.key : "The trailer is not avilable";
  }
}

////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  App.filterMovieType(`genre/movie/list`)
  App.run("now_playing"); 
  const homePage = document.getElementById("homePage");
  homePage.addEventListener("click", function () {
    App.run("now_playing");
  });
  const staffList = document.getElementById("staffList");
  staffList.addEventListener("click", function () {
    Allstaffs.run();
  });
  const popularMovie = document.getElementById("popularMovie");
  popularMovie.addEventListener("click", function () {
    App.run("popular");
  });
  const topRatedMovie = document.getElementById("topRatedMovie");
  topRatedMovie.addEventListener("click", function () {
    App.run("top_rated");
  });
  const upcomingMovie = document.getElementById("upcomingMovie");
  upcomingMovie.addEventListener("click", function () {
    App.run("upcoming");
  });
  const submit = document.getElementById("submit");
  submit.addEventListener("click", function () {
    const search = document.getElementById("search");
    if (search.value) App.search(search.value);
    else alert("insert search");
  });
  const about = document.getElementById("about");
  about.addEventListener("click", function () {
    HomePage.renderAbout();
  });
});
