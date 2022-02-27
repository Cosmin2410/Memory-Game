let buttonRmv = document.querySelectorAll('button');
for (let i = 0; i < buttonRmv.length; i++) {
  buttonRmv[i].addEventListener('click', removeCard);

  function removeCard(e) {
    buttonRmv[i].style.display = 'none';
  }
}
