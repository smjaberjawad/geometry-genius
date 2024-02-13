function calculateRectangle() {
    const width = getInputValueById('rectangle_width');
    const length = getInputValueById('rectangle_length');
    const area = width * length;
    setInnerText('Rectangle', area);
}