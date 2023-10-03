const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Sisestage õhutemperatuur: ', (temp) => {
	if (temp <= 0){
		console.log('On jäätumise ohtu')
	} else {
		console.log('Ei ole jäätumise ohtu.')
	};
	rl.close();
});