const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b71f9080e57db089f5871e83e1d5ed2&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=4b71f9080e57db089f5871e83e1d5ed2&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h4>${title}</h4>
        <h3>Overview</h3>
        ${overview}
    </div>
    `;

    main.appendChild(movieDiv);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
