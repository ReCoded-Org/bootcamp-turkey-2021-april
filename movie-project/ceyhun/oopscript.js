// The API documentation site https://developers.themoviedb.org/3/

// https://developers.themoviedb.org/3/movies/get-movie-details
// https://developers.themoviedb.org/3/movies/get-movie-credits
// https://developers.themoviedb.org/3/people/get-person-details

// ++   Popular Movies:  https://developers.themoviedb.org/3/movies/get-popular-movies
// ++   Top Rated:       https://developers.themoviedb.org/3/movies/get-top-rated-movies
// ++   Now Playing:     https://developers.themoviedb.org/3/movies/get-now-playing
// ++    Up Coming:       https://developers.themoviedb.org/3/movies/get-upcoming

// Youtube Video -> https://www.youtube.com/watch?v={key}
// Youtube Embed -> https://www.youtube.com/embed/{key}

// For postman Inside Movie  : https://api.themoviedb.org/3/movie/550?api_key=9ccd7d9e1cd5e20720ef9baade503f42
// For postman Credits       : https://api.themoviedb.org/3/movie/550/credits?api_key=9ccd7d9e1cd5e20720ef9baade503f42
// For postman Similar Movies: https://api.themoviedb.org/3/movie/550/similar?api_key=9ccd7d9e1cd5e20720ef9baade503f42
// For postman Trailer       : https://api.themoviedb.org/3/movie/550/videos?api_key=9ccd7d9e1cd5e20720ef9baade503f42
// For postman Actor         : https://api.themoviedb.org/3/person/819?api_key=9ccd7d9e1cd5e20720ef9baade503f42
// For postman Actor Movies  : https://api.themoviedb.org/3/person/819/movie_credits?api_key=9ccd7d9e1cd5e20720ef9baade503f42



//08/06/2021 05:45 PM

class App {
    static async run(para) {
        const movies = await APIService.fetchMovies(para)
        HomePage.renderMovies(movies);
    }
}


//-----------------Popular Actor Beginning-----------------
class AppPopularActor{
    static async run() {
        const actorpopular = await APIService.fetchPersonPopular()
        PopularActorPage.renderMovies(actorpopular);
    }
}
//-----------------Popular Actor End-----------------------




//-----------------Search Beginning-----------------
class AppSearch{
    static async run(searchVal){
        const search = await APIService.fetchSearch(searchVal)

        HomePage.renderMovies(search)
    }
}
//-----------------Search End-----------------------




//-----------------Genres Beginning-----------------
class AppGenres{
    static async run(){
        const search = await APIService.fetchGenres()
        GenresPage.renderGenres(search)
    }
}
//-----------------Genres End-----------------------


class APIService {
    static TMDB_BASE_URL = 'https://api.themoviedb.org/3';

    //-----------------Genres Beginning-----------------
    static async fetchGenres() {
        const url = APIService._constructUrl(`genre/movie/list`)
        const response = await fetch(url)
        const data = await response.json()

        return data.genres
    }
    //-----------------Genres End-----------------------



    //-----------------Search Beginning-----------------
    // &query=what
    static async fetchSearch(input) {
        const url = APIService._constructUrl(`search/movie`) + `&query=${input}`
        const response = await fetch(url)
        const data = await response.json()
        return data.results.map(movie => new Movie(movie))
    }
    //-----------------Search End-----------------------



