import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    let num1;
    if(e.target.value == '') {
      num1 = '';
    } else {
      num1 = parseFloat(e.target.value);
    };
    this.setState({num1});
  }

  setNum2(e) {
    let num2;
    if (e.target.value == '') {
      num2 = '';
    } else {
      num2 = parseFloat(e.target.value);
    };
    this.setState({num2});
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        
        <div className="num-inputs">
          <input className='num1-input' type='text' onChange={this.setNum1} value={this.state.num1}></input>
          <input className='num2-input' type='text' onChange={this.setNum2} value={this.state.num2}></input>
          <input type='button' value="Clear"></input>
        </div>

        <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}

export default Calculator;