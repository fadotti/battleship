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
  document.querySelector('body > div:nth-child(2) > div').setAttribute('id', 'quay-container');
  document.querySelector('body > div:nth-child(2) > div').appendChild(div.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div').appendChild(div.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div').appendChild(div.cloneNode(true));

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(1)')
    .textContent = 'Click on a ship to place it on the board:';

  const span = document.createElement('span');
  const img = document.createElement('img');

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3)').appendChild(span.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3)').appendChild(img.cloneNode(true));
  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3)').appendChild(span.cloneNode(true));

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3) > span:nth-child(1)')
    .textContent = 'Press the right arrow key ';

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3) > img').src = rightArrow

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(3) > span:nth-child(3)')
    .textContent = ' to change the orientation of the ship.';

  document.querySelector('body > div:nth-child(2) > div > div:nth-child(2)').setAttribute('id', 'quay');

  

  for(let i = 1; i <= 25; i++) {
    document.querySelector('body > div:nth-child(2) > div > div:nth-child(2)').appendChild(div.cloneNode(true));
    switch (i) {
      case 1:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i})`)
          .appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i}) > img`)
          .src = destroyer;
        break;
      case 2:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i})`)
          .appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i}) > img`)
          .src = submarine;
        break;
      case 3:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i})`)
          .appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i}) > img`)
          .src = cruiser;
        break;
      case 4:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i})`)
          .appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i}) > img`)
          .src = battleship;
        break;
      case 5:
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i})`)
          .appendChild(img.cloneNode(true));
        document.querySelector(`body > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(${i}) > img`)
          .src = carrier;
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

  for(let i = 0; i < 11; i++) {
    document.querySelector('div.letters').appendChild(div.cloneNode(true));
  }

  for(let i = 0; i < 10; i++) {
    document.querySelector('div.numbers').appendChild(div.cloneNode(true));
  }

  document.querySelectorAll('.letters > div').forEach((element, index) => {
    const utfBaseline = 64;
    if(index > 0) {
      element.textContent = String.fromCharCode(utfBaseline + index);
    }
  })

  document.querySelectorAll('.numbers > div').forEach((element, index) => {
    element.textContent = `${index + 1}`;
  })



  const button = document.createElement('button');

  document.querySelector('body > div:nth-child(3)').appendChild(button.cloneNode(true));
  document.querySelector('body > div:nth-child(3) > button').textContent = 'Fight!';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(4)').setAttribute('class', 'cursor-destroyer');
  document.querySelector('body > img:nth-child(4)').src = destroyer;
  document.querySelector('body > img:nth-child(4)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(5)').setAttribute('class', 'cursor-submarine');
  document.querySelector('body > img:nth-child(5)').src = submarine;
  document.querySelector('body > img:nth-child(5)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(6)').setAttribute('class', 'cursor-cruiser');
  document.querySelector('body > img:nth-child(6)').src = cruiser;
  document.querySelector('body > img:nth-child(6)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(7)').setAttribute('class', 'cursor-battleship');
  document.querySelector('body > img:nth-child(7)').src = battleship;
  document.querySelector('body > img:nth-child(7)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(8)').setAttribute('class', 'cursor-carrier');
  document.querySelector('body > img:nth-child(8)').src = carrier;
  document.querySelector('body > img:nth-child(8)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(9)').setAttribute('class', 'cursor-destroyer horizontal');
  document.querySelector('body > img:nth-child(9)').src = horizontalDestroyer;
  document.querySelector('body > img:nth-child(9)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(10)').setAttribute('class', 'cursor-submarine horizontal');
  document.querySelector('body > img:nth-child(10)').src = horizontalSubmarine;
  document.querySelector('body > img:nth-child(10)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(11)').setAttribute('class', 'cursor-cruiser horizontal');
  document.querySelector('body > img:nth-child(11)').src = horizontalCruiser;
  document.querySelector('body > img:nth-child(11)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(12)').setAttribute('class', 'cursor-battleship horizontal');
  document.querySelector('body > img:nth-child(12)').src = horizontalBattleship;
  document.querySelector('body > img:nth-child(12)').style.display = 'none';

  body.appendChild(img.cloneNode(true));
  document.querySelector('body > img:nth-child(13)').setAttribute('class', 'cursor-carrier horizontal');
  document.querySelector('body > img:nth-child(13)').src = horizontalCarrier;
  document.querySelector('body > img:nth-child(13)').style.display = 'none';
}