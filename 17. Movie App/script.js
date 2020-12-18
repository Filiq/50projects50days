let page = 1;
let API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b71f9080e57db089f5871e83e1d5ed2&page=${page}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=4b71f9080e57db089f5871e83e1d5ed2&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
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
    <img src="${IMG_PATH + poster_path}" alt="${title} (image is missing)">
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
  window.searchTerm = search.value;
  search.value = "";
  search.classList.add("searched");
  if (searchTerm && searchTerm !== "") {
    page = 1;
    getMovies(SEARCH_URL + searchTerm + "&" + page);
  } else {
    window.location.reload();
  }
});

previous.addEventListener("click", () => {
  if (page > 1) {
    page--;
    if (search.classList.contains("searched")) {
      getMovies(SEARCH_URL + searchTerm + "&page=" + page);
    } else {
      API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b71f9080e57db089f5871e83e1d5ed2&page=${page}`;
      getMovies(API_URL);
    }
  } else {
    page = 1;
  }
});

next.addEventListener("click", () => {
  page++;
  if (search.classList.contains("searched")) {
    getMovies(SEARCH_URL + searchTerm + "&page=" + page);
    console.log(searchTerm);
  } else {
    API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4b71f9080e57db089f5871e83e1d5ed2&page=${page}`;
    getMovies(API_URL);
  }
});
