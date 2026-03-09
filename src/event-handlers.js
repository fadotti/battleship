import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js"; 
import { renderArena } from "./arena.js";
import { Player } from "./classes.js";
import destroyer from './assets/sprites/Destroyer/ShipDestroyerHull.png'
import submarine from './assets/sprites/Submarine/ShipSubMarineHull.png'
import cruiser from './assets/sprites/Cruiser/ShipCruiserHull.png'
import battleship from './assets/sprites/Battleship/ShipBattleshipHull.png'
import carrier from './assets/sprites/Carrier/ShipCarrierHull.png'
import rightArrow from './assets/SVGs/right-arrow-button-icon.svg'
export { addLandingPageHandlers, addBoardSetuphandlers, player };

let player;

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
      player = new Player('human', playerNameInput.value);
      renderBoardSetup();
      addBoardSetuphandlers();
    }
  })
}

function addBoardSetuphandlers() {
  let currentShip = '';
  let orientation = 'vertical';
  let isDestroyerPlaced = false;
  let isSubmarinePlaced = false;
  document.querySelectorAll('div#quay > div:nth-child(-5n + 6)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {     
      if(!isDestroyerPlaced){
        currentShip = 'destroyer';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer shown');
        document.querySelector('body > img:nth-child(4)').style.left = `${eventOuter.clientX - 5}px`;
        document.querySelector('body > img:nth-child(4)').style.top = `${eventOuter.clientY - 5}px`;
        document.querySelector('body > img:nth-child(4)').style.display = 'block';
        document.addEventListener('mousemove', (event) => {
          document.querySelector('body > img:nth-child(4)').style.left = `${event.clientX - 5}px`;
          document.querySelector('body > img:nth-child(4)').style.top = `${event.clientY - 5}px`;
        })
      }
    })
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 12)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {
      if(!isSubmarinePlaced) {
        currentShip = 'submarine';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine shown');
        document.querySelector('body > img:nth-child(5)').style.left = `${eventOuter.clientX - 5}px`;
        console.log(eventOuter.clientX);
        document.querySelector('body > img:nth-child(5)').style.top = `${eventOuter.clientY - 5}px`;
        document.querySelector('body > img:nth-child(5)').style.display = 'block';
        document.addEventListener('mousemove', (event) => {
          document.querySelector('body > img:nth-child(5)').style.left = `${event.clientX - 5}px`;
          document.querySelector('body > img:nth-child(5)').style.top = `${event.clientY - 5}px`;
        })
      }
    })
  })

  document.querySelectorAll('div.gameboard > div:not(.letters):not(.numbers)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', () => {
      switch(currentShip) {
        case 'destroyer':
            const placeDestroyerReturnValue = player.board.placeShip(index, player.board.destroyer, 'vertical');
            console.log(placeDestroyerReturnValue);
            if(placeDestroyerReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = destroyer;
              nodeList[index].setAttribute('class', 'vertical destroyer');
              document.querySelector('body > img.shown').style.display = 'none';
              document.querySelector('body > img.shown').setAttribute('class', 'cursor-destroyer');
              document.body.style.cursor = 'auto';
              isDestroyerPlaced = true;
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
        case 'submarine':
            const placeSubmarineReturnValue = player.board.placeShip(index, player.board.submarine, 'vertical');
            console.log(placeSubmarineReturnValue);
            if(placeSubmarineReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = submarine;
              nodeList[index].setAttribute('class', 'vertical submarine');
              document.querySelector('body > img.shown').style.display = 'none';
              document.querySelector('body > img.shown').setAttribute('class', 'cursor-submarine');
              document.body.style.cursor = 'auto';
              isSubmarinePlaced = true;
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
      }
    })
  })
}