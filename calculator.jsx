import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }
  }

  // your code here

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        
        <div className="num-inputs">
          <input className='num1-input' type='text' onChange={() => alert('num1 changed')}></input>
          <input className='num2-input' type='text' onChange={() => alert('num2 changed')}></input>
          <input type='button' value="Clear"></input>
        </div>
      </div>
    );
  }
}

export default Calculator;