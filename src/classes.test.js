import { Ship, Gameboard, Player } from "./classes";

test('A ship of length 2 will be sunk after 2 hits', () => {
  const smallShip = new Ship(2);
  smallShip.hit();
  expect(smallShip.isSunk()).toBe(false);
  smallShip.hit();
  expect(smallShip.isSunk()).toBe(true);
})

test('Upon initialization, the board is an array of length 100 with all entries equal to zero', () => {
  const board = new Gameboard();
  expect(board.grid.length).toBe(100);

  const nonzeroPresence = board.grid.reduce(
    (accumulator, currentValue) => (currentValue == 0) ? accumulator : true,
    false
  );
  expect(nonzeroPresence).toBe(false);
})

test('placeShip behaves as expected for various kinds of ships and orientations', () => {
  const board = new Gameboard();

  board.placeShip(99, board.destroyer, 'vertical');
  expect(board.grid[99]).toBe(0);

  board.placeShip(99, board.destroyer, 'horizontal');
  expect(board.grid[99]).toBe(0);

  board.placeShip(98, board.destroyer, 'horizontal');
  expect(board.grid[98]).toEqual([0, board.destroyer]);
  expect(board.grid[99]).toEqual([0, board.destroyer]);

  board.placeShip(23, board.carrier, 'vertical');
  expect(board.grid[13]).toBe(0);
  expect(board.grid[23]).toEqual([0, board.carrier]);
  expect(board.grid[33]).toEqual([0, board.carrier]);
  expect(board.grid[43]).toEqual([0, board.carrier]);
  expect(board.grid[53]).toEqual([0, board.carrier]);
  expect(board.grid[63]).toEqual([0, board.carrier]);
  expect(board.grid[73]).toBe(0);
})

test('receiveAttack updates the grid for both misses and hits', () => {
  const board = new Gameboard();

  board.placeShip(98, board.destroyer, 'horizontal');
  board.receiveAttack(97);
  board.receiveAttack(98);
  board.receiveAttack(99);
  expect(board.grid[96]).toBe(0);
  expect(board.grid[97]).toBe(1);
  expect(board.grid[98]).toEqual([1, board.destroyer]);
  expect(board.grid[99]).toEqual([1, board.destroyer]);
  expect(board.destroyer.isSunk()).toBe(true);
  expect(board.destroyer.numberOfHits).toBe(2);

  board.placeShip(23, board.carrier, 'vertical');
  board.receiveAttack(23);
  board.receiveAttack(33);
  expect(board.grid[23]).toEqual([1, board.carrier]);
  expect(board.grid[33]).toEqual([1, board.carrier]);
  expect(board.grid[43]).toEqual([0, board.carrier]);
  expect(board.carrier.isSunk()).toBe(false);
  expect(board.carrier.numberOfHits).toBe(2);
})

test('isFleetDestroyed properly displays the status of the fleet', () => {
  const board = new Gameboard();

  board.placeShip(0, board.carrier, 'horizontal');
  board.placeShip(10, board.battleship, 'horizontal');
  board.placeShip(20, board.cruiser, 'horizontal');
  board.placeShip(30, board.submarine, 'horizontal');
  board.placeShip(40, board.destroyer, 'horizontal');

  board.receiveAttack(0);
  board.receiveAttack(1);
  board.receiveAttack(2);
  board.receiveAttack(3);
  board.receiveAttack(4);

  board.receiveAttack(10);
  board.receiveAttack(11);
  board.receiveAttack(12);
  board.receiveAttack(13);

  board.receiveAttack(20);
  board.receiveAttack(21);
  board.receiveAttack(22);

  board.receiveAttack(30);
  board.receiveAttack(31);
  board.receiveAttack(32);

  board.receiveAttack(40);
  expect(board.isFleetDestroyed()).toBe(false);
  board.receiveAttack(41);
  expect(board.isFleetDestroyed()).toBe(true);
})

test('Player class works as expected', () => {
  const board = new Gameboard();

  const humanPlayer = new Player(1);
  expect(humanPlayer.type).toBe('human');

  const computerPlayer = new Player(0);
  expect(computerPlayer.type).toBe('computer');
})