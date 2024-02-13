function calculateEllipse() {
    const a = getInputValueById('ellipse_a');
    const b = getInputValueById('ellipse_b');
    const area = 3.1416 * a * b;
    setInnerText('Ellipse', area);
}