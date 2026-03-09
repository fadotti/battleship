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

  #isHorizontalPlacementAllowed(index, ship) {
    const horizontalRoom = 10 - (index % 10);
    let counter = ship.length;
    if(ship.length <= horizontalRoom) {
      while (counter > 0) {
        if(this.grid[index] != 0) return false
        ++index;
        --counter;
      }
      return true
    }
    return false
  }

  #isVerticalPlacementAllowed(index, ship) {
    const verticalRoom = 10 - Math.floor(index / 10);
    let counter = ship.length;
    if(ship.length <= verticalRoom) {
      while (counter > 0) {
        if(this.grid[index] != 0) return false
        index += 10;
        --counter;
      }
      return true
    }
    return false
  }

  placeShip(index, ship, orientation) {
    if (orientation == 'horizontal' && this.#isHorizontalPlacementAllowed(index, ship)) {
      let counter = ship.length;
      while (counter > 0) {
        this.grid[index] = [0, ship];
        ++index;
        --counter;
      }
      return true
    }

    if (orientation == 'vertical' && this.#isVerticalPlacementAllowed(index, ship)) {
      let counter = ship.length;
      while (counter > 0) {
        this.grid[index] = [0, ship];
        index += 10;
        --counter;
      }
      return true
    }
    return false
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
  constructor(type, name) {
    this.type = (type == 1) ? 'human' : 'computer';
    this.name = name;
    this.board = new Gameboard();
  }
}