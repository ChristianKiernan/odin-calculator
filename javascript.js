//Track if the display currently holds input
let currentInput = false;

//Tracks when an operator has been pressed
let currentOperator;

//Tracks when the first expression entered is complete
let expressionComplete = false;

let firstNum;
let secondNum;
let operator;

//Div creation and appendment 
const outlineDiv = document.createElement("div");
outlineDiv.classList.add("container");
document.body.appendChild(outlineDiv);

const displayDiv = document.createElement("div");
displayDiv.classList.add("display");
outlineDiv.appendChild(displayDiv);

const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button-container");
outlineDiv.appendChild(buttonDiv);

const numButtons = 18;
for (let i = 0; i < numButtons;  i++) {
    const calcButton = document.createElement("button");
    calcButton.classList.add("calc-button");
    calcButton.id = `button-${i + 1}`
    buttonDiv.appendChild(calcButton);
}

const display = document.querySelector("div.display");

//ButtonOne (AC)
const buttonOne = document.querySelector("#button-1");
buttonOne.innerHTML = "AC";
buttonOne.classList.add("calc-button-orange");

//ButtonTwo (+ / -)
const buttonTwo = document.querySelector("#button-2");
buttonTwo.innerHTML = "+ / -";
buttonTwo.classList.add("calc-button-orange");

//ButtonThree (.)
const buttonThree = document.querySelector("#button-3");
buttonThree.innerHTML = ".";
buttonThree.classList.add("calc-button-orange");

//ButtonFour (/)
const buttonFour = document.querySelector("#button-4");
buttonFour.innerHTML = "/";
buttonFour.classList.add("calc-button-blue");

