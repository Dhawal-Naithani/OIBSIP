function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result = 0;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
        document.getElementById('result').style.color = 'white';
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputValue;
    } else if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
            result = (inputValue * 9 / 5) + 32;
        } else if (outputUnit === 'Kelvin') {
            result = inputValue + 273.15;
        }
    } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
            result = (inputValue - 32) * 5 / 9;
        } else if (outputUnit === 'Kelvin') {
            result = (inputValue - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
            result = inputValue - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
            result = (inputValue - 273.15) * 9 / 5 + 32;
        }
    }

    let convertedToCelsius = 0;
    if (outputUnit === 'Celsius') {
        convertedToCelsius = result;
    } else if (outputUnit === 'Fahrenheit') {
        convertedToCelsius = (result - 32) * 5 / 9;
    } else if (outputUnit === 'Kelvin') {
        convertedToCelsius = result - 273.15;
    }

    let color;
    if (convertedToCelsius <= 5) {
        color = 'blue';
    }
    else if (convertedToCelsius <=15) {
        color = 'lightblue';
    } 
    else if (convertedToCelsius<=25) {
        color = 'white';
    } 
    else if (convertedToCelsius <= 35) {
        color = 'lightcoral';
    } 
    else {
        color = 'red';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result: ${result.toFixed(2)} ${outputUnit === 'Celsius' ? '°C' : outputUnit === 'Fahrenheit' ? '°F' : 'K'}`;
    resultElement.style.color = color;
}
