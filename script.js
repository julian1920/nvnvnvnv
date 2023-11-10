function calculateWinRate() {
    const totalMatches = parseInt(document.getElementById('totalMatches').value);
    const wins = parseInt(document.getElementById('wins').value);

    if (totalMatches && wins) {
        const winRate = (wins / totalMatches) * 100;
        document.getElementById('winRate').textContent = winRate.toFixed(2) + '%';
    } else {
        alert("Please enter valid values for total matches and wins.");
    }
}
