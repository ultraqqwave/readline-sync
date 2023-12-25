function calculateDistance(x1, y1, x2, y2) {
  const readlineSync = require('readline-sync');
  const taskx1 = readlineSync.question('x1 = ');
  const taskx2 = readlineSync.question('x2 = ');
  const tasky1 = readlineSync.question('y1 = ');
  const tasky2 = readlineSync.question('y2 = ');
  return `L = ${Math.sqrt(((Number(taskx2) - Number(taskx1)) ** 2) - ((Number(tasky2) - Number(tasky1)) ** 2))} см`;
}

console.log(calculateDistance());
