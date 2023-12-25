function calculateBalance(incomes, expenses) {
  const readlineSync = require('readline-sync');
  const taskI = readlineSync.question('Доходы: ');
  const taskE = readlineSync.question('Расходы: ');
  return `Баланс: ${taskI - taskE} рублей`;
}

console.log(calculateBalance());
