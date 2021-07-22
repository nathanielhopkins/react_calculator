import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }

    this.setNum1.bind(this);
    this.setNum2.bind(this);
  }

  setNum1(e) {
    alert('num1 changed')
  }

  setNum2(e) {
    alert('num2 changed')
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        
        <div className="num-inputs">
          <input className='num1-input' type='text' onChange={this.setNum1}></input>
          <input className='num2-input' type='text' onChange={this.setNum2}></input>
          <input type='button' value="Clear"></input>
        </div>
      </div>
    );
  }
}

export default Calculator;