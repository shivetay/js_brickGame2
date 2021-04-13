import { collisionDetection } from './collision';

class Ball {
  constructor(game) {
    const thisBall = this;

    thisBall.game = game;
    thisBall.ballSize = 10;
    thisBall.collor = '#ffffff';
    thisBall.gameHeight = game.gameHeight;
    thisBall.gameWidth = game.gameWidth;

    thisBall.res;
  }

  /* ball reset */
  reset() {
    const thisBall = this;
    thisBall.position = {
      x: 190,
      y: 290,
    };
    thisBall.speed = {
      x: 2,
      y: 2,
    };
  }

  draw(context) {
    const thisBall = this;
    context.fillStyle = thisBall.color;

    context.beginPath();
    context.arc(
      thisBall.position.x,
      thisBall.position.y,
      thisBall.ballSize,
      0,
      Math.PI * 2,
      true
    );
    context.fill();
  }

  /* moving ball */
  update(deltaTime) {
    const thisBall = this;
    thisBall.position.x += thisBall.speed.x;
    thisBall.position.y += thisBall.speed.y;

    // wall checks
    if (thisBall.position.x > thisBall.gameWidth || thisBall.x < 0) {
      // revert speed after hitting wall
      thisBall.speed.x = -thisBall.speed.x;
    }

    if (thisBall.position.y < 0) {
      // revert speed after hitting wall
      thisBall.speed.y = -thisBall.speed.y;
    }

    //game bottom
    if (thisBall.position.y + thisBall.ballSize > thisBall.gameHeight) {
      thisBall.game.lives--;
      thisBall.reset();
    }

    if (collisionDetection(thisBall, thisBall.game.paddle)) {
      // paddle checks
      // let ballBottom = thisBall.y + thisBall.ballSize;
      // let paddleTop = thisBall.game.paddle.position.y;
      // let leftPaddlieSide = thisBall.game.paddle.position.x;
      // let rightPaddleSide =
      //   thisBall.game.paddle.position.x + thisBall.game.paddle.width;

      //rever speed after hitting paddle top
      thisBall.speed.y = -thisBall.speed.y;
      thisBall.position.y = thisBall.game.paddle.position.y - thisBall.ballSize;
    }
  }
}

export default Ball;
