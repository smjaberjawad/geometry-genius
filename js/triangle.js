function calculateTriangle() {
    const base = getInputValueById('triangle_base');
    const height = getInputValueById('triangle_height');
    const area = 0.5 * base * height;
    setInnerText('Triangle', area);
}