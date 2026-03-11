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
import splash from './assets/sound/freesound_community-splash_2-98207.mp3'
import hit from './assets/sound/soundreality-hit-windy-thud-399086.mp3'
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

  // document.querySelector('div#arena-gameboards > div:nth-child(1)').setAttribute('class', 'gameboard');
  document.querySelector('div#arena-gameboards > div:nth-child(2)').setAttribute('class', 'gameboard');

  // for(let i = 1; i <= 102; i++) {
  //   document.querySelector('div.gameboard:nth-child(1)').appendChild(div.cloneNode(true));
  // }

  // document.querySelector('div.gameboard:nth-child(1) > div:nth-child(1)')
  //   .setAttribute('class', 'letters');
  // document.querySelector('div.gameboard:nth-child(1) > div:nth-child(2)')
  //   .setAttribute('class', 'numbers');

  // for(let i = 0; i < 11; i++) {
  //   document.querySelector('div.gameboard:nth-child(1) div.letters').appendChild(div.cloneNode(true));
  // }

  // for(let i = 0; i < 10; i++) {
  //   document.querySelector('div.gameboard:nth-child(1) div.numbers').appendChild(div.cloneNode(true));
  // }

  // document.querySelectorAll('div.gameboard:nth-child(1) .letters > div').forEach((element, index) => {
  //   const utfBaseline = 64;
  //   if(index > 0) {
  //     element.textContent = String.fromCharCode(utfBaseline + index);
  //   }
  // })

  // document.querySelectorAll('div.gameboard:nth-child(1) .numbers > div').forEach((element, index) => {
  //   element.textContent = `${index + 1}`;
  // })

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

  document.querySelector('div#game-flow-text').textContent = "It's your turn yo attack: click an enemy square";

  const computer = new Player(0, 'computer');
  // let currentShip = 'destroyer';
  let orientation;
  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';
  let isDestroyerPlaced = false;
  let isSubmarinePlaced = false;
  let isCruiserPlaced = false;
  let isBattleshipPlaced = false;
  let isCarrierPlaced = false;

  const computerGameboard = document.querySelectorAll('div#arena-gameboards > div.gameboard:nth-child(2) > div:not(.letters):not(.numbers)');
  const playersGameboard = document.querySelectorAll('div#arena-gameboards > div.gameboard:nth-child(2) > div:not(.letters):not(.numbers)');

  while(!isDestroyerPlaced) {
    const placeShipAtindex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtindex, player.board.destroyer, orientation);
    console.log(computer.board.grid);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtindex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtindex].firstChild.src = orientation == 'vertical' ? destroyer : horizontalDestroyer;
      if(orientation == 'vertical') computerGameboard[placeShipAtindex].setAttribute('class', 'vertical destroyer');
      if(orientation == 'horizontal') computerGameboard[placeShipAtindex].setAttribute('class', 'horizontal destroyer');
      isDestroyerPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isSubmarinePlaced) {
    const placeShipAtindex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtindex, player.board.submarine, orientation);
    console.log(computer.board.grid);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtindex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtindex].firstChild.src = orientation == 'vertical' ? submarine : horizontalSubmarine;
      if(orientation == 'vertical') computerGameboard[placeShipAtindex].setAttribute('class', 'vertical submarine');
      if(orientation == 'horizontal') computerGameboard[placeShipAtindex].setAttribute('class', 'horizontal submarine');
      isSubmarinePlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isCruiserPlaced) {
    const placeShipAtindex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtindex, player.board.cruiser, orientation);
    console.log(computer.board.grid);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtindex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtindex].firstChild.src = orientation == 'vertical' ? cruiser : horizontalCruiser;
      if(orientation == 'vertical') computerGameboard[placeShipAtindex].setAttribute('class', 'vertical cruiser');
      if(orientation == 'horizontal') computerGameboard[placeShipAtindex].setAttribute('class', 'horizontal cruiser');
      isCruiserPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isBattleshipPlaced) {
    const placeShipAtindex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtindex, player.board.battleship, orientation);
    console.log(computer.board.grid);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtindex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtindex].firstChild.src = orientation == 'vertical' ? battleship : horizontalBattleship;
      if(orientation == 'vertical') computerGameboard[placeShipAtindex].setAttribute('class', 'vertical battleship');
      if(orientation == 'horizontal') computerGameboard[placeShipAtindex].setAttribute('class', 'horizontal battleship');
      isBattleshipPlaced = true;
    }
  }

  orientation = (Math.random() < 0.5) ? 'vertical' : 'horizontal';

  while(!isCarrierPlaced) {
    const placeShipAtindex = Math.floor(Math.random() * 100);
    const placeShipReturnValue = computer.board.placeShip(placeShipAtindex, player.board.carrier, orientation);
    console.log(computer.board.grid);
    if(placeShipReturnValue) {
      computerGameboard[placeShipAtindex].appendChild(document.createElement('img'));
      computerGameboard[placeShipAtindex].firstChild.src = orientation == 'vertical' ? carrier : horizontalCarrier;
      if(orientation == 'vertical') computerGameboard[placeShipAtindex].setAttribute('class', 'vertical carrier');
      if(orientation == 'horizontal') computerGameboard[placeShipAtindex].setAttribute('class', 'horizontal carrier');
      isCarrierPlaced = true;
    }
  }

  computerGameboard[10].appendChild(document.createElement('img'));
  computerGameboard[10].classList.add('hit');
  computerGameboard[10].firstChild.src = attackIconRed;

  let currentTurn = 'player';
  const attackSound = new Audio(cannonball);

  computerGameboard.forEach((square, index, nodeList) => {
    square.addEventListener('click', () => {
      if(currentTurn == 'player') {
        console.log(square.classList)
        console.log(square.classList.contains('hit'));
        if(!square.classList.contains('hit')) {
          attackSound.play();
        }
      }
    })
  })
}