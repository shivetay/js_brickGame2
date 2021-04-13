import Paddle from './paddle';
import InputHandler from './input';
import Ball from './ball';
import Brick from './brick';
import { buildLevel, level1 } from './levels';

const GameStates = {
  paused: 0,
  running: 1,
  menu: 2,
  gameover: 3,
};

class Game {
  constructor(gameWidth, gameHeight) {
    const thisGame = this;
    thisGame.gameHeight = gameHeight;
    thisGame.gameWidth = gameWidth;
    thisGame.gamestate = GameStates.menu;
    thisGame.gameObjects = [];
    thisGame.bricks = [];
    thisGame.lives = 1;

    thisGame.paddle = new Paddle(thisGame);
    thisGame.ball = new Ball(thisGame);

    new InputHandler(thisGame.paddle, thisGame);
  }

  start() {
    const thisGame = this;
    if (thisGame.gamestate !== GameStates.menu) return;

    thisGame.bricks = buildLevel(thisGame, level1);

    thisGame.gameObjects = [thisGame.paddle, thisGame.ball];

    thisGame.gamestate == GameStates.running;
  }

  update(deltaTime) {
    const thisGame = this;
    if (thisGame.lives === 0) thisGame.gamestate = GameStates.gameover;

    if (
      thisGame.gamestate == GameStates.paused ||
      thisGame.gamestate == GameStates.menu ||
      thisGame.gamestate == GameStates.gameover
    )
      return;
    thisGame.gameObjects.forEach((object) => object.update(deltaTime));

    thisGame.gameObjects = thisGame.gameObjects.filter(
      (brick) => !brick.markedForDeletion
    );
  }

  draw(context) {
    const thisGame = this;

    thisGame.gameObjects.forEach((object) => object.draw(context));

    if (thisGame.gamestate === GameStates.paused) {
      context.fillStyle = 'rgba(0,0,0,0.5)';
      context.rect(0, 0, thisGame.gameWidth, thisGame.gameHeight);
      context.fill();

      context.font = '30px sans-serif';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText(
        'Paused',
        thisGame.gameWidth / 2,
        thisGame.gameHeight / 2
      );
    }
    if (thisGame.gamestate === GameStates.menu) {
      context.fillStyle = 'rgba(0,0,0)';
      context.rect(0, 0, thisGame.gameWidth, thisGame.gameHeight);
      context.fill();

      context.font = '30px sans-serif';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText(
        'Press Space to start',
        thisGame.gameWidth / 2,
        thisGame.gameHeight / 2
      );
    }

    if (thisGame.gamestate === GameStates.gameover) {
      context.fillStyle = 'rgba(0,0,0)';
      context.rect(0, 0, thisGame.gameWidth, thisGame.gameHeight);
      context.fill();

      context.font = '30px sans-serif';
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.fillText(
        'Game Over',
        thisGame.gameWidth / 2,
        thisGame.gameHeight / 2
      );
    }
  }

  togglePause() {
    const thisGame = this;
    if (thisGame.gamestate === GameStates.paused) {
      thisGame.gamestate = GameStates.running;
    } else {
      thisGame.gamestate = GameStates.paused;
    }
  }
}

export default Game;
