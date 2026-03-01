export { renderLandingPage }

function renderLandingPage() {
  const body = document.querySelector('body');
  body.replaceChildren([]);
  body.removeAttribute('class');
  body.setAttribute('class', 'landing-page');

  const div = document.createElement('div');

  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));
  body.appendChild(div.cloneNode(true));

  document.querySelector('body > div:nth-child(1)').setAttribute('id', 'battleship-banner');
  document.querySelector('body > div:nth-child(1)').textContent = 'BATTLESHIP';

  document.querySelector('body > div:nth-child(2)').setAttribute('id', 'player-info');

  document.querySelector('body > div:nth-child(3)').setAttribute('id', 'start-game');



  const input = document.createElement('input');

  document.querySelector('body > div:nth-child(2)').appendChild(div.cloneNode(true));
  document.querySelector('body > div:nth-child(2)').appendChild(input.cloneNode(true));



  const button = document.createElement('button');

  document.querySelector('body > div:nth-child(3)').appendChild(button.cloneNode(true));




  document.querySelector('body > div:nth-child(2) > div').textContent = 'Enter your name to begin';
  document.querySelector('body > div:nth-child(2) > input').setAttribute('type', 'text');
  document.querySelector('body > div:nth-child(2) > input').setAttribute('id', 'player-name');

  document.querySelector('body > div:nth-child(3) > button').textContent = 'Start Game';
}