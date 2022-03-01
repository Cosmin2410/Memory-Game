const cards = document.querySelectorAll('.memory-card');

let firstCard;
let secondCard;
cardFliped = false;
let lockBoard = false;

function flipCard(e) {
  if (lockBoard) return;
  if (firstCard === this) return;
  this.classList.add('flip');

  if (!cardFliped) {
    // first click
    cardFliped = true;
    firstCard = this;
  } else {
    // second click
    cardFliped = false;
    secondCard = this;
    // If the cards match run this
    if (firstCard.dataset.item === secondCard.dataset.item) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    }
    // if the cards dont match run this
    else {
      lockBoard = true;

      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
      }, 900);
    }
  }
}

cards.forEach((card) => card.addEventListener('click', flipCard));

(function shuffle() {
  cards.forEach((card) => {
    let randomNum = Math.floor(Math.random() * 12);
    card.style.order = randomNum;
  });
})();