buttonFour.addEventListener("click", () => {
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        firstNum = add(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "/"
    }
    else if (operator === '-') {
        display.innerHTML = `${subtract(firstNum, secondNum)}`;
        firstNum = subtract(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "/";
    }
    else if (operator === '*') {
        display.innerHTML = `${multiply(firstNum, secondNum)}`;
        firstNum = multiply(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "/";
    }
    else if (operator === '/') {
        display.innerHTML = `${divide(firstNum, secondNum)}`;
        firstNum = divide(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "/";
    }
    else if (displayIsEmpty() === false) {
        currentInput = false;
        operator = "/";
        expressionComplete = true;
    }
});

//ButtonFive (7)
const buttonFive = document.querySelector("#button-5");
buttonFive.innerHTML = "7";

buttonFive.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 7;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "7";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 7;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "7";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonSix (8)
const buttonSix = document.querySelector("#button-6");
buttonSix.innerHTML = "8";

buttonSix.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 8;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "8";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 8;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "8";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonSeven (9)
const buttonSeven = document.querySelector("#button-7");
buttonSeven.innerHTML = "9";

buttonSeven.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 9;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "9";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 9;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "9";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonEight (*)
const buttonEight = document.querySelector("#button-8");
buttonEight.innerHTML = "*";
buttonEight.classList.add("calc-button-blue");

buttonEight.addEventListener("click", () => {
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        firstNum = add(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "*";
    }
    else if (operator === '-') {
        display.innerHTML = `${subtract(firstNum, secondNum)}`;
        firstNum = subtract(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "*";
    }
    else if (operator === '*') {
        display.innerHTML = `${multiply(firstNum, secondNum)}`;
        firstNum = multiply(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "*";
    }
    else if (operator === '/') {
        display.innerHTML = `${divide(firstNum, secondNum)}`;
        firstNum = divide(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "*";
    }
    else if (displayIsEmpty() === false) {
        currentInput = false;
        operator = "*";
        expressionComplete = true;
    }
});

//ButtonNine (4)
const buttonNine= document.querySelector("#button-9");
buttonNine.innerHTML = "4";

buttonNine.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 4;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "4";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 4;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "4";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonTen (5)
const buttonTen = document.querySelector("#button-10");
buttonTen.innerHTML = "5";

buttonTen.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 5;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "5";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 5;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "5";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonEleven (6)
const buttonEleven= document.querySelector("#button-11");
buttonEleven.innerHTML = "6";

buttonEleven.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 6;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "6";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 6;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "6";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonTwelve (-)
const buttonTwelve = document.querySelector("#button-12");
buttonTwelve.innerHTML = "-";
buttonTwelve.classList.add("calc-button-blue");

buttonTwelve.addEventListener("click", () => {
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        firstNum = add(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "-"
    }
    else if (operator === '-') {
        display.innerHTML = `${subtract(firstNum, secondNum)}`;
        firstNum = subtract(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "-";
    }
    else if (operator === '*') {
        display.innerHTML = `${multiply(firstNum, secondNum)}`;
        firstNum = multiply(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "-";
    }
    else if (operator === '/') {
        display.innerHTML = `${divide(firstNum, secondNum)}`;
        firstNum = divide(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "-";
    }
    else if (displayIsEmpty() === false) {
        currentInput = false;
        operator = "-";
        expressionComplete = true;
    }
});

//ButtonThirteen (1)
const buttonThirteen = document.querySelector("#button-13");
buttonThirteen.innerHTML = "1";

buttonThirteen.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 1;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "1";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 1;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "1";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonFourteen (2)
const buttonFourteen = document.querySelector("#button-14");
buttonFourteen.innerHTML = "2";

buttonFourteen.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 2;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "2";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 2;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "2";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonFifteen (3)
const buttonFifteen= document.querySelector("#button-15");
buttonFifteen.innerHTML = "3";

buttonFifteen.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 3;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "3";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 3;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "3";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonSixteen (+)
const buttonSixteen = document.querySelector("#button-16");
buttonSixteen.innerHTML = "+";
buttonSixteen.classList.add("calc-button-blue");

buttonSixteen.addEventListener("click", () => {
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        firstNum = add(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "+"
    }
    else if (operator === '-') {
        display.innerHTML = `${subtract(firstNum, secondNum)}`;
        firstNum = subtract(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "+";
    }
    else if (operator === '*') {
        display.innerHTML = `${multiply(firstNum, secondNum)}`;
        firstNum = multiply(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "+";
    }
    else if (operator === '/') {
        display.innerHTML = `${divide(firstNum, secondNum)}`;
        firstNum = divide(firstNum, secondNum);
        expressionComplete = true;
        secondNum = 0;
        operator = "+";
    }
    else if (displayIsEmpty() === false) {
        currentInput = false;
        operator = "+";
        expressionComplete = true;
    }
});

//ButtonSeventeen (0)
const buttonSeventeen = document.querySelector("#button-17");
buttonSeventeen.innerHTML = "0";

buttonSeventeen.addEventListener("click", () => {
    if (displayIsEmpty() && expressionComplete === false) {
        firstNum = 0;
        currentInput = true;
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === false) {
        let stringNum = String(firstNum);
        let newStringNum = stringNum + "0";
        firstNum = parseInt(newStringNum);
        display.innerHTML = `${firstNum}`;
    }
    else if (displayIsEmpty() && expressionComplete === true) {
        secondNum = 0;
        currentInput = true;
        display.innerHTML = `${secondNum}`;
    }
    else if (displayIsEmpty() === false && expressionComplete === true) {
        let stringNum = secondNum.toString();
        let newStringNum = stringNum + "0";
        secondNum = parseInt(newStringNum);
        display.innerHTML = `${secondNum}`
    }
});

//ButtonEighteen (=)
const buttonEighteen= document.querySelector("#button-18");
buttonEighteen.innerHTML = "=";

buttonEighteen.addEventListener("click", () => {

    //Calls correct function based on operand, and resets currentInput and expressionComplete so as to terminate the current expression
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        currentInput = false;
        expressionComplete = false;
        firstNum = 0;
        secondNum = 0;
        operator = null;
    }
    else if (operator === '-') {
        display.innerHTML = `${subtract(firstNum, secondNum)}`;
        currentInput = false;
        expressionComplete = false;
        firstNum = 0;
        secondNum = 0;
        operator = null;
    }
    else if (operator === '*') {
        display.innerHTML = `${multiply(firstNum, secondNum)}`;
        currentInput = false;
        expressionComplete = false;
        firstNum = 0;
        secondNum = 0;
        operator = null;
    }
    else if (operator === '/') {
        display.innerHTML = `${divide(firstNum, secondNum)}`;
        currentInput = false;
        expressionComplete = false;
        firstNum = 0;
        secondNum = 0;
        operator = null;
    }
});


function add(m, n) {
    return m + n;
}

function subtract(m, n) {
    return m - n;
}

function multiply(m, n) {
    return m * n;
}

function divide(m, n) {
    return m / n;
}

function displayIsEmpty() {
    if (currentInput === false) {
        return true;
    }
    return false;
}




