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
    const calcButtonDiv = document.createElement("div");
    calcButtonDiv.classList.add("calc-button");
    buttonDiv.appendChild(calcButtonDiv);
}