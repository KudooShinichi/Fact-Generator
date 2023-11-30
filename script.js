const btnEl = document.getElementById("btn");
const FactEl = document.getElementById("fact");

const apiKey = "ate9zErZKWtAv0lk0p84NA==8tDa4kgtcb6sjAQx";
const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/facts?limit=1";

async function getFact() {
  try {
    FactEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, option);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    FactEl.innerText = data[0].fact;
  } catch (error) {
    FactEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a fact";
    console.log(error);
  }
}
btnEl.addEventListener("click", getFact);
