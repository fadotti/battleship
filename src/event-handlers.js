import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js"; 
import { renderArena } from "./arena.js";
export { addLandingPageHandlers, addBoardSetuphandlers, playerName };

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
      addBoardSetuphandlers();
    }
  })
}

function addBoardSetuphandlers() {
  let currentShip = '';
  document.querySelectorAll('div#quay > div:nth-child(-5n + 6)').forEach((square, index, nodeList) => {
    if(currentShip == '') {
      currentShip = 'destroyer';
      square.addEventListener('click', () => {
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        document.addEventListener('mousemove', (event) => {
          document.querySelector('body > img:nth-child(4)').style.display = 'block';
          document.querySelector('body > img:nth-child(4)').style.left = `${event.clientX - 5}px`;
          console.log(event.clientX, event.clientY);
          document.querySelector('body > img:nth-child(4)').style.top = `${event.clientY - 5}px`;
        })
      })
    }
  })
}