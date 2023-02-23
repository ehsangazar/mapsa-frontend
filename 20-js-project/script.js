let time = 0;
let interval;

const countUp = () => {
  time++;
  document.getElementById("countdown").innerHTML = time;
};

const autoCountUp = () => {
  interval = setInterval(() => {
    countUp();
  }, 1000);
};

document.getElementById("start").addEventListener("click", () => {
  autoCountUp();
  console.log("start clicked");
});

document.getElementById("stop").addEventListener("click", () => {
  console.log("stop clicked");
  clearInterval(interval);
});

// rock paper scisoor

const firstPlayer = "";
document.getElementById("rock").addEventListener("click", () => {
  firstPlayer = "rock";
});

// computer random
// const computerPlayer = Math.random() => 'rock'

// Flash Card
const cards = [];
document.getElementById("addCard").addEventListener("click", () => {
  const newCard = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
  };
  cards.push(newCard);

  let cardsHTML = "";
  cards.forEach((card) => {
    // "" '' ``
    cardsHTML += `<div class="card">${card.title}</div>`;
  });
  console.log("cardsHTML", cardsHTML);
  document.getElementById("cards").innerHTML = cardsHTML;
});
