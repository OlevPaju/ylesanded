const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Sisestage ainepunktide arv: ', (ainepunktid) => {
	rl.question('Sisestage nädalate arv: ', (aeg) => {
		var punktid = ainepunktid*26;
		var ajakulu = Math.round(punktid/aeg);
		console.log(ajakulu);
		rl.close();
	});
});