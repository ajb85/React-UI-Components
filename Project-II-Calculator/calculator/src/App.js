import React,{Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      display: 0,
      total: 0,
      operations: {
        divide: 0,
        multiply: 0,
        subtract: 0,
        add: 0
      },
      action: 0
    };
    this.handelClear = this.handelClear.bind(this);
    // this.handelNumber = this.handelNumber.bind(this);
  }
  handelNumber(num){


    let {display, action} = this.state;

    if(!action){
      if(!display){
        display = num;
      }else{
        display += num;
      }
    }else{
      display = num;
    }


    this.setState({
      display: Number(display),
      action: 0
    })
  }
  handelClear(){
    this.setState({
      display: 0,
      total: 0,
      operations: {
        divide: 0,
        multiply: 0,
        subtract: 0,
        add: 0
      }
    })
  }
  handelOperator(clicked){
    let {display, total, operations, action} = this.state;
    let {divide, multiply, subtract, add} = this.state.operations;
    
    if(divide){
      total /= display
    }else if(multiply){
      total *= display
    }else if(subtract){
      total -= display
    }else if(add){
      total += display
    }else{
      total = display;
    }
    
    console.log(total)
    //display = 0;
    display = total;
    
    for(let operation in operations){
      if(clicked === operation){
        operations[operation] = 1;
      } else {
        operations[operation] = 0;
      }
    }

    // action = total;
    // if(clicked === "equal"){
    //   display = action;
    //   total = 0;
    // }

    action = 1;


    this.setState({ display, total, operations, action })

  }

  render(){
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay number={ this.state.display } />

        <ActionButton buttonStyle={"action-button"} number={"clear"} clearButton={ this.handelClear } />
        <NumberButton buttonStyle={"math-button"} number={"÷"} handelNumber={ this.handelOperator.bind(this, "divide") } />
        
        <NumberButton buttonStyle={"number-button"} number={"7"} handelNumber={this.handelNumber.bind(this, "7") }/>
        <NumberButton buttonStyle={"number-button"} number={"8"} handelNumber={this.handelNumber.bind(this, "8") }/>
        <NumberButton buttonStyle={"number-button"} number={"9"} handelNumber={this.handelNumber.bind(this, "9") }/>
    
        <NumberButton buttonStyle={"math-button"} number={"x"} handelNumber={ this.handelOperator.bind(this, "multiply") }/>
    
        <NumberButton buttonStyle={"number-button"} number={"4"} handelNumber={this.handelNumber.bind(this, "4") }/>
        <NumberButton buttonStyle={"number-button"} number={"5"} handelNumber={this.handelNumber.bind(this, "5") }/>
        <NumberButton buttonStyle={"number-button"} number={"6"} handelNumber={this.handelNumber.bind(this, "6") }/>
    
        <NumberButton buttonStyle={"math-button"} number={"-"} handelNumber={ this.handelOperator.bind(this, "subtract") }/>
    
        <NumberButton buttonStyle={"number-button"} number={"1"} handelNumber={this.handelNumber.bind(this, "1") }/>
        <NumberButton buttonStyle={"number-button"} number={"2"} handelNumber={this.handelNumber.bind(this, "2") }/>
        <NumberButton buttonStyle={"number-button"} number={"3"} handelNumber={this.handelNumber.bind(this, "3") }/>
    
        <NumberButton buttonStyle={"math-button"} number={"+"} handelNumber={ this.handelOperator.bind(this, "add") }/>
    
        <NumberButton buttonStyle={"action-button"} number={"0"} handelNumber={this.handelNumber.bind(this, "0") }/>
        <NumberButton buttonStyle={"math-button"} number={"="} handelNumber={ this.handelOperator.bind(this, "equal") } />
      </div>
    );
  }
};

export default App;
