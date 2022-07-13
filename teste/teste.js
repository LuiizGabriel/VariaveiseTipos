function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números!';

	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