    static async fetchMovies(para) {
        const url = APIService._constructUrl(`movie/${para}`)
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



    //-----------------Popular Actor Beginning-----------------
    static async fetchPersonPopular() {
        const url = APIService._constructUrl(`person/popular`)
        const response = await fetch(url)
        const data = await response.json()
        return data.results.map(actors => new PopularActor(actors))
    }
    //-----------------Popular Actor End-----------------------


    // SINGLEACTORPAGE
    //-----------------Actor Beginning-----------------
    static async fetchActor(personId){
        const url = APIService._constructUrl(`person/${personId}`)
        const response = await fetch(url)
        const data = await response.json()
        return new SingleActorPage(data)
    }

    static async fetchActorMovieCredit(personId){
        const url = APIService._constructUrl(`person/${personId}/movie_credits`)
        const response = await fetch(url)
        const data = await response.json()
        return data.cast.map(x => new SingleActorPageMovieCredit(x))
    }

    //-----------------Actor End-----------------------



    //-----------------Credits Beginning-----------------
    static async fetchActors(movie) {
        const url = APIService._constructUrl(`movie/${movie.id}/credits`)
        const response = await fetch(url)
        const data = await response.json()
        return data.cast.map(x => new Credit(x))
    }
    //-----------------Credits End-----------------------



    //-----------------CREW Beginning-----------------
    static async fetchCrew(movie) {
        const url = APIService._constructUrl(`movie/${movie.id}/credits`)
        const response = await fetch(url)
        const data = await response.json()
        return data.crew.map(x => new CreditCrew(x))
    }
    //-----------------CREW End-----------------------




    //-----------------Similar Beginning-----------------
    static async fetchSimilarMovies(movie) {
        const url = APIService._constructUrl(`movie/${movie.id}/similar`)
        const response = await fetch(url)
        const data = await response.json()
        return data.results.map(x => new Similar(x))
    }
    //-----------------Similar End-----------------------



    //-----------------Trailer Beginning-----------------
    static async fetchTrailer(movie) {
        const url = APIService._constructUrl(`movie/${movie.id}/videos`)
        const response = await fetch(url)
        const data = await response.json()
        return data.results.map(x => new Trailer(x))
    }
    //-----------------Trailer End-----------------------



    static _constructUrl(path) {
        return `${this.TMDB_BASE_URL}/${path}?api_key=${atob('NTQyMDAzOTE4NzY5ZGY1MDA4M2ExM2M0MTViYmM2MDI=')}`;
    }
}



//-----------------Search Beginning-----------------
const searchButton = document.getElementById("searchButtonId")
const searchInput = document.getElementById("searchInputId")

searchButton.addEventListener("click", function(e){
    e.preventDefault()
    AppSearch.run(searchInput.value)
    if(searchInput.value == ""){
        App.run('now_playing')
    }
    searchInput.value = ""
    //PROUD OF IT!
})
//-----------------Search End-----------------------



// SINGLEACTORPAGE
//-----------------SingleActor Beginning-----------------
class SingleActorPage{
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.id = json.id
        this.name = json.name
        this.gender = json.gender
        this.popularity = json.popularity
        this.birthday = json.birthday
        this.deathday = json.deathday
        this.biography = json.biography
        this.profile_path = json.profile_path
    }

    get backdropUrl() {
        return this.backdropPath ? SingleActorPage.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}


class SingleActorPageMovieCredit{
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.original_title = json.original_title
        this.poster_path = json.poster_path
        this.id = json.id
    }

    get backdropUrl() {
        return this.backdropPath ? SingleActorPageMovieCredit.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}
//-----------------SingleActor End-----------------------



//-----------------CreditCrew Beginning-----------------
class CreditCrew {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.name = json.name
        this.job = json.job
        
    }

    get backdropUrl() {
        return this.backdropPath ? CreditCrew.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}
//-----------------CreditCrew End-----------------------



//-----------------Credits Beginning-----------------
class Credit {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.castName = json.name
        this.character = json.character
        this.profile_path = json.profile_path
        this.id = json.id
    }

    get backdropUrl() {
        return this.backdropPath ? Credit.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}
//-----------------Credits End-----------------------



//-----------------Similar Beginning-----------------
class Similar {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.id = json.id
        this.original_title = json.original_title
        this.poster_path = json.poster_path
    }

    get backdropUrl() {
        return this.backdropPath ? Similar.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}
//-----------------Similar End-----------------------



//-----------------Trailer Beginning-----------------
class Trailer {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.key = json.key
    }

    get backdropUrl() {
        return this.backdropPath ? Trailer.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}
//-----------------Trailer End-----------------------



class Movie {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        
        this.id = json.id;
        this.title = json.title;
        this.releaseDate = json.release_date;
        this.runtime = json.runtime + " minutes";
        this.overview = json.overview;
        this.backdropPath = json.poster_path;

        // Added Parts
        this.language = json.original_language.toUpperCase()
        this.genres = json.genres
        this.vote_count = json.vote_count;
        this.vote_average = json.vote_average;
        this.production_companies = json.production_companies;
        this.genre_ids = json.genre_ids    
    }
    
    get backdropUrl() {
        return this.backdropPath ? Movie.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}



//-----------------Popular Actor Beginning-----------------
class PopularActor {
    static BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
    constructor(json) {
        this.profile_path = json.profile_path;
        this.id = json.id;
        this.name = json.name
    }

