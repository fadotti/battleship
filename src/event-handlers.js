import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js"; 
import { renderArena } from "./arena.js";
export { addLandingPageHandlers, playerName };

let playerName;

function addLandingPageHandlers() {
  const playerNameInput = document.querySelector('body > div:nth-child(2) > input');
  const startButton = document.querySelector('body > div:nth-child(3) > button');
  playerNameInput.addEventListener('keyup', () => {
    playerNameInput.setCustomValidity('');
    switch (playerNameInput.checkValidity()) {
      case true:
        startButton.setAttribute('class', 'valid');
        break;
      default:
        startButton.removeAttribute('class');
    }
  })

  startButton.addEventListener('click', () => {
    if(!playerNameInput.checkValidity()) {
      playerNameInput.setCustomValidity('Player names must: \n -Contain only upper or lower case letters. \n -Have a length that ranges between 3 and 12 characters.');
      playerNameInput.reportValidity();
    } else {
      playerName = playerNameInput.value;
      renderBoardSetup();
    }
  })
}