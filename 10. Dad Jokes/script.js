const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const result = await fetch("https://icanhazdadjoke.com", config);
  const data = await result.json();

  jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke);
