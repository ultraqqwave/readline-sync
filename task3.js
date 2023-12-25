function calculateDiscount(price, discountPercentage) {
  const readlineSync = require('readline-sync');
  const taskP = readlineSync.question('Цена: ');
  const taskD = readlineSync.question('Скидка: ');
  return `Конечная стоимость: ${taskP * (1 - (taskD / 100))} рублей`;
}
  
console.log(calculateDiscount());
