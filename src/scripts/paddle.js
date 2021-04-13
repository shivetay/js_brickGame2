class Paddle {
  constructor(game) {
    const thisPaddle = this;
    thisPaddle.gameWidth = game.gameWidth;
    thisPaddle.width = 150;
    thisPaddle.height = 25;
    thisPaddle.position = {
      x: game.gameWidth / 2 - thisPaddle.width / 2,
      y: game.gameHeight - thisPaddle.height - 15,
    };
    thisPaddle.maxSpeed = 7;
    thisPaddle.speed = 0;
  }

  draw(context) {
    const thisPaddle = this;
    context.fillStyle = '#ffffff';

    context.fillRect(
      thisPaddle.position.x,
      thisPaddle.position.y,
      thisPaddle.width,
      thisPaddle.height
    );
  }

  moveLeft() {
    const thisPaddle = this;
    thisPaddle.speed = -thisPaddle.maxSpeed;
  }

  moveRight() {
    const thisPaddle = this;
    thisPaddle.speed = thisPaddle.maxSpeed;
  }

  stop() {
    const thisPaddle = this;
    thisPaddle.speed = 0;
  }

  update(deltaTime) {
    if (!deltaTime) return;
    const thisPaddle = this;

    // check how time is changed since last update
    thisPaddle.position.x += thisPaddle.speed;

    if (thisPaddle.position.x < 0) thisPaddle.position.x = 0;
    if (thisPaddle.position.x + thisPaddle.width > thisPaddle.gameWidth)
      thisPaddle.position.x = thisPaddle.gameWidth - thisPaddle.width;
  }
}

export default Paddle;
