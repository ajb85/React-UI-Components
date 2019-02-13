import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends Component {
  constructor(props) {
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
    this.handleClear = this.handleClear.bind(this);
  }
  handleNumber(num) {
    console.log("number");
    let { display, action } = this.state;

    if (!display || action) {
      display = num;
    } else {
      display += num;
    }

    this.setState({
      display: Number(display),
      action: 0
    });
  }
  handleClear() {
    console.log("clear");
    this.setState({
      display: 0,
      total: 0,
      operations: {
        divide: 0,
        multiply: 0,
        subtract: 0,
        add: 0
      }
    });
  }
  handleOperator(clicked) {
    console.log("operator");
    let { display, total, operations, action } = this.state;
    let { divide, multiply, subtract, add } = this.state.operations;

    if (divide) {
      if (display === 0) {
        total = "Err";
      } else {
        total /= display;
      }
    } else if (multiply) {
      total *= display;
    } else if (subtract) {
      total -= display;
    } else if (add) {
      total += display;
    } else {
      total = display;
    }

    display = total;
    if (total === "Err") {
      total = 0;
    }

    for (let operation in operations) {
      if (clicked === operation) {
        operations[operation] = 1;
      } else {
        operations[operation] = 0;
      }
    }

    action = 1;

    this.setState({ display, total, operations, action });
  }

  render() {
    return (
      <div className="calc-wrapper">
        <CalculatorDisplay number={this.state.display} />

        <ActionButton
          buttonStyle={"action-button"}
          number={"clear"}
          clearButton={this.handleClear}
        />
        <NumberButton
          buttonStyle={"math-button"}
          number={"÷"}
          handleNumber={this.handleOperator.bind(this, "divide")}
        />

        <NumberButton
          buttonStyle={"number-button"}
          number={"7"}
          handleNumber={this.handleNumber.bind(this, "7")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"8"}
          handleNumber={this.handleNumber.bind(this, "8")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"9"}
          handleNumber={this.handleNumber.bind(this, "9")}
        />

        <NumberButton
          buttonStyle={"math-button"}
          number={"x"}
          handleNumber={this.handleOperator.bind(this, "multiply")}
        />

        <NumberButton
          buttonStyle={"number-button"}
          number={"4"}
          handleNumber={this.handleNumber.bind(this, "4")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"5"}
          handleNumber={this.handleNumber.bind(this, "5")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"6"}
          handleNumber={this.handleNumber.bind(this, "6")}
        />

        <NumberButton
          buttonStyle={"math-button"}
          number={"-"}
          handleNumber={this.handleOperator.bind(this, "subtract")}
        />

        <NumberButton
          buttonStyle={"number-button"}
          number={"1"}
          handleNumber={this.handleNumber.bind(this, "1")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"2"}
          handleNumber={this.handleNumber.bind(this, "2")}
        />
        <NumberButton
          buttonStyle={"number-button"}
          number={"3"}
          handleNumber={this.handleNumber.bind(this, "3")}
        />

        <NumberButton
          buttonStyle={"math-button"}
          number={"+"}
          handleNumber={this.handleOperator.bind(this, "add")}
        />

        <NumberButton
          buttonStyle={"action-button"}
          number={"0"}
          handleNumber={this.handleNumber.bind(this, "0")}
        />
        <NumberButton
          buttonStyle={"math-button"}
          number={"="}
          handleNumber={this.handleOperator.bind(this, "equal")}
        />
      </div>
    );
  }
}

export default App;
