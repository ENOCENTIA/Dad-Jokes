const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "5gSSzNJuqUm8YQXieR0/qw==5w2aMpyAnS2ff2rp"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try { 
        jokeEl.innerText = "loading...";
        btnEl.disabled = true;
        btnEl.innerText = "loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Let me tell you a dad joke";

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "Error occured,please try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Let me tell you a dad joke";
        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);