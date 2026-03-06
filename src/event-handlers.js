export { addLandingPageHandlers }

function addLandingPageHandlers() {
  const playerName = document.querySelector('body > div:nth-child(2) > input');
  const startButton = document.querySelector('body > div:nth-child(3) > button');
  playerName.addEventListener('keyup', () => {
    switch (playerName.checkValidity()) {
      case true:
        startButton.setAttribute('class', 'valid');
        break;
      default:
        startButton.removeAttribute('class');
    }
  })
}