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

}

export default DrawMove;
