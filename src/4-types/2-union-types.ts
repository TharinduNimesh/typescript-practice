// celcius can be a number or a string
function celciusToFahrenheit(celcius: number | string): number {
  if (typeof celcius === "string") {
    celcius = parseInt(celcius);
  }
  return (celcius * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(30)); // OK: 86
console.log(celciusToFahrenheit("30")); // OK: 86
