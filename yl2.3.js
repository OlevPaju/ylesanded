const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Sisestage oma vanus: ', (vanus) => {
	rl.question('Sisestage oma sugu (m/n): ', (sugu) => {
			let sagedus;

			if (sugu == 'm' || sugu == 'M'){
				sagedus = 220 - vanus;
			} else if (sugu == 'n'|| sugu == 'N'){
				sagedus = 206 - vanus*0.88;
			};
			console.log('=====================================')
			console.log('| 1 - Tervisetreening               |')
			console.log('| 2 - Põhivastupidavuse treening    |')
			console.log('| 3 - Intensiivne aeroobne treening |')
			console.log('=====================================')
		rl.question('Sisestage treeningu tüüp (1/2/3): ', (treening) => {
			let minSagedus;
			let maxSagedus;

			if (treening == 1){
				minSagedus = Math.round(sagedus*0.5);
				maxSagedus = Math.round(sagedus*0.7);
			} else if (treening == 2){
				minSagedus = Math.round(sagedus*0.7);
				maxSagedus = Math.round(sagedus*0.8);
			} else if (treening == 3){
				minSagedus = Math.round(sagedus*0.8);
				maxSagedus = Math.round(sagedus*0.87);
			} else {
				console.log('Midagi läks valesti!');
				rl.close();
			}
			console.log('Pulsisagedus peaks olema vahemikus ' + minSagedus + ' kuni ' + maxSagedus);
			rl.close();
		});
	});
});