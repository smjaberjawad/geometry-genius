function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    inputField.value = '';
    return inputValue;
}

function setInnerText(shapeName, shapeArea) {
    const areaSection = document.getElementById('area_section');
    const p = document.createElement('p');
    p.innerText = `
        The Area of the ${shapeName} is ${shapeArea}
    `
    p.classList.add('text-2xl', 'font-medium');
    areaSection.appendChild(p);
}