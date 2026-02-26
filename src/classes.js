export { Ship, Gameboard, Player }

class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
  }

  hit() {
    if (this.numberOfHits < this.length) this.numberOfHits += 1
  }

  isSunk() {
    return (this.length == this.numberOfHits) ? true : false
  }
}

class Gameboard {
  constructor() {
    this.grid = new Array(100).fill(0, 0);
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(2);
  }

  placeShip(index, ship, orientation) {
    const verticalRoom = 10 - Math.floor(index / 10);
    const horizontalRoom = 10 - (index % 10);

    if (orientation == 'horizontal' && ship.length <= horizontalRoom) {
      let counter = ship.length;
      while (counter > 0) {
        this.grid[index] = [0, ship];
        ++index;
        --counter;
      }
    }

    if (orientation == 'vertical' && ship.length <= verticalRoom) {
      let counter = ship.length;
      while (counter > 0) {
        this.grid[index] = [0, ship];
        index += 10;
        --counter;
      }
    }
  }

  receiveAttack(index) {
    if (!Array.isArray(this.grid[index])) {
      if (this.grid[index] == 0) this.grid[index] = 1
    } else {
      if (this.grid[index][0] == 0) {
        this.grid[index][0] = 1;
        this.grid[index][1].hit();
      }
    }
  }

  isFleetDestroyed() {
    if (this.carrier.isSunk() &&
    this.battleship.isSunk() &&
    this.cruiser.isSunk() &&
    this.submarine.isSunk() &&
    this.destroyer.isSunk()) {
      return true
    }

    return false
  }
}

class Player {
  constructor(type) {
    this.type = (type == 1) ? 'human' : 'computer';
    this.board = new Gameboard();
  }
}