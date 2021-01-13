document.addEventListener("DOMContentLoaded", () => {
  // Card options
  const cardArray = [
    {
      name: "pikachu",
      img: "images/025.png",
    },
    {
      name: "pikachu",
      img: "images/025.png",
    },
    {
      name: "jigglypuff",
      img: "images/039.png",
    },
    {
      name: "jigglypuff",
      img: "images/039.png",
    },
    {
      name: "ekans",
      img: "images/023.png",
    },
    {
      name: "ekans",
      img: "images/023.png",
    },
    {
      name: "meowth",
      img: "images/052.png",
    },
    {
      name: "meowth",
      img: "images/052.png",
    },
    {
      name: "oddish",
      img: "images/043.png",
    },
    {
      name: "oddish",
      img: "images/043.png",
    },
    {
      name: "eevee",
      img: "images/133.png",
    },
    {
      name: "eevee",
      img: "images/133.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // Create game board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/pokemon.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/pokemon.png");
      cards[optionTwoId].setAttribute("src", "images/pokemon.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/pokemon.png");
      cards[optionTwoId].setAttribute("src", "images/pokemon.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //Flip cards
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
