const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Täringute arv: ', (dice) => {
  for (let i = 1; i <= dice; i++) {

  console.log(Math.ceil(Math.random() * 6));
  }
  
  rl.close();
});