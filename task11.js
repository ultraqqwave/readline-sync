function calculateEmployeeBonus(salary, performanceRating) {
  const readlineSync = require('readline-sync');
  const taskS = readlineSync.question('Зарплата: ');
  const taskP = readlineSync.question('Рейтинг: ');
  return(`Итоговая зарплата:${taskP > 8 ? taskS * 1.2 : taskS * 1.1}`); 
}

console.log(calculateEmployeeBonus());
