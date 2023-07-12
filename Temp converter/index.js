function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    
    if (fahrenheitInput.value === "") {
      alert("Please enter a valid Fahrenheit temperature.");
      return;
    }
    
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    
    celsiusInput.value = celsius.toFixed(2);
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + "°F = " + celsius.toFixed(2) + "°C";
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value === "") {
      alert("Please enter a valid Celsius temperature.");
      return;
    }
    
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    
    fahrenheitInput.value = fahrenheit.toFixed(2);
    document.getElementById("result").innerHTML = celsius.toFixed(2) + "°C = " + fahrenheit.toFixed(2) + "°F";
  }