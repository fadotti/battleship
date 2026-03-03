import destroyer from './assets/sprites/Destroyer/ShipDestroyerHull.png'
import submarine from './assets/sprites/Submarine/ShipSubMarineHull.png'
import cruiser from './assets/sprites/Cruiser/ShipCruiserHull.png'
import battleship from './assets/sprites/Battleship/ShipBattleshipHull.png'
import carrier from './assets/sprites/Carrier/ShipCarrierHull.png'
export { renderBoardSetup }

function renderBoardSetup() {
  const body = document.querySelector('body');
  body.replaceChildren([]);
  body.removeAttribute('class');
  body.setAttribute('class', 'board-setup');

  const div = document.createElement('div');

  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));

  document.querySelector('body > div:nth-child(1)').setAttribute('id', 'board-setup-header');
  document.querySelector('body > div:nth-child(1)').textContent = 'Deploy Your Fleet:';

  document.querySelector('body > div:nth-child(2)').setAttribute('id', 'board-setup-area');

  document.querySelector('body > div:nth-child(3)').setAttribute('id', 'fight');



  document.querySelector('body > div:nth-child(2)').appendChild(div.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div').setAttribute('id', 'quay');

  const img = document.createElement('img');

  for(let i = 1; i <= 25; i++) {
    document.querySelector('body > div:nth-child(2) > div').appendChild(div.cloneNode(true));
    switch (i) {
      case 1:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i})`).appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i}) > img`).src = destroyer;
        break;
      case 2:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i})`).appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i}) > img`).src = submarine;
        break;
      case 3:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i})`).appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i}) > img`).src = cruiser;
        break;
      case 4:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i})`).appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i}) > img`).src = battleship;
        break;
      case 5:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i})`).appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(${i}) > img`).src = carrier;
        break;
    }
  }



  document.querySelector('body > div:nth-child(2)').appendChild(div.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div:nth-child(2)').setAttribute('class', 'gameboard');

  for(let i = 1; i <= 102; i++) {
    document.querySelector('body > div:nth-child(2) > div:nth-child(2)').appendChild(div.cloneNode(true));
  }

  document.querySelector('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
    .setAttribute('class', 'letters');
  document.querySelector('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
    .setAttribute('class', 'numbers');

  document.querySelectorAll('.letters > div').forEach((element, index) => {
    const utfBaseline = 64;
    if(index > 0) {
      element.textContent = String.fromCharCode(utfBaseline + index);
    }
  })



  const button = document.createElement('button');

  document.querySelector('body > div:nth-child(3)').appendChild(button.cloneNode(true));
  document.querySelector('body > div:nth-child(3) > button').textContent = 'Fight!';
}