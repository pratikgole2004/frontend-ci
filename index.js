const API_BASE_URL = "https://ci-goleproject.onrender.com";
document.getElementById('prediction-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const features = [];
    for (let i = 3; i <= 22; i++) {
        const featureValue = parseFloat(document.getElementById(`feature${i}`).value);
        features.push(featureValue);
    }

    try {
        const response = await fetch(`${API_BASE_URL}/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ features })
        });

        const data = await response.json();
        document.getElementById('result').textContent = `Prediction: ${data.prediction}, Probability: ${data.probability}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    }
});
