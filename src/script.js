import Game from './scripts/game';

import './style.scss';

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let game = new Game(canvas.width, canvas.height);
// game.start();

let lastTime = 0,
  updateAll = (timeStamp) => {
    // time calculate
    let deltaTime = timeStamp - lastTime;

    lastTime = timeStamp;

    drawCanvas();

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(updateAll);
  };

/* draw canvas */
function drawCanvas() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

requestAnimationFrame(updateAll);
