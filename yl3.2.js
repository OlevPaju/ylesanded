const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage ringide arv: ', (ringid) => {
  const porgandid = porganditeArv(ringid);

  console.log("Jänesepoeg saab " + porgandid + " porgandit.");
  rl.close()
});

function porganditeArv(ringid) {
  let porgandid = 0;

  for (let ring = 2; ring <= ringid; ring += 2){

    porgandid += ring;

  }
  return porgandid
}