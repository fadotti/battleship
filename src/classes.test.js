import { Ship, Gameboard } from "./classes";

test('A ship of length 2 will be sunk after 2 hits', () => {
  const smallShip = new Ship(2);
  smallShip.hit();
  expect(smallShip.isSunk()).toBe(false);
  smallShip.hit();
  expect(smallShip.isSunk()).toBe(true);
})

test('The board is an array of length 100 with all entries equal to zero', () => {
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