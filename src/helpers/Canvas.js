import React, {Component} from 'react';

class Canvas extends Component {

  componentDidMount(){
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
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
