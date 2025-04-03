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

//Brute force adjusting innerHTML; will optimize to a loop later
const buttonOne = document.querySelector("#button-1");
buttonOne.innerHTML = "AC";
buttonOne.classList.add("calc-button-orange");

const buttonTwo = document.querySelector("#button-2");
buttonTwo.innerHTML = "+ / -";
buttonTwo.classList.add("calc-button-orange");

const buttonThree = document.querySelector("#button-3");
buttonThree.innerHTML = ".";
buttonThree.classList.add("calc-button-orange");

const buttonFour = document.querySelector("#button-4");
buttonFour.innerHTML = "/";
buttonFour.classList.add("calc-button-blue");

const buttonFive = document.querySelector("#button-5");
buttonFive.innerHTML = "7";

const buttonSix = document.querySelector("#button-6");
buttonSix.innerHTML = "8";

const buttonSeven = document.querySelector("#button-7");
buttonSeven.innerHTML = "9";

const buttonEight = document.querySelector("#button-8");
buttonEight.innerHTML = "*";
buttonEight.classList.add("calc-button-blue");

const buttonNine= document.querySelector("#button-9");
buttonNine.innerHTML = "4";

const buttonTen = document.querySelector("#button-10");
buttonTen.innerHTML = "5";

const buttonEleven= document.querySelector("#button-11");
buttonEleven.innerHTML = "6";

const buttonTwelve = document.querySelector("#button-12");
buttonTwelve.innerHTML = "-";
buttonTwelve.classList.add("calc-button-blue");

const buttonThirteen = document.querySelector("#button-13");
buttonThirteen.innerHTML = "1";

const buttonFourteen = document.querySelector("#button-14");
buttonFourteen.innerHTML = "2";

const buttonFifteen= document.querySelector("#button-15");
buttonFifteen.innerHTML = "3";

const buttonSixteen = document.querySelector("#button-16");
buttonSixteen.innerHTML = "+";
buttonSixteen.classList.add("calc-button-blue");

const buttonSeventeen = document.querySelector("#button-17");
buttonSeventeen.innerHTML = "0";

const buttonEighteen= document.querySelector("#button-18");
buttonEighteen.innerHTML = "=";





