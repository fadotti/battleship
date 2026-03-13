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
import attackIconBlue from './assets/SVGs/sword-cross-blue.svg'
import attackIconRed from './assets/SVGs/sword-cross-red.svg'
import cannonball from './assets/sound/freesound_community-cannonball-89596.mp3'
import splash from './assets/sound/freesound_community-splash_2-98207-[AudioTrimmer.com].mp3'
import hit from './assets/sound/soundreality-hit-windy-thud-399086-[AudioTrimmer.com].mp3'
import { player, playersBoard } from './event-handlers.js'
import { Player } from './classes.js'
export { renderArena }

function renderArena() {
  const body = document.querySelector('body');
  body.replaceChildren([]);
  body.removeAttribute('class');
  body.setAttribute('class', 'arena');

  const div = document.createElement('div');

  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));

  document.querySelector('body > div:nth-child(1)').setAttribute('id', 'arena-header');

  document.querySelector('body > div:nth-child(2)').setAttribute('id', 'arena-gameboards');

  document.querySelector('body > div:nth-child(3)').setAttribute('id', 'game-flow-text');



  document.querySelector('div#arena-header').appendChild(div.cloneNode(true));

  document.querySelector('div#arena-header > div').appendChild(div.cloneNode(true));
  document.querySelector('div#arena-header > div').appendChild(div.cloneNode(true));
  document.querySelector('div#arena-header > div').appendChild(div.cloneNode(true));

  document.querySelector('div#arena-header > div > div:nth-child(1)').textContent = player.name;
  document.querySelector('div#arena-header > div > div:nth-child(2)').setAttribute('class', 'center');
  document.querySelector('div#arena-header > div > div:nth-child(3)').textContent = 'COMPUTER';

  document.querySelector('div#arena-header > div > div:nth-child(2)').appendChild(div.cloneNode(true));
  document.querySelector('div#arena-header > div > div:nth-child(2) > div').textContent = 'VS';



  document.querySelector('div#arena-gameboards').appendChild(playersBoard);
  document.querySelector('div#arena-gameboards').appendChild(div.cloneNode(true));

  document.querySelector('div#arena-gameboards > div:nth-child(2)').setAttribute('class', 'gameboard');

  for(let i = 1; i <= 102; i++) {
    document.querySelector('div.gameboard:nth-child(2)').appendChild(div.cloneNode(true));
    if(i > 1) {
      document.querySelector('div.gameboard:nth-child(2) > div:last-child').setAttribute('class', 'hidden');
    }
  }

  document.querySelector('div.gameboard:nth-child(2) > div:nth-child(1)')
    .setAttribute('class', 'letters');
  document.querySelector('div.gameboard:nth-child(2) > div:nth-child(2)')
    .setAttribute('class', 'numbers');

  for(let i = 0; i < 11; i++) {
    document.querySelector('div.gameboard:nth-child(2) div.letters').appendChild(div.cloneNode(true));
  }

  for(let i = 0; i < 10; i++) {
    document.querySelector('div.gameboard:nth-child(2) div.numbers').appendChild(div.cloneNode(true));
  }

  document.querySelectorAll('div.gameboard:nth-child(2) .letters > div').forEach((element, index) => {
    const utfBaseline = 64;
    if(index > 0) {
      element.textContent = String.fromCharCode(utfBaseline + index);
    }
  })

  document.querySelectorAll('div.gameboard:nth-child(2) .numbers > div').forEach((element, index) => {
    element.textContent = `${index + 1}`;
  })

  document.querySelector('div#game-flow-text').textContent = "It's your turn to attack: click an enemy square";

  const computer = new Player(0, 'computer');
  let orientation;
  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';
  let isDestroyerPlaced = false;
  let isSubmarinePlaced = false;
  let isCruiserPlaced = false;
  let isBattleshipPlaced = false;
  let isCarrierPlaced = false;

  const computerGameboard = document.querySelectorAll('div#arena-gameboards > div.gameboard:nth-child(2) > div:not(.letters):not(.numbers)');
  const playersGameboard = document.querySelectorAll('div#arena-gameboards > div.gameboard:nth-child(1) > div:not(.letters):not(.numbers)');

  while(!isDestroyerPlaced) {
    const placeShipAtIndex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtIndex, computer.board.destroyer, orientation);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtIndex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtIndex].firstChild.src = orientation == 'vertical' ? destroyer : horizontalDestroyer;
      if(orientation == 'vertical') computerGameboard[placeShipAtIndex].setAttribute('class', 'vertical destroyer hidden');
      if(orientation == 'horizontal') computerGameboard[placeShipAtIndex].setAttribute('class', 'horizontal destroyer hidden');
      isDestroyerPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isSubmarinePlaced) {
    const placeShipAtIndex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtIndex, computer.board.submarine, orientation);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtIndex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtIndex].firstChild.src = orientation == 'vertical' ? submarine : horizontalSubmarine;
      if(orientation == 'vertical') computerGameboard[placeShipAtIndex].setAttribute('class', 'vertical submarine hidden');
      if(orientation == 'horizontal') computerGameboard[placeShipAtIndex].setAttribute('class', 'horizontal submarine hidden');
      isSubmarinePlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isCruiserPlaced) {
    const placeShipAtIndex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtIndex, computer.board.cruiser, orientation);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtIndex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtIndex].firstChild.src = orientation == 'vertical' ? cruiser : horizontalCruiser;
      if(orientation == 'vertical') computerGameboard[placeShipAtIndex].setAttribute('class', 'vertical cruiser hidden');
      if(orientation == 'horizontal') computerGameboard[placeShipAtIndex].setAttribute('class', 'horizontal cruiser hidden');
      isCruiserPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isBattleshipPlaced) {
    const placeShipAtIndex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtIndex, computer.board.battleship, orientation);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtIndex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtIndex].firstChild.src = orientation == 'vertical' ? battleship : horizontalBattleship;
      if(orientation == 'vertical') computerGameboard[placeShipAtIndex].setAttribute('class', 'vertical battleship hidden');
      if(orientation == 'horizontal') computerGameboard[placeShipAtIndex].setAttribute('class', 'horizontal battleship hidden');
      isBattleshipPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isCarrierPlaced) {
    const placeShipAtIndex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtIndex, computer.board.carrier, orientation);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtIndex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtIndex].firstChild.src = orientation == 'vertical' ? carrier : horizontalCarrier;
      if(orientation == 'vertical') computerGameboard[placeShipAtIndex].setAttribute('class', 'vertical carrier hidden');
      if(orientation == 'horizontal') computerGameboard[placeShipAtIndex].setAttribute('class', 'horizontal carrier hidden');
      isCarrierPlaced = true;
    }
  }

  let currentTurn = 'player';
  const attackSound = new Audio(cannonball);
  const hitSound = new Audio(hit);
  const splashSound = new Audio(splash);
  let arrayOfIndices = Array(100).fill().map((x,i)=>i);
  let attackQueue = [];

  function generateRandomDelay() {
    const pseudoRandom = Math.random() * 3;
    if(pseudoRandom < 1) {
      return 500
    } else if(pseudoRandom < 2) {
      return 1000
    } else {
      return 1500
    }
  }

  computerGameboard.forEach((square, index, nodeList) => {
    square.addEventListener('click', () => {
      if(currentTurn == 'player') {
        if(!square.classList.contains('hit')) {
          document.querySelector('div#game-flow-text').textContent = '';
          currentTurn = 'computer';
          attackSound.play();
          setTimeout(() => {
            computer.board.receiveAttack(index);
            if(!Array.isArray(computer.board.grid[index])) {
              splashSound.play();
              computerGameboard[index].appendChild(document.createElement('img'));
              computerGameboard[index].classList.add('hit');
              computerGameboard[index].lastChild.src = attackIconBlue;
            } else {
              hitSound.play();
              computerGameboard[index].appendChild(document.createElement('img'));
              computerGameboard[index].classList.add('hit');
              computerGameboard[index].lastChild.src = attackIconRed;
            }
            if(computer.board.isFleetDestroyed()) {
              document.querySelector('div#game-flow-text').textContent = `${player.name} wins! Reload the page to play again.`;
              computerGameboard.forEach((square) => {
                square.classList.remove('hidden');
              })
            }
            if(!computer.board.isFleetDestroyed()) {
              setTimeout(() => {
                attackSound.play();
                setTimeout(() => {
                  if(attackQueue.length == 0) {
                    const randomIndex = Math.floor(Math.random() * arrayOfIndices.length);
                    attackQueue.push(arrayOfIndices[randomIndex])
                    arrayOfIndices.splice(randomIndex, 1);
                  }            
                  player.board.receiveAttack(attackQueue[0]);
                  if(!Array.isArray(player.board.grid[attackQueue[0]])) {
                    splashSound.play();
                    playersGameboard[attackQueue[0]].appendChild(document.createElement('img'));
                    playersGameboard[attackQueue[0]].classList.add('hit');
                    playersGameboard[attackQueue[0]].lastChild.src = attackIconBlue;
                  } else {
                    hitSound.play();
                    playersGameboard[attackQueue[0]].appendChild(document.createElement('img'));
                    playersGameboard[attackQueue[0]].classList.add('hit');
                    playersGameboard[attackQueue[0]].lastChild.src = attackIconRed;

                    const adjacentIndices = player.board.gatherAdjacentIndices(attackQueue[0]);
                    adjacentIndices.forEach((index) => {
                      if(!playersGameboard[index].classList.contains('hit') && !attackQueue.includes(index)) {
                        attackQueue.push(index);
                        arrayOfIndices = arrayOfIndices.filter((element) => element != index);
                      }
                    })
                  }
                  attackQueue.splice(0, 1);
                  if(player.board.isFleetDestroyed()) {
                    document.querySelector('div#game-flow-text').textContent = 'The computer wins! Reload the page to play again.';
                    computerGameboard.forEach((square) => {
                      square.classList.remove('hidden');
                    })
                  }
                  setTimeout(() => {
                    if(!player.board.isFleetDestroyed()) {
                      currentTurn = 'player';
                      document.querySelector('div#game-flow-text').textContent = "It's your turn to attack: click an enemy square";
                    }
                  }, 2700)
                }, generateRandomDelay())
              }, 2700)
            }
          }, generateRandomDelay());
        }
      }
    })
  })
  // window.computer = computer;
  // window.player = player;
}