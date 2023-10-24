const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage mitu korda äratada: ', (number) => {
  for (let mitu = 0; mitu < number; mitu++) {
  console.log("Tõuse ja sära");
  };
  rl.close();
});