    get backdropUrl() {
        return this.backdropPath ? PopularActor.BACKDROP_BASE_URL + this.backdropPath : "";
    }
}


class PopularActorPage {
    static container = document.getElementById('container');
    static renderMovies(actors) {
        let BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780';
        this.container.innerHTML = " "
        actors.forEach(actor => {
            let urlActor = BACKDROP_BASE_URL + actor.profile_path
            const actorDiv = document.createElement("div");
            actorDiv.setAttribute("class", "popularActorDiv col-s-6 col-4")
            const actorImage = document.createElement("img");
            actorImage.src = `${urlActor}`;
            const actorTitle = document.createElement("h3");
            actorTitle.textContent = `${actor.name}`;
            actorImage.addEventListener("click", function() {
                Actor.run(actor.id);
            });

            const nestedDiv = document.createElement("div");
            nestedDiv.setAttribute("class", "nestedPopularActorDiv col-s-6 col-4")
            const brDiv = document.createElement("br");
            nestedDiv.appendChild(actorDiv)
            nestedDiv.appendChild(brDiv)

            actorDiv.appendChild(actorTitle);
            actorDiv.appendChild(actorImage);

            nestedDiv.appendChild(actorDiv)
            nestedDiv.appendChild(brDiv)

            this.container.appendChild(nestedDiv);
        })
    }
}
//-----------------Popular Actor End-----------------------



class HomePage {
    static container = document.getElementById('container');
    static renderMovies(movies) {
        this.container.innerHTML = " "
        movies.forEach(movie => {
            const movieDiv = document.createElement("div");
            const movieImage = document.createElement("img");
            movieDiv.setAttribute("class", "movieHomepageDiv")
            movieImage.src = `${movie.backdropUrl}`;
            movieImage.setAttribute("class", "movieImgHomepage")

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = `${movie.title}`;



            //Hover
            const hoverDiv = document.createElement("div")
            hoverDiv.setAttribute("class","hoverDetails")
            const hoverDivContent = document.createElement("p")
            


            //Kinda proud of it
            hoverDivContent.innerHTML = `
                <p>Overview: ${movie.overview.substr(0,100)}...</p>
                <span>Rating: ${movie.vote_average}</span>
            `
            hoverDiv.append(hoverDivContent)
                

            

            movieDiv.addEventListener("click", function() {
                Movies.run(movie);
            });
            const imageDiv = document.createElement("div")
            imageDiv.append(movieImage)

            const titleDiv = document.createElement("div")
            titleDiv.appendChild(movieTitle)

            const div = document.createElement("div");
            div.setAttribute("class","homepageMovieParentDiv")
            const brDiv = document.createElement("br");

            movieDiv.appendChild(imageDiv);
            movieDiv.appendChild(titleDiv);
            movieDiv.append(hoverDiv)
            movieDiv.appendChild(brDiv)

            this.container.appendChild(movieDiv);

        })


        //About us
        const aboutPage = document.getElementById("about")
        aboutPage.addEventListener("click", function(){
            container.innerHTML = `
                <h1>About</h1>
                
                <article id = "aboutArticle">
                    <p>Well, this is 04:43 AM. I just want to sleep. This is about page. My creativity just died. Yeah.</p>
                </article>
            `
        })
    }
}


// Difficult
// Hated rendering Part
class Movies {
    static async run(movie) {
        const movieData = await APIService.fetchMovie(movie.id)
        
        let fetchActorsVari = await APIService.fetchActors(movie)

        let fetchSimilarMovies = await APIService.fetchSimilarMovies(movie)

        let fetchTrailer = await APIService.fetchTrailer(movie)

        let fetchCrewVari = await APIService.fetchCrew(movie)

        MoviePage.renderMovieSection(movieData, fetchActorsVari, fetchSimilarMovies, fetchTrailer, fetchCrewVari);
    }
}

// SINGLEACTORPAGE
//-----------------Actor Beginning-----------------------
class Actor{
    static async run(actorid){
        let actorData = await APIService.fetchActor(actorid)

        let actorDataMovieCredit = await APIService.fetchActorMovieCredit(actorid)

        ActorInfoPage.renderSingleActorPage(actorData, actorDataMovieCredit)
    }
}

class ActorInfoPage{
    static container = document.getElementById('container');
    static renderSingleActorPage(actorInstance, actorMovie){
        const BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780'
        
        // Actor Pic
        let actorPicinSinglePage = BACKDROP_BASE_URL + actorInstance.profile_path


        // Gender
        let gender 
        if (actorInstance.gender == 2) {
            gender = "Male"
        }
        else{
            gender = "Female"
        }


        // Deathday
        let deathdayVari
        if(actorInstance.deathday == null){
            deathdayVari = "not dead yet lol"
        }
        else{
            deathdayVari = actorInstance.deathday
        }


        // ForLoop for ActorMovie
        let arrayForActorMovie = []
        for(let i = 0; i < actorMovie.length; i++){
            if(actorMovie[i].poster_path !== null){
                arrayForActorMovie.push(BACKDROP_BASE_URL + actorMovie[i].poster_path)
            }
        }

        const imgHTMLArray = []

        for(let i = 0; i < 5; i++){
            imgHTMLArray.push( `
            <div class = "actorAllMoviesPicinDiv">
                <img src="${arrayForActorMovie[i]}" alt="${actorMovie[i].poster_path}" width="35%" class = "actorAllMoviesPic"> 
            </div>
            `) 
        }




        container.innerHTML = `

        <div class="row overviewForTablet">
            <div class="col-md-4 col-xs-12 col-s-6 imageOneActor">
                <img id="movie-backdrop" src=${actorPicinSinglePage}> 
            </div>

            <div class="col-md-8 col-xs-12 col-s-6 overview">
                <h3>Overview:</h3>
                <p id="movie-name">Name: ${actorInstance.name}</p>
                <p id="movie-gender">Gender: ${gender}</p>
                <p id="movie-popularity">Popularity: ${actorInstance.popularity}</p>
                <p id="movie-date">Date: ${actorInstance.birthday} - ${deathdayVari}</p>
            </div>
         </div> 



        <div class="row">
            <div class="col-md-12 col-xs-12">
                <h3>Biography</h3>
                <div>
                    <p>${actorInstance.biography}</p>
                </div>
            </div>
        </div>  


        <div class="row">
            <div class="col-md-12 col-xs-12">
                <h3>A list of movies the actor participated in</h3>
                <div id = "movieClassinActorPage">
                   ${imgHTMLArray.join(' ')}
                </div>
            </div>
        </div>  
        
        
        `
        let moviePic = document.getElementsByClassName("actorAllMoviesPicinDiv")
        for(let i = 0; i < moviePic.length; i++){
            moviePic[i].addEventListener("click", function(){
                Movies.run(actorMovie[i])
            })
        }
        
    }
}
//-----------------Actor End-----------------------------

class MoviePage {
    static container = document.getElementById('container');
    static renderMovieSection(movie, credits, similar, trailer, crew) {
        MovieSection.renderMovie(movie, credits, similar, trailer, crew);
    }
    
}

class MovieSection { 
    static renderMovie(movie, credits, similar, trailer, crew) {
        const BACKDROP_BASE_URL = 'http://image.tmdb.org/t/p/w780'

        // ForLoop for Genres
        let arrayForGenres = []
        for(let i = 0; i < movie.genres.length ; i++){
            arrayForGenres.push(movie.genres[i].name)
        }

        // ForLoop for CastName
        let arrayForCastName = []
        let arrayForCastNamePic = []
        let arrayForCharacter = []
        for(let j = 0; j < 5; j++){
            arrayForCastName.push(credits[j].castName)
            arrayForCharacter.push(credits[j].character)
            arrayForCastNamePic.push(BACKDROP_BASE_URL + credits[j].profile_path)
        }

        let imgHTMLArray = []
        for(let o = 0; o < 5; o++){
            imgHTMLArray.push(`
            <div class = "castPicDiv">
                <img src="${arrayForCastNamePic[o]}" alt="${arrayForCastName[o]}" width="35%" class = "castPic"><span>${arrayForCastName[o]} as ${arrayForCharacter[o]}</span>
            </div>
            `)
        }





        // ForLoop for SimilarMovies
        let nameForSimilarMovies = []
        let imageForSimilarMovies = []
        for(let k = 0; k < 5; k++){
            nameForSimilarMovies.push(similar[k].original_title)
            imageForSimilarMovies.push(BACKDROP_BASE_URL + similar[k].poster_path)
        }
        
        let imageSimilarHTML = []
        
        for(let k = 0; k < 5; k++){
            imageSimilarHTML.push(`
            <div class = "similarMoviesDiv">
                <img src="${imageForSimilarMovies[k]}" alt="${nameForSimilarMovies[k]}" width="35%" class = "actorAllMoviesPic"><br><span>${nameForSimilarMovies[k]}</span>
            </div>
            `)
        }



        // Trailer
        let youtubeTrailer = `"https://www.youtube.com/embed/${trailer[0].key}"`

        // ForLoop for Crew
        let director
        for(let crewFor = 0; crewFor < crew.length; crewFor++){
            if(crew[crewFor].job == "Director"){
                director = crew[crewFor].name
            }
        }



        // Production Companies
        let arrayForProduction = []
        let nameForProduction = []
        for (let z = 0; z < movie.production_companies.length; z++){
            arrayForProduction.push(BACKDROP_BASE_URL + movie.production_companies[z].logo_path)
            nameForProduction.push(movie.production_companies[z].name)
        }

        let imageProductionHTML = []
        for(let pp = 0; pp < movie.production_companies.length; pp++){
            imageProductionHTML.push(`
            <div class = "productionCompDiv">
                <img src="${arrayForProduction[pp]}" alt="${nameForProduction[pp]}" width="35%" class = "productionCompDiv"><br><span>${nameForProduction[pp]}</span>
            </div>
            `)
        }

        




        MoviePage.container.innerHTML = `
      <div class="row overviewForTablet">
        <div class="col-md-6 col-sm-6 col-xs-12 col-s-6 imageOneMovie">
          <img id="movie-backdrop" src=${movie.backdropUrl}> 
        </div>

        <div class="col-md-6 col-sm-6 col-xs-12 col-s-6 overview">
          <h2 id="movie-title">${movie.title}</h2>
          <p id="genres">${arrayForGenres.join(" ")}</p>
          <p id="movie-release-date">${movie.releaseDate}</p>
          <p id="movie-runtime">${movie.runtime}</p>
          <p id="language">${movie.language}</p>
          <p id="movie-vote_average">Average Rate of Movie: ${movie.vote_average}</p>
          <p id="movie-vote_count">Vote Count: ${movie.vote_count}</p>
        </div>
      </div>


      <div class="row">
        <div class="col-md-12 col-xs-12">
            <h3>Overview:</h3>
            <p id="movie-overview">${movie.overview}</p>
        </div>
      </div> 

      <div class="row">
        <div class="col-md-12 col-xs-12 col-s-12 actorsInMovie">
            <h3>Actors</h3>
            <div id = "castInMovie">
                ${imgHTMLArray.join(' ')}
            </div>
        </div>
      </div>  

      <div class="row">
        <div class="col-md-12 col-xs-12 col-s-12 trailer">
            <h3>Trailer</h3>
            
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src=${youtubeTrailer} allowfullscreen></iframe>
          </div>
        </div>
      </div>  

      <div class="row">
        <div class="col-md-12 col-xs-12">
            <h3 style = "text-align:center;">Similar Movies</h3>
            <div class = "similarMovies">
                ${imageSimilarHTML.join(' ')}
            </div>
        </div>
      </div>  

      <div class="row">
        <div class="col-md-12 col-xs-12">
            <h3>Director</h3>
            <span>${director}</span>
        </div>
      </div>  

      <div class="row">
        <div class="col-md-12 col-xs-12 productionCompMain">
            <h3>Production Companies</h3>
            <div id = "productionCompDiv">
                ${imageProductionHTML.join(' ')}
            </div>
        </div>
      </div>  
    `;

    let actorPic = document.getElementsByClassName("castPic")
    for(let p = 0; p < actorPic.length; p++){
        actorPic[p].addEventListener("click", function(){
            Actor.run(credits[p].id)
        })
    }

    let actorAllMoviesPicinClass = document.getElementsByClassName("actorAllMoviesPic")
    for(let i = 0; i < actorAllMoviesPicinClass.length; i++){
        actorAllMoviesPicinClass[i].addEventListener("click", function(){

            Movies.run(similar[i])
        })
    }
    }

    
}





document.addEventListener("DOMContentLoaded",() => App.run('now_playing'));



const genresFilter = document.getElementsByClassName("dropdown-item")
for(let i = 0; i < genresFilter.length; i++){
    genresFilter[i].addEventListener('click', function(){
      document.getElementById('container').innerHTML = "";
        
      const genreMovies = async function (){ 
        const genresList = await APIService.fetchGenres();
        const specificGenre = genresList[i].id;
        const allMovieList = await APIService.fetchMovies(`now_playing`);
        const result = await allMovieList.filter(movie => movie.genre_ids.includes(specificGenre));
        HomePage.renderMovies(result);
      }();
    });
  }