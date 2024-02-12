function calculateRectangle() {
    const rectangleWidthInput = document.getElementById('rectangle_width');
    const rectangleWidthString = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthString);
    rectangleWidthInput.value = '';

    const rectangleHeightInput = document.getElementById('rectangle_length');
    const rectangleHeightString = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightString);
    rectangleHeightInput.value = '';

    const rectangleArea = width * height;

    const areaSection = document.getElementById('area_section');
    const p = document.createElement('p');
    p.innerText = `
        The Area of the Rectangle is ${rectangleArea}
    `
    p.classList.add('text-2xl', 'font-medium');
    areaSection.appendChild(p);
}