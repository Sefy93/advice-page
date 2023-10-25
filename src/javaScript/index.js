const url = "https://api.adviceslip.com/advice";

function newAdvice() {
  let adviceText = document.querySelector("p");
  let adviceTitle = document.querySelector(".advice");
  adviceTitle.innerText = "";
  adviceText.innerText = "LOADING ADVICE";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      adviceTitle.innerText = "ADVICE #" + data.slip.id;

      adviceText.innerText = '"' + data.slip.advice + '"';
    });
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", newAdvice);

newAdvice();
