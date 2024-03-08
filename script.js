function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    let convertedTemperature;
  
    if (unitFrom === unitTo) {
      alert("Please select a different conversion unit.");
      return;
    }
    switch (unitFrom) {
      case "celsius":
        convertedTemperature = celsiusTo(temperatureInput, unitTo);
        break;
      case "fahrenheit":
        convertedTemperature = fahrenheitTo(temperatureInput, unitTo);
        break;
      case "kelvin":
        convertedTemperature = kelvinTo(temperatureInput, unitTo);
        break;
      default:
        break;
    }
  
    document.getElementById("result").textContent = `${convertedTemperature.toFixed(2)}° ${unitTo}`;
  }
  
  function celsiusTo(celsius, unitTo) {
    switch (unitTo) {
      case "fahrenheit":
        return (celsius * 9/5) + 32;
      case "kelvin":
        return celsius + 273.15;
      default:
        return celsius;
    }
  }
  
  function fahrenheitTo(fahrenheit, unitTo) {
    switch (unitTo) {
      case "celsius":
        return (fahrenheit - 32) * (5/9);
      case "kelvin":
        return (fahrenheit - 32) * (5/9) + 273.15;
      default:
        return fahrenheit;
    }
  }
  
  function kelvinTo(kelvin, unitTo) {
    switch (unitTo) {
      case "celsius":
        return kelvin - 273.15;
      case "fahrenheit":
        return (kelvin - 273.15) * 9/5 + 32;
      default:
        return kelvin;
    }
  }
  