import React, {Component} from 'react'
import './App.css'
class calculator extends Component{

  state = {
    n1: "",
    n2: "",
    result:0
  }

  minus = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 - n2,
        sinal:"-"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }
  add = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 + n2,
        sinal:"+"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }
  mult = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 * n2,
        sinal:"*"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
  }

  div = () => {
    let{n1, n2} = this.state
    if((n1 && n2) !== (null || "")){
      this.setState({
        result: n1 / n2,
        sinal:"/"
      })
    }else{
      this.setState({
        result: "Digite um valor nos inputs"
      })
    }
}
  clear = () => {
    let {n1, n2} = this.state
    if((n1 && n2) !== (null || "" || 0)){
      this.setState({
        result: 0,
        n1: "",
        n2: "",
        sinal:""
      })
    }
  }
  handleChangeN1 = (event) => {
    this.setState({
      n1: Number( event.target.value),
    })
  }
  handleChangeN2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    })
  }

  render() {
    let {result, n1, n2, sinal} = this.state
    return(
      <div className="container">
        <h1>React Calc App</h1>
        <h3>{result}</h3>
        <input value={n1} onChange={this.handleChangeN1}   type="number" name="number 1"/>
        <h3>{sinal}</h3>
        <input value={n2} onChange={this.handleChangeN2}  type="number" name="number 2"/>
        <div className="container2">
        <button onClick={this.minus}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.add}>+</button>
        <button onClick={this.div}>/</button>
        <button className="clear" onClick={this.clear}>Limpar</button>
        </div>
      </div>
    )
  }
}

    
  

export default calculator
