//Track if the display currently holds input
let currentInput = false;

//Tracks when an operator has been pressed
let currentOperator;

//Tracks when the first experssion entered is complete
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

//ButtonEight (*)
const buttonEight = document.querySelector("#button-8");
buttonEight.innerHTML = "*";
buttonEight.classList.add("calc-button-blue");

//ButtonNine (4)
const buttonNine= document.querySelector("#button-9");
buttonNine.innerHTML = "4";

//ButtonTen (5)
const buttonTen = document.querySelector("#button-10");
buttonTen.innerHTML = "5";

//ButtonEleven (6)
const buttonEleven= document.querySelector("#button-11");
buttonEleven.innerHTML = "6";

//ButtonTwelve (-)
const buttonTwelve = document.querySelector("#button-12");
buttonTwelve.innerHTML = "-";
buttonTwelve.classList.add("calc-button-blue");

//ButtonThirteen (1)
const buttonThirteen = document.querySelector("#button-13");
buttonThirteen.innerHTML = "1";

//ButtonFourteen (2)
const buttonFourteen = document.querySelector("#button-14");
buttonFourteen.innerHTML = "2";

//ButtonFifteen (3)
const buttonFifteen= document.querySelector("#button-15");
buttonFifteen.innerHTML = "3";

//ButtonSixteen (+)
const buttonSixteen = document.querySelector("#button-16");
buttonSixteen.innerHTML = "+";
buttonSixteen.classList.add("calc-button-blue");

buttonSixteen.addEventListener("click", () => {

    //Registers the click if there is a number in the display, and updates the operator
    //Also signifies the first expression has been completed
    if (displayIsEmpty() === false) {
        currentInput = false;
        operator = "+";
        expressionComplete = true;
    }
});


//ButtonSeventeen (0)
const buttonSeventeen = document.querySelector("#button-17");
buttonSeventeen.innerHTML = "0";

//ButtonEighteen (=)
const buttonEighteen= document.querySelector("#button-18");
buttonEighteen.innerHTML = "=";

buttonEighteen.addEventListener("click", () => {
    //Calls correct function based on operand, and resets currentInput and expressionComplete so as to terminate the current expression
    if (operator === '+') {
        display.innerHTML = `${add(firstNum, secondNum)}`;
        currentInput = false;
        expressionComplete = false;
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




