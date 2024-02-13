function calculateParallelogram() {
    const base = getInputValueById('parallelogram_base');
    const height = getInputValueById('parallelogram_height');
    const area = base * height;
    setInnerText('Parallelogram', area);
}