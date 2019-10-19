import React, {Component} from 'react';
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

      // Left flipper coords
      let ax = 42;
      let ay = 450;
      let bx = 42;
      let by = 500;
      let cx = 170;
      let cy = 550;


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
    if(e.key == "Left" || e.key == "ArrowLeft") {
      console.log("left flipper up");
      let leftKeyPressed = true;
      drawLeftFlipperUp();
    } else if (e.key == "Right" || e.key == "ArrowRight") {
      console.log("right flipper up");
      let rightKeyPressed = true;
      drawRightFlipperUp();
    }
  }

  function keyUpHandler(e) {
    if(e.key == "Left" || e.key =="ArrowLeft") {
      console.log("left flipper down");
      let leftKeyPressed = false;
      drawLeftFlipperDown();
    } else if(e.key == "Right" || e.key =="ArrowRight") {
      console.log("right flipper down");
      let leftKeyPressed = false;
      drawRightFlipperDown();
    }
  }


  //pin ball
  function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#C0C0C0";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }


  //bar to release the ball
  function drawBallReleaseBar() {
    ctx.beginPath();
    // ctx.rect(releaseBarX, releaseBarY, canvas.width-releaseBarWidth, releaseBarHeight, releaseBarWidth);
    ctx.strokeRect(381, 560, 280, 500);
    // ctx.fillStyle = "#000000";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }
  function drawPaddle1() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#006400";
  ctx.fill();
  ctx.closePath();
}

  function drawTriangle() {
    //bottom left triangle
    ctx.beginPath();
    ctx.moveTo(21, 500);
    ctx.lineTo(21, 650);
    ctx.lineTo(79, 650);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //bottom right triangle
    ctx.beginPath();
    ctx.moveTo(321, 650);
    ctx.lineTo(379, 650);
    ctx.lineTo(379, 500);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  function drawLines() {
    //right verticle line
    ctx.beginPath();
    ctx.moveTo(379, 100);
    ctx.lineTo(379, 610);
    ctx.stroke();
    ctx.closePath();

    //inner right verticle line
    ctx.beginPath();
    ctx.moveTo(358, 500);
    ctx.lineTo(358, 450);
    ctx.stroke();
    ctx.closePath();

    //inner right diag line - under right flipper
    ctx.beginPath();
    ctx.moveTo(358, 500);
    ctx.lineTo(299, 650);
    ctx.stroke();
    ctx.closePath();

    // // left verticle line
    // ctx.beginPath();
    // ctx.moveTo(21, 450);
    // ctx.lineTo(21, 650);
    // ctx.stroke();
    // ctx.closePath();

    //inner left verticle line
    // ctx.beginPath();
    // ctx.moveTo(42, 500);
    // ctx.lineTo(42, 450);
    // ctx.stroke();
    // ctx.closePath();
    //
    //inner left diag line - under left flipper
    ctx.beginPath();
    ctx.moveTo(100, 650);
    ctx.lineTo(42, 500);
    ctx.stroke();
    ctx.closePath();

    // //bottom horizontal line
    // ctx.beginPath();
    // ctx.moveTo(21, 610);
    // ctx.lineTo(379, 610);
    // ctx.stroke();
    // ctx.closePath();
    //
    // //middle verticle line
    // ctx.beginPath();
    // ctx.moveTo(200, 000);
    // ctx.lineTo(200, 650);
    // ctx.stroke();
    // ctx.closePath();
    //
    // //middle horizontal line
    // ctx.beginPath();
    // ctx.moveTo(400, 325);
    // ctx.lineTo(0, 325);
    // ctx.stroke();
    // ctx.closePath();
  }

  function drawCornerLines() {
    //top right corner @ ball release
    ctx.beginPath();
    ctx.moveTo(401, 100);
    ctx.lineTo(379, 0);
    ctx.stroke();
    ctx.closePath();

    //joined to ball release path
    ctx.beginPath();
    ctx.moveTo(379, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();
    ctx.closePath();
  }

  function drawLeftFlipperDown() {
    //left flipper - in down position

    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.lineTo(cx, cy);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  function drawLeftFlipperUp() {
    //left flipper - in up position
    ctx.beginPath();
    ctx.moveTo(0, 450);
    ctx.lineTo(42, 500);
    ctx.lineTo(170, 450);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  //right flipper
  function drawRightFlipperDown() {
    //right flipper - in down position
    ctx.beginPath();
    ctx.moveTo(358, 450);
    ctx.lineTo(358, 500);
    ctx.lineTo(230, 550);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  function drawRightFlipperUp() {
    //right flipper - in up position
    ctx.beginPath();
    ctx.moveTo(400, 450);
    ctx.lineTo(358, 500);
    ctx.lineTo(230, 450);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  // function drawBumpers() {
  //   //right bottom bumper
  //   ctx.beginPath();
  //   ctx.moveTo(358, 300);
  //   ctx.lineTo(299, 410);
  //   ctx.lineTo(358, 400);
  //   // ctx.fillStyle = "#C0C0C0";
  //   // ctx.fill();
  //   ctx.closePath();
  //   ctx.stroke();
  //
  //   //left bottom bumper
  //   ctx.beginPath();
  //   ctx.moveTo(42, 300);
  //   ctx.lineTo(101, 410);
  //   ctx.lineTo(42, 400);
  //   // ctx.fillStyle = "#C0C0C0";
  //   // ctx.fill();
  //   ctx.closePath();
  //   ctx.stroke();
  //
  //   //top left corner bumper
  //   ctx.beginPath();
  //   ctx.moveTo(50, 0);
  //   ctx.lineTo(0, 50);
  //   // ctx.fillStyle = "#C0C0C0";
  //   // ctx.fill();
  //   ctx.closePath();
  //   ctx.stroke();
  //
  //   //middle left bumper
  //   ctx.beginPath();
  //   ctx.moveTo(50, 110);
  //   ctx.lineTo(0, 100);
  //   ctx.lineTo(0, 200);
  //   ctx.lineTo(50, 190);
  //   // ctx.fillStyle = "#C0C0C0";
  //   // ctx.fill();
  //   ctx.closePath();
  //   ctx.stroke();
  //
  //
  //   //middle right bumper
  //   ctx.beginPath();
  //   ctx.moveTo(350, 110);
  //   ctx.lineTo(379, 100);
  //   ctx.lineTo(379, 250);
  //   ctx.lineTo(360, 210);
  //   // ctx.fillStyle = "#C0C0C0";
  //   // ctx.fill();
  //   ctx.closePath();
  //   ctx.stroke();

    // //circle bumpers
    // //circle bumper1 - top left
    // let centerX = canvas.width / 3;
    // let centerY = canvas.height / 5;
    // let radius = 15;
    //
    // ctx.beginPath();
    // ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    // // ctx.fillStyle = "#C0C0C0";
    // // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    //
    // //circle bumper2 - top middle
    // let center2X = canvas.width / 2;
    // let center2Y = canvas.height / 5;
    // let radius2 = 15;
    //
    // ctx.beginPath();
    // ctx.arc(center2X, center2Y, radius2, 0, 2 * Math.PI, false);
    // // ctx.fillStyle = "#C0C0C0";
    // // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    //
    // //circle bumper3 - top right
    // let center3X = canvas.width / 1.5;
    // let center3Y = canvas.height / 5;
    // let radius3 = 15;
    //
    // ctx.beginPath();
    // ctx.arc(center3X, center3Y, radius2, 0, 2 * Math.PI, false);
    // // ctx.fillStyle = "#C0C0C0";
    // // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    //
    // //circle bumper4 - bottom left
    // let center4X = canvas.width / 2.3;
    // let center4Y = canvas.height / 3.5;
    // let radius4 = 15;
    //
    // ctx.beginPath();
    // ctx.arc(center4X, center4Y, radius2, 0, 2 * Math.PI, false);
    // // ctx.fillStyle = "#C0C0C0";
    // // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    //
    // //circle bumper5 - bottom right
    // let center5X = canvas.width / 1.7;
    // let center5Y = canvas.height / 3.5;
    // let radius5 = 15;
    //
    // ctx.beginPath();
    // ctx.arc(center5X, center5Y, radius5, 0, 2 * Math.PI, false);
    // // ctx.fillStyle = "#C0C0C0";
    // // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();



    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";

  // }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBallReleaseBar();
    drawTriangle();
    drawLines();
    drawCornerLines();
    drawLeftFlipperDown();
    // drawLeftFlipperUp();
    drawRightFlipperDown();
    // drawRightFlipperUp();
    // drawBumpers();
    drawPaddle1();
    collisionDetection();

    // if(leftKeyPressed){
    //   ax -= 42;
    // }

    // if(rightKeyPressed){
    //   ax -=
    // }


    if(ballX + dx > canvas.width-ballRadius || ballX + dx < ballRadius) {
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

    ballX += dx;
    ballY += dy;
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
