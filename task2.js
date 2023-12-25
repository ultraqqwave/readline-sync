function celsiusToFahrenheit(celsius) {
  const readlineSync = require('readline-sync');
  const task = readlineSync.question('Температура по цельсию: ');
  return `Температура по фаренгейту: ${(task * 1.8) + 32}F`;
}

console.log(celsiusToFahrenheit());
