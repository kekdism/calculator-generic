class Calculator {
  history = {
    value: "",
  };
  screen = {
    value: "0",
  };
  #numberScreen = 0;
  #historySource = {
    firstOperand: null,

    operationToApply: null,
    secondOperand: null,
  };
  #calculatedRecently = false;
  #operandList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  #operatorList = {
    add: {
      action: (a, b) => a + b,
      text: "+",
      arity: "binary",
    },
    sub: {
      action: (a, b) => a - b,
      text: "-",
      arity: "binary",
    },
    mult: {
      action: (a, b) => a * b,
      text: "*",
      arity: "binary",
    },
    div: {
      action: (a, b) => {
        if (b === 0) {
          return "Error";
        }
        return a / b;
      },
      text: "/",
      arity: "binary",
    },
    sqrt: {
      action: (a) => {
        if (a < 0) {
          return "Error";
        }
        return Math.sqrt(a);
      },
      text: "√",
      arity: "unary",
    },
    sign: {
      action: (a) => {
        return a * -1;
      },
      text: "±",
      arity: "unary",
    },
    per: {
      action: (a) => {
        return a / 100;
      },

      text: "%",
      arity: "unary",
    },
  };

  constructor(altTextSetting = {}) {
    for (const [operation, altText] in Object.entries(altTextSetting)) {
      this.#operatorList[operation].text = altText;
    }
  }

  #createOperationHandler(op) {
    switch (op.arity) {
      case "unary":
        return {
          text: op.text,
          action: () => {
            const result = op.action(this.#numberScreen);
            if (!this.#historySource.operationToApply) {
              this.#historySource.firstOperand = {
                value: result,
                text: `${op.text}(${this.#numberScreen})`,
              };
            } else {
              this.#historySource.secondOperand = {
                value: result,
                text: `${op.text}(${this.#numberScreen})`,
              };
            }

            this.#numberScreen = result;
            this.screen.value = this.#numberScreen.toLocaleString();

            this.#updateHistory();
          },
        };
      case "binary":
        return {
          text: op.text,
          action: () => {
            this.#calculatedRecently = false;
            if (!this.#historySource.operationToApply) {
              this.#historySource.firstOperand = {
                value: this.#numberScreen,
                text: this.#numberScreen.toString(),
              };
              this.#historySource.operationToApply = op;
              this.#updateHistory();
              this.#numberScreen = 0;
              return;
            }
            if (this.#numberScreen === this.#historySource.firstOperand.value) {
              this.#historySource.operationToApply = op;
              this.#updateHistory();
              this.#numberScreen = 0;
              return;
            }

            this.#calculate();
            this.#historySource.firstOperand = {
              value: this.#numberScreen,
              text: this.#numberScreen.toString(),
            };
            this.#historySource.operationToApply = op;
            this.#updateHistory();
            this.#numberScreen = 0;
          },
        };
    }
  }

  #calculate() {
    this.#calculatedRecently = true;
    const { firstOperand, operationToApply, secondOperand } =
      this.#historySource;
    const result = operationToApply.action(
      firstOperand.value,
      secondOperand.value
    );

    this.#historySource = {
      firstOperand: null,
      operationToApply: null,
      secondOperand: null,
    };
    this.#numberScreen = result;
    this.screen.value = this.#numberScreen.toLocaleString();
  }

  #equlity() {
    this.#historySource.secondOperand = {
      value: this.#numberScreen,
      text: this.#numberScreen.toString(),
    };
    this.#updateHistory("=");
    this.#calculate();
  }

  #updateHistory(...postfix) {
    const history = [];
    for (let key in this.#historySource) {
      history.push(this.#historySource[key]?.text);
    }
    this.history.value = [...history, ...postfix].join(" ");
  }

  #createOperandHandler(operand) {
    return () => {
      if (this.#calculatedRecently || this.screen.value === "Error") {
        this.#calculatedRecently = false;
        this.#resetCalc();
      }
      const newScreen = this.#numberScreen.toString() + operand.toString();
      if (newScreen.length > 10) {
        return;
      }
      this.#numberScreen = Number(newScreen);
      this.screen.value = this.#numberScreen.toLocaleString();
    };
  }

  #resetCalc() {
    this.history.value = "";
    this.screen.value = 0;
    this.#numberScreen = 0;
    this.#historySource = {
      firstOperand: null,
      operationToApply: null,
      secondOperand: null,
    };
  }

  getCalculatorButtons() {
    const buttons = {};
    this.#operandList.forEach(
      (op) =>
        (buttons[`num${op}`] = {
          action: this.#createOperandHandler(op),
          text: op,
        })
    );
    Object.entries(this.#operatorList).forEach(([name, data]) => {
      buttons[name] = this.#createOperationHandler(data);
    });
    return {
      ...buttons,
      equal: { action: () => this.#equlity(), text: "=" },
      reset: { action: () => this.#resetCalc(), text: "C" },
    };
  }
}

export default new Calculator();
