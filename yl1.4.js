const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Sisestage oma nimi: ', (nimi) => {
	rl.question('Sisestage lubatud kiirus (km/h): ', (lubatudKiirus) => {
		rl.question('Sisestage tegelik kiirus (km/h): ', (tegelikKiirus) => {
			var trahv = (tegelikKiirus - lubatudKiirus)*3;
			if (trahv > 190) {
				trahv = 190;
			};
			console.log(nimi + ', kiiruse ületamise eest on teie trahv ' + trahv + ' eurot.');
			rl.close();
		});
	});
});