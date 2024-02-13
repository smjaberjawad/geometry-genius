function calculatePentagon() {
    const p = getInputValueById('pentagon_p');
    const b = getInputValueById('pentagon_b');
    const area = 0.5 * p * b;
    setInnerText('Pentagon', area);
}