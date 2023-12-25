function calculateTime(distance, speed) {
  const readlineSync = require('readline-sync');
  const taskD = readlineSync.question('Расстояние: ');
  const taskS = readlineSync.question('Средняя скорость: ');
  let minutes = taskD * 60 / taskS;
  let hours = 0;
  while (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }
  return `${hours}ч. ${minutes}м.`;
}

console.log(calculateTime());
