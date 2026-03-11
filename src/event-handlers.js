import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js"; 
import { renderArena } from "./arena.js";
import { Player } from "./classes.js";
import destroyer from './assets/sprites/Destroyer/ShipDestroyerHull.png'
import horizontalDestroyer from './assets/sprites/Destroyer/ShipDestroyerHullHorizontal.png'
import submarine from './assets/sprites/Submarine/ShipSubMarineHull.png'
import horizontalSubmarine from './assets/sprites/Submarine/ShipSubMarineHullHorizontal.png'
import cruiser from './assets/sprites/Cruiser/ShipCruiserHull.png'
import horizontalCruiser from './assets/sprites/Cruiser/ShipCruiserHullHorizontal.png'
import battleship from './assets/sprites/Battleship/ShipBattleshipHull.png'
import horizontalBattleship from './assets/sprites/Battleship/ShipBattleshipHullHorizontal.png'
import carrier from './assets/sprites/Carrier/ShipCarrierHull.png'
import horizontalCarrier from './assets/sprites/Carrier/ShipCarrierHullHorizontal.png'
import rightArrow from './assets/SVGs/right-arrow-button-icon.svg'
export { addLandingPageHandlers, addBoardSetuphandlers, player, playersGameboard };

let player;
let playersGameboard;

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
  let isCruiserPlaced = false;
  let isBattleshipPlaced = false;
  let isCarrierPlaced = false;
  const fightButton = document.querySelector('body.board-setup > div:nth-child(3) > button');
  document.querySelector('html').addEventListener('keydown', (event) => {
    if(event.key == 'ArrowRight') {
      orientation = (orientation == 'vertical') ? 'horizontal' : 'vertical';
    }
    console.log(orientation);
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 6)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {     
      if(!isDestroyerPlaced) {
        currentShip = 'destroyer';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        if(orientation == 'vertical') {
          document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer shown');
          document.querySelector('body > img:nth-child(4)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(4)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(4)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isDestroyerPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal');
                  document.querySelector('body > img:nth-child(9)').style.display = 'none';
                  document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer shown');
                  document.querySelector('body > img:nth-child(4)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(4)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(4)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer');
                  document.querySelector('body > img:nth-child(4)').style.display = 'none';
                  document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal shown');
                  document.querySelector('body > img:nth-child(9)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(9)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(9)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
        if(orientation == 'horizontal') {
          document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal shown');
          document.querySelector('body > img:nth-child(9)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(9)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(9)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isDestroyerPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal');
                  document.querySelector('body > img:nth-child(9)').style.display = 'none';
                  document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer shown');
                  document.querySelector('body > img:nth-child(4)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(4)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(4)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer');
                  document.querySelector('body > img:nth-child(4)').style.display = 'none';
                  document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal shown');
                  document.querySelector('body > img:nth-child(9)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(9)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(9)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
      }
    })
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 12)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {
      if(!isSubmarinePlaced) {
        currentShip = 'submarine';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        if(orientation == 'vertical') {
          document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine shown');
          document.querySelector('body > img:nth-child(5)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(5)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(5)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isSubmarinePlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal');
                  document.querySelector('body > img:nth-child(10)').style.display = 'none';
                  document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine shown');
                  document.querySelector('body > img:nth-child(5)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(5)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(5)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine');
                  document.querySelector('body > img:nth-child(5)').style.display = 'none';
                  document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal shown');
                  document.querySelector('body > img:nth-child(10)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(10)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(10)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
        if(orientation == 'horizontal') {
          document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal shown');
          document.querySelector('body > img:nth-child(10)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(10)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(10)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isSubmarinePlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal');
                  document.querySelector('body > img:nth-child(10)').style.display = 'none';
                  document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine shown');
                  document.querySelector('body > img:nth-child(5)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(5)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(5)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine');
                  document.querySelector('body > img:nth-child(5)').style.display = 'none';
                  document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal shown');
                  document.querySelector('body > img:nth-child(10)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(10)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(10)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
      }
    })
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 13)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {
      if(!isCruiserPlaced) {
        currentShip = 'cruiser';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        if(orientation == 'vertical') {
          document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser shown');
          document.querySelector('body > img:nth-child(6)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(6)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(6)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isCruiserPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal');
                  document.querySelector('body > img:nth-child(11)').style.display = 'none';
                  document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser shown');
                  document.querySelector('body > img:nth-child(6)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(6)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(6)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser');
                  document.querySelector('body > img:nth-child(6)').style.display = 'none';
                  document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal shown');
                  document.querySelector('body > img:nth-child(11)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(11)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(11)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
        if(orientation == 'horizontal') {
          document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal shown');
          document.querySelector('body > img:nth-child(11)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(11)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(11)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isCruiserPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal');
                  document.querySelector('body > img:nth-child(11)').style.display = 'none';
                  document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser shown');
                  document.querySelector('body > img:nth-child(6)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(6)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(6)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser');
                  document.querySelector('body > img:nth-child(6)').style.display = 'none';
                  document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal shown');
                  document.querySelector('body > img:nth-child(11)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(11)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(11)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
      }
    })
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 19)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {
      if(!isBattleshipPlaced) {
        currentShip = 'battleship';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        if(orientation == 'vertical') {
          document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship shown');
          document.querySelector('body > img:nth-child(7)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(7)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(7)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isBattleshipPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal');
                  document.querySelector('body > img:nth-child(12)').style.display = 'none';
                  document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship shown');
                  document.querySelector('body > img:nth-child(7)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(7)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(7)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship');
                  document.querySelector('body > img:nth-child(7)').style.display = 'none';
                  document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal shown');
                  document.querySelector('body > img:nth-child(12)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(12)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(12)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
        if(orientation == 'horizontal') {
          document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal shown');
          document.querySelector('body > img:nth-child(12)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(12)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(12)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isBattleshipPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal');
                  document.querySelector('body > img:nth-child(12)').style.display = 'none';
                  document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship shown');
                  document.querySelector('body > img:nth-child(7)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(7)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(7)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship');
                  document.querySelector('body > img:nth-child(7)').style.display = 'none';
                  document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal shown');
                  document.querySelector('body > img:nth-child(12)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(12)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(12)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
      }
    })
  })

  document.querySelectorAll('div#quay > div:nth-child(-5n + 25)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', (eventOuter) => {
      if(!isCarrierPlaced) {
        currentShip = 'carrier';
        if(nodeList[0].hasChildNodes()) nodeList[0].removeChild(nodeList[0].firstChild);
        document.body.style.cursor = 'none';
        if(orientation == 'vertical') {
          document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier shown');
          document.querySelector('body > img:nth-child(8)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(8)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(8)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isCarrierPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal');
                  document.querySelector('body > img:nth-child(13)').style.display = 'none';
                  document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier shown');
                  document.querySelector('body > img:nth-child(8)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(8)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(8)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier');
                  document.querySelector('body > img:nth-child(8)').style.display = 'none';
                  document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal shown');
                  document.querySelector('body > img:nth-child(13)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(13)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(13)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
        if(orientation == 'horizontal') {
          document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal shown');
          document.querySelector('body > img:nth-child(13)').style.left = `${eventOuter.clientX - 5}px`;
          document.querySelector('body > img:nth-child(13)').style.top = `${eventOuter.clientY - 5}px`;
          document.querySelector('body > img:nth-child(13)').style.display = 'block';
          document.addEventListener('mousemove', (event) => {
            if(!isCarrierPlaced) {
              switch(orientation) {
                case 'vertical':
                  document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal');
                  document.querySelector('body > img:nth-child(13)').style.display = 'none';
                  document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier shown');
                  document.querySelector('body > img:nth-child(8)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(8)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(8)').style.display = 'block';
                  break;
                case 'horizontal':
                  document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier');
                  document.querySelector('body > img:nth-child(8)').style.display = 'none';
                  document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal shown');
                  document.querySelector('body > img:nth-child(13)').style.left = `${event.clientX - 5}px`;
                  document.querySelector('body > img:nth-child(13)').style.top = `${event.clientY - 5}px`;
                  document.querySelector('body > img:nth-child(13)').style.display = 'block';   
                  break;            
              }
            }
          })
        }
      }
    })
  })

  document.querySelectorAll('div.gameboard > div:not(.letters):not(.numbers)').forEach((square, index, nodeList) => {
    square.addEventListener('mousedown', () => {
      switch(currentShip) {
        case 'destroyer':
            const placeDestroyerReturnValue = player.board.placeShip(index, player.board.destroyer, orientation);
            if(placeDestroyerReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = orientation == 'vertical' ? destroyer : horizontalDestroyer;
              if(orientation == 'vertical') nodeList[index].setAttribute('class', 'vertical destroyer');
              if(orientation == 'horizontal') nodeList[index].setAttribute('class', 'horizontal destroyer');
              document.querySelector('body > img.shown').style.display = 'none';
              if(orientation == 'vertical') document.querySelector('body > img.shown').setAttribute('class', 'cursor-destroyer');
              if(orientation == 'horizontal') document.querySelector('body > img.shown').setAttribute('class', 'cursor-destroyer horizontal');
              document.body.style.cursor = 'auto';
              isDestroyerPlaced = true;
              if(isDestroyerPlaced && isSubmarinePlaced && isCruiserPlaced && isBattleshipPlaced && isCarrierPlaced) {
                fightButton.setAttribute('class', 'valid');
              }
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
        case 'submarine':
            const placeSubmarineReturnValue = player.board.placeShip(index, player.board.submarine, orientation);
            if(placeSubmarineReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = orientation == 'vertical' ? submarine : horizontalSubmarine;
              if(orientation == 'vertical') nodeList[index].setAttribute('class', 'vertical submarine');
              if(orientation == 'horizontal') nodeList[index].setAttribute('class', 'horizontal submarine');
              document.querySelector('body > img.shown').style.display = 'none';
              if(orientation == 'vertical') document.querySelector('body > img.shown').setAttribute('class', 'cursor-submarine');
              if(orientation == 'horizontal') document.querySelector('body > img.shown').setAttribute('class', 'cursor-submarine horizontal');
              document.body.style.cursor = 'auto';
              isSubmarinePlaced = true;
              if(isDestroyerPlaced && isSubmarinePlaced && isCruiserPlaced && isBattleshipPlaced && isCarrierPlaced) {
                fightButton.setAttribute('class', 'valid');
              }
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
        case 'cruiser':
            const placeCruiserReturnValue = player.board.placeShip(index, player.board.cruiser, orientation);
            if(placeCruiserReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = orientation == 'vertical' ? cruiser : horizontalCruiser;
              if(orientation == 'vertical') nodeList[index].setAttribute('class', 'vertical cruiser');
              if(orientation == 'horizontal') nodeList[index].setAttribute('class', 'horizontal cruiser');
              document.querySelector('body > img.shown').style.display = 'none';
              if(orientation == 'vertical') document.querySelector('body > img.shown').setAttribute('class', 'cursor-cruiser');
              if(orientation == 'horizontal') document.querySelector('body > img.shown').setAttribute('class', 'cursor-cruiser horizontal');
              document.body.style.cursor = 'auto';
              isCruiserPlaced = true;
              if(isDestroyerPlaced && isSubmarinePlaced && isCruiserPlaced && isBattleshipPlaced && isCarrierPlaced) {
                fightButton.setAttribute('class', 'valid');
              }
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
        case 'battleship':
            const placeBattleshipReturnValue = player.board.placeShip(index, player.board.battleship, orientation);
            if(placeBattleshipReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = orientation == 'vertical' ? battleship : horizontalBattleship;
              if(orientation == 'vertical') nodeList[index].setAttribute('class', 'vertical battleship');
              if(orientation == 'horizontal') nodeList[index].setAttribute('class', 'horizontal battleship');
              document.querySelector('body > img.shown').style.display = 'none';
              if(orientation == 'vertical') document.querySelector('body > img.shown').setAttribute('class', 'cursor-battleship');
              if(orientation == 'horizontal') document.querySelector('body > img.shown').setAttribute('class', 'cursor-battleship horizontal');
              document.body.style.cursor = 'auto';
              isBattleshipPlaced = true;
              if(isDestroyerPlaced && isSubmarinePlaced && isCruiserPlaced && isBattleshipPlaced && isCarrierPlaced) {
                fightButton.setAttribute('class', 'valid');
              }
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
        case 'carrier':
            const placeCarrierReturnValue = player.board.placeShip(index, player.board.carrier, orientation);
            if(placeCarrierReturnValue) {
              currentShip = '';
              square.appendChild(document.createElement('img'));
              nodeList[index].firstChild.src = orientation == 'vertical' ? carrier : horizontalCarrier;
              if(orientation == 'vertical') nodeList[index].setAttribute('class', 'vertical carrier');
              if(orientation == 'horizontal') nodeList[index].setAttribute('class', 'horizontal carrier');
              document.querySelector('body > img.shown').style.display = 'none';
              if(orientation == 'vertical') document.querySelector('body > img.shown').setAttribute('class', 'cursor-carrier');
              if(orientation == 'horizontal') document.querySelector('body > img.shown').setAttribute('class', 'cursor-carrier horizontal');
              document.body.style.cursor = 'auto';
              isCarrierPlaced = true;
              if(isDestroyerPlaced && isSubmarinePlaced && isCruiserPlaced && isBattleshipPlaced && isCarrierPlaced) {
                fightButton.setAttribute('class', 'valid');
              }
          }
          console.log(player.board.grid);
          console.log(nodeList);
          break;
      }
    })
  })

  fightButton.addEventListener('click', () => {
    if(fightButton.className == 'valid') {
      playersGameboard = document.querySelector('div.gameboard').cloneNode(true);
      renderArena();
      console.log(player.board);
    }
  })
}