class DrawMove {

  //pin ball
  drawBall(ballX, ballY, ballRadius) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#C0C0C0";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  drawLeftFlipperDown() {
    //left flipper - in down position
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(42, 450);
    ctx.lineTo(42, 500);
    ctx.lineTo(170, 550);
    // ctx.fillStyle = "#C0C0C0";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  drawLeftFlipperUp() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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
  drawRightFlipperDown() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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

  drawRightFlipperUp() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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


}

export default DrawMove;
