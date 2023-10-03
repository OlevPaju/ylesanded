const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Sisestage kirja suurus: ', (suurus) => {
	rl.question('Sisestage kirja teema pealkiri: ', (pealkiri) => {
		rl.question('Kas kirjaga on kaasas fail: ', (fail) => {
			if (pealkiri == ""){
				console.log("Kiri on spämm");
				rl.close();
			} else {
				if (fail == "jah"){
					rl.question('Kas fail on suurem kui 1MB (jah/ei)?', (failSuurus) => {
						if (failSuurus == "jah"){
							console.log("Kiri on spämm");
							rl.close();
						} else if (failSuurus == "ei"){
							console.log("Kiri on spämm");
							rl.close();
						}
					});
				} else if (fail == "ei"){
					console.log("Kiri ei ole spämm");
					rl.close();
				};
			};
		});
	});
});