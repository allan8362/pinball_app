class DrawStatic {

  //bar to release the ball
  drawBallReleaseBar() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    // ctx.rect(releaseBarX, releaseBarY, canvas.width-releaseBarWidth, releaseBarHeight, releaseBarWidth);
    ctx.strokeRect(381, 560, 280, 500);
    // ctx.fillStyle = "#000000";
    // ctx.fill();
    ctx.closePath();
    ctx.stroke();
  }

  drawTriangle() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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

  drawLines() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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

    //inner left diag line - under left flipper
    ctx.beginPath();
    ctx.moveTo(100, 650);
    ctx.lineTo(42, 500);
    ctx.stroke();
    ctx.closePath();

  }

  drawCornerLines() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
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

}

export default DrawStatic;
