function generateRandomEquation(){
  return `${Math.floor(Math.random() * 100)}x + ${Math.floor(Math.random() * 100)} = ${Math.floor(Math.random() * 1000)}`;
}

console.log(generateRandomEquation());
