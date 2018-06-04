var prompt = require('prompt');
prompt.start();

prompt.get(['numero'] function (err, result)) {
	numero = result.numero
		if (numero % 2 === 0) {
		console.log(numero + ' es par');
 	} else { 
		console.log(numero + ' es impar');
	}
}
