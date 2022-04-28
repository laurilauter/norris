document.addEventListener("DOMContentLoaded", () => {
  //fetch a fact
  async function loadJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then(
        (data) =>
          (document.getElementById("joke-holder").innerHTML = data.value)
      );
    document.getElementById("joke-holder").classList.add("fade");
  }

  //  add listeners to button
  document
    .getElementById("chuck-button")
    .addEventListener("click", (response) => {
      response.preventDefault();
      document.getElementById("joke-holder").classList.remove("fade");
      loadJoke();
    });
});
