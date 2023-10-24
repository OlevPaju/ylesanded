const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let apples = 14

rl.question("Mitu pöialpoissi tahab õuna:  ", arv =>{
for (let i = 1; i <= arv; i++) {
  let ounPoisile = Math.ceil(Math.random() *2)
  console.log(ounPoisile);
  apples = apples - ounPoisile
  }
  console.log("Lumivalgekesele jai " + apples);
  rl.close();
})