import { collisionDetection } from './collision';

class Brick {
  constructor(game, position) {
    const thisBrick = this;

    thisBrick.game = game;
    thisBrick.width = 80;
    thisBrick.height = 20;
    thisBrick.position = position;
    thisBrick.color = '#E8E111';
    thisBrick.markedForDeletion = false;
  }

  draw(context) {
    const thisBrick = this;

    context.fillStyle = thisBrick.color;
    context.fillRect(
      thisBrick.position.x,
      thisBrick.position.y,
      thisBrick.width,
      thisBrick.height
    );
  }

  update() {
    const thisBrick = this;
    console.log(thisBrick.game);
    if (collisionDetection(thisBrick.game.ball, thisBrick)) {
      thisBrick.game.ball.speed.y = -thisBrick.game.ball.speed.y;

      thisBrick.markedForDeletion = true;
    }
  }
}

export default Brick;
