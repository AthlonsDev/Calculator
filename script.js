class Calculator {
    constructor(previousOperandButtons, CurrentOperandButtons) {
        this.previousOperandButtons = previousOperandButtons
        this.CurrentOperandButtons = CurrentOperandButtons
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber() {

    }

    chooseOperation() {

    }

    compute() {

    }

    updateDisplay() {

    }
 
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandButtons = document.querySelectorAll('[data-previous-operand]')
const CurrentOperandButtons = document.querySelectorAll('[data-current-operand]')