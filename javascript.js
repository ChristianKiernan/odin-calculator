//Global variables
let fistNum;
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
    firstNum = 7;
    display.innerHTML = `${firstNum}`;
});

//ButtonSix (8)
const buttonSix = document.querySelector("#button-6");
buttonSix.innerHTML = "8";

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

//ButtonSeventeen (0)
const buttonSeventeen = document.querySelector("#button-17");
buttonSeventeen.innerHTML = "0";

//ButtonEighteen (=)
const buttonEighteen= document.querySelector("#button-18");
buttonEighteen.innerHTML = "=";



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





