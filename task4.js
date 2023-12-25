function calculateRectangleProperties(width, height) {
  const readlineSync = require('readline-sync');
  const taskW = readlineSync.question('Ширина: ');
  const taskH = readlineSync.question('Высота: ');
  return `P = ${(Number(taskH) + Number(taskW)) * 2} см\nS = ${Number(taskH) * Number(taskW)} см`;   
}

console.log(calculateRectangleProperties());
