import destroyer from './assets/sprites/Destroyer/ShipDestroyerHull.png'
import submarine from './assets/sprites/Submarine/ShipSubMarineHull.png'
import cruiser from './assets/sprites/Cruiser/ShipCruiserHull.png'
import battleship from './assets/sprites/Battleship/ShipBattleshipHull.png'
import carrier from './assets/sprites/Carrier/ShipCarrierHull.png'
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

  document.querySelector('div#arena-header > div > div:nth-child(1)').textContent = 'FEDE';
  document.querySelector('div#arena-header > div > div:nth-child(2)').setAttribute('class', 'center');
  document.querySelector('div#arena-header > div > div:nth-child(3)').textContent = 'COMPUTER';

  document.querySelector('div#arena-header > div > div:nth-child(2)').appendChild(div.cloneNode(true));
  document.querySelector('div#arena-header > div > div:nth-child(2) > div').textContent = 'VS';



  document.querySelector('div#arena-gameboards').appendChild(div.cloneNode(true));
  document.querySelector('div#arena-gameboards').appendChild(div.cloneNode(true));

  document.querySelector('div#arena-gameboards > div:nth-child(1)').setAttribute('class', 'gameboard');
  document.querySelector('div#arena-gameboards > div:nth-child(2)').setAttribute('class', 'gameboard');

  for(let i = 1; i <= 102; i++) {
    document.querySelector('div.gameboard:nth-child(1)').appendChild(div.cloneNode(true));
  }

  document.querySelector('div.gameboard:nth-child(1) > div:nth-child(1)')
    .setAttribute('class', 'letters');
  document.querySelector('div.gameboard:nth-child(1) > div:nth-child(2)')
    .setAttribute('class', 'numbers');

  for(let i = 0; i < 11; i++) {
    document.querySelector('div.gameboard:nth-child(1) div.letters').appendChild(div.cloneNode(true));
  }

  for(let i = 0; i < 10; i++) {
    document.querySelector('div.gameboard:nth-child(1) div.numbers').appendChild(div.cloneNode(true));
  }

  document.querySelectorAll('div.gameboard:nth-child(1) .letters > div').forEach((element, index) => {
    const utfBaseline = 64;
    if(index > 0) {
      element.textContent = String.fromCharCode(utfBaseline + index);
    }
  })

  document.querySelectorAll('div.gameboard:nth-child(1) .numbers > div').forEach((element, index) => {
    element.textContent = `${index + 1}`;
  })

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

  document.querySelector('div#game-flow-text').textContent = 'Fire at the enemy!';
}