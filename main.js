let cards = document.querySelectorAll('.memory-card');

cards.forEach((card) => card.addEventListener('click', flipCard));

function flipCard(e) {
  this.classList.toggle('flip');
}
