function incomeTaxCalculator(income) {
  const readlineSync = require('readline-sync');
  const task = readlineSync.question('Ваш доход: ');
  return `Налогов наработано на ${task * 0.15} рублей`;
}

console.log(incomeTaxCalculator());
