function calculateRhombus() {
    const d1 = getInputValueById('rhombus_d1');
    const d2 = getInputValueById('rhombus_d2');
    const area = 0.5 * d1 * d2;
    setInnerText('Rhombus', area);
}