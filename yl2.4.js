const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Kas soovite istekoha valida ise ("ise") või loosida ("loos"): ', (valik) => {
	if (valik == "ise"){
		rl.question('Kas soovite istuda akna ("aken") ääres või mitte ("muu"): ', (koht) => {
			if (koht == "aken"){
				console.log("Valisite ise. Aknakoht");
				rl.close();
			} else if (koht == "muu"){
				console.log("Valisite ise. Vahekäigukoht");
				rl.close();
			};
		});
	} else if (valik == "loos"){
		var number = Math.floor(Math.random()*3)

		if (number == 0){
			console.log("Istekoht loositi. Aknakoht");
			rl.close();
		} else if (number == 1){
			console.log("Istekoht loositi. Vahekäigukoht");
			rl.close();
		} else if (number == 2){
			console.log("Istekoht loositi. Vahekäigukoht");
			rl.close();
		};
	};
});