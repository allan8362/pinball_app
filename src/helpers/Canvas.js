import React, {Component} from 'react';
import DrawMove from './DrawMove';
import DrawStatic from './DrawStatic';
import '../App.css';

class Canvas extends Component {

  componentDidMount(){
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      const ballRadius = 10;
      let ballX = canvas.width/1.025;
      let ballY = canvas.height-150;
      let releaseBarX = canvas.width/1.05;
      let releaseBarY = canvas.height-10;
      let dx = 1;
      let dy = -1;
      let releaseBarHeight = canvas.height-40;
      let releaseBarWidth = 10;
      let rightKeyPressed = false;
      let leftKeyPressed = false;
      let paddleHeight = 10;
      let paddleWidth = 75;
      let paddleX = (canvas.width-paddleWidth) / 2;

    document.addEventListener('DOMContentLoaded', () => {
    canvas.addEventListener('click', logThePosition);
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  });

  const logThePosition = function(event) {
    console.log('x:', event.x);
    console.log('y:',event.y);
  }

  //Game Grid

  function collisionDetection() {
    for(let c=0; c<canvas.height; c++) {
      for(let r=0; r<canvas.width; r++) {
        dy = -dy;
      }
    }
  }

  function keyDownHandler(e) {
    const drawRequest = new DrawMove;
    if(e.key === "Left" || e.key === "ArrowLeft") {
      console.log("left flipper up");
      let leftKeyPressed = true;
      drawRequest.drawLeftFlipperUp();
    } else if (e.key === "Right" || e.key === "ArrowRight") {
      console.log("right flipper up");
      let rightKeyPressed = true;
      drawRequest.drawRightFlipperUp();
    }
  }

  function keyUpHandler(e) {
    const drawRequest = new DrawMove;
    if(e.key === "Left" || e.key === "ArrowLeft") {
      console.log("left flipper down");
      let leftKeyPressed = false;
      drawRequest.drawLeftFlipperDown();
    } else if(e.key === "Right" || e.key === "ArrowRight") {
      console.log("right flipper down");
      let leftKeyPressed = false;
      drawRequest.drawRightFlipperDown();
    }
  }

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";


  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawRequest = new DrawMove();
    drawRequest.drawBall(ballX, ballY, ballRadius);
    drawRequest.drawLeftFlipperDown();
    // drawRequest.drawLeftFlipperUp();
    drawRequest.drawRightFlipperDown();
    // drawRequest.drawRightFlipperUp();

    const drawStaticRequest = new DrawStatic();
    drawStaticRequest.drawBallReleaseBar();
    drawStaticRequest.drawTriangle();
    drawStaticRequest.drawLines();
    drawStaticRequest.drawCornerLines();

    collisionDetection();

    // Code to check when ball hits top/bottom/sides
    if(ballX + dx > canvas.width-21-ballRadius || ballX + dx < ballRadius) {
      dx = -dx;
    }
    if(ballY + dy < ballRadius) {
      dy = -dy;
    }
    else if(ballY + dy > canvas.height-100) {
      if(ballX > releaseBarX && ballX < releaseBarX + releaseBarHeight) {
        dy = -dy;
      }
    }
    // End of code to check when ball hits top/bottom/sides

    // Normal ball movement update
    ballX += dx;
    ballY += dy;
    // end of normal ball update
  }

  let interval = setInterval(draw, 10);
}

  render(){
    return(
      <div>
        <canvas id="myCanvas" width={400} height={650}/>
      </div>
    )
  }
}

export default Canvas;
