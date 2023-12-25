function countWords(sentence) {
  const readlineSync = require('readline-sync');
  const task = readlineSync.question('Напиши-ка предложение ');
  let words = 0;
  for (let i = 0; i < task.length; i += 1) {
    if (task[i] === ' ' && task[i + 1] !== '-' && task[i + 2] !== ' '){
      words += 1
    }
  }
  return `В предложении ${words + 1} слов`;
}

console.log(countWords());
