import Game from './game';

class InputHandler {
  constructor(paddle, game) {
    const thisInputHandler = this;
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        // left
        case 37:
          paddle.moveLeft();
          break;

        // right
        case 39:
          paddle.moveRight();
          break;

        //pause
        case 27:
          game.togglePause();
          break;

        //start
        case 32:
          game.start();
          break;

        default:
          break;
      }
    });

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        // left
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        // right
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;

        default:
          break;
      }
    });
  }
}

export default InputHandler;
