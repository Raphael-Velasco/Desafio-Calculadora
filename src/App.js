import React, {Component} from 'react'
import './App.css'
class cronometro extends Component{

  state = {
    seconds:0,
    thousandths:0
  }

  Start = () => {
    const Stock = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });
    }, 700);
    this.Stop = () => {
      clearInterval(Stock);
    };
  };

  Restart = () => {
    this.setState({
      seconds:0
    })
  }

  render(){
    return(
      <div>
      <h1>Cronômetro</h1>
      <div className="stopwatch-container">
        <h2>{this.state.seconds}</h2>
        <div className='button-container'>
        <button onClick={this.Start}>Start</button>
        <button onClick={this.Stop}>Stop</button>
        <button onClick={this.Restart}>Restart</button>
        </div>
      </div>
      </div>
    )
  }
}
    
  

export default cronometro
