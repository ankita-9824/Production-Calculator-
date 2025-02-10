function setLineSpeed() {
    const productSelect = document.getElementById('product-name');
    const lineSpeed = productSelect.value;
}

function calculate() {
    const lineSpeed = parseFloat(document.getElementById('product-name').value);
    const gap = 100 / 1000;  // Default gap in meters
    const panelLength = parseFloat(document.getElementById('panel-length').value) / 1000;
    const glassWidth = parseFloat(document.getElementById('glass-width').value) / 1000;
    const glassThickness = parseFloat(document.getElementById('glass-thickness').value) / 1000;
    const litesPerBox = parseFloat(document.getElementById('lites-per-box').value);

    const cycleLength = panelLength + gap;
    const cycleTimeMinutes = cycleLength / lineSpeed;
    const cycleTimeSeconds = cycleTimeMinutes * 60;
    const panelsPerHour = 60 / cycleTimeMinutes;
    const totalSquareMeters = panelsPerHour * glassWidth * panelLength;
    const totalVolumeCubicMeters = totalSquareMeters * glassThickness;
    const densityOfGlass = 2500;
    const totalWeightTons = (totalVolumeCubicMeters * densityOfGlass) / 1000;
    const boxesPerHour = panelsPerHour / litesPerBox;

    document.getElementById('results').innerHTML = `
        <div class="results-container">
            <p><strong>Cycle Time:</strong> ${cycleTimeSeconds.toFixed(2)} seconds</p>
            <p><strong>Number of Panels Produced per Hour:</strong> ${panelsPerHour.toFixed(2)}</p>
            <p><strong>Total Square Meters Produced per Hour:</strong> ${totalSquareMeters.toFixed(2)} m²</p>
            <p><strong>Total Weight of Glass Produced per Hour:</strong> ${totalWeightTons.toFixed(2)} tons</p>
            <p><strong>Number of Boxes Produced per Hour:</strong> ${boxesPerHour.toFixed(2)}</p>
        </div>
    `;
}
