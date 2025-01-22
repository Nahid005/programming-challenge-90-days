//Rhombus Area Calculation Calculators 
function rhombusAreaCalculation() {
    const base = getInputValue("rhombus-base");
    const height = getInputValue("rhombus-height");

    const area = base * height;
    setAreaResult('show-rhombus-area', area);
}

//Circle Area Claculation Calculator
function circleAreaCalculation() {
    const radius = getInputValue('circle-radius');

    const result = 3.1416 * radius * radius;
    setAreaResult('show-circle-area', result);
}

//Square Area Calculation Calculator
function squareAreaCalculation() {
    const length = getInputValue('square-input');

    const result = length * length;
    setAreaResult('show-square-area', result);
}


function getInputValue(id) {
    const element = document.getElementById(id);
    const inputValue = parseFloat(element.value);

    return inputValue;
}

function setAreaResult(id, area) {
    const showAreaValue = document.getElementById(id);

    if(area) {
        showAreaValue.innerHTML = `<strong> Rhombus Area = ${area} </strong>`
    }
}

