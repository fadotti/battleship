# battleship

---

## Introduction

Play this old time classic against the computer! In the homepage, you will be prompted to enter your name.

In the screen that follows, you will be able to place your ships on the gameboard.

Once every ship has been placed, the "Fight!" button will take you to the arena. May the best player win!

This project has been sent in as a submission for [Project: Battleship](https://www.theodinproject.com/lessons/node-path-javascript-battleship).

---

## Implementation Details

The cornerstones of this implementation are the following three classes: `Ship`, `Gameboard`, and `Player`.

- Ships have only two properties: `length` and `numberOfHits`, with the latter ranging from `0` to the `length` itself. Ships have two methods: `hit`, which increases the `numberOfHits`, and `isSunk`, which returns `true` if the ship has been sunk.

- Gameboards have 6 properties: `grid` is an array of length 100 that represents the 10x10 board. The five remaining properties are each of the player's ships: a destroyer, a submarine, a cruiser, a battleship, and a carrier. Gameboards have the following methods that are used to command the flow of the game:
  - `#isHorizontalPlacementAllowed` returns `true` if a given ship can be placed horizontally in a given square, and `false` otherwise.
  - `#isVerticalPlacementAllowed` returns `true` if a given ship can be placed vertically in a given square, and `false` otherwise.
  - `placeShip` places a ship in the gameboard if the action is allowed.
  - `receiveAttack` receives an attack at the given square: if a ship is in that square, it will take a hit.
  - `isFleetDestroyed` returns `true` if every ship from that Gameboard instance has been sunk.
  - `gatherAdjacentIndices` is used to gather squares where it might be a good idea to attack next, provided that the current attack is a hit. This method is used to gather squares where enemy ships are likely to be: the squares are added to a queue that determines which square will be attacked next. This method is used so that the computer's strategy is better than simply choosing squares to attack at random. Much more can be done to turn the computer into a more formidable opponent, but that is beyond the scope of this project.

- Players have a `type` which can be equal to `human` or `computer`, a `name`, and Gameboard instance.

### Testing

The three classes have been tested using Jest to ensure they work as expected. Be sure to check `.../src/classes.test.js` for details on the actual tests.

### DOM

This application consists of a single URL. The HTML is manipulated exclusively via the DOM. `.../src/index.js` is the entry file, and all other scripts are connected to it. There are three main screens: the landing page, the board setup page, and the arena. Each of these have their own script that contains a function that renders the associated screen when called. `.../src/event-handlers.js` contains functions that add event listeners to each of the screens, with the exception of the arena's event listeners which are included directly in `.../src/arena.js` and which control the flow of the game.

## Credits

The assets used in this application were taken from internet sources that allow their distribution and free use.

The BATTLESHIP banner font (IronCladBolted) is a shareware/donationware font created by Steve Tune of Digital Empires.

The ocean background on the board's grid was downloaded from [Vecteezy](https://Vecteezy.com).

Ship sprites have been downloaded from [OpenGameArt](https://opengameart.org/content/sea-warfare-set-ships-and-more).

Sound effects were downloaded from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=89596). specifically:

- The cannonball and water splash sound effects are authored by [freesound_community](https://pixabay.com/es/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=89596).

- The cannonball hit effect was done by [Jurij](https://pixabay.com/es/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=399086).
