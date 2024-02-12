function calculateTriangle() {
    const triangleBaseInput = document.getElementById('triangle_base');
    const triangleBaseString = triangleBaseInput.value;
    const base = parseFloat(triangleBaseString);
    triangleBaseInput.value = '';

    const triangleHeightInput = document.getElementById('triangle_height');
    const triangleHeightString = triangleHeightInput.value;
    const height = parseFloat(triangleHeightString);
    triangleHeightInput.value = '';

    const triangleArea = 0.5 * base * height;

    const areaSection = document.getElementById('area_section');
    const p = document.createElement('p');
    p.innerText = `
        The Area of the Triangle is ${triangleArea}
    `
    p.classList.add('text-2xl', 'font-medium');
    areaSection.appendChild(p);
}