import Brick from './brick';

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          /*800 width 8 bricks per row */
          x: 80 * brickIndex,
          y: 50 + 20 * rowIndex,
        };
        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}

export const level1 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
];
