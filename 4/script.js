function imprimirTabuada() {
    let numero = parseInt(prompt("Digite um número de 1 a 9 para ver sua tabuada:"));

    if (numero >= 1 && numero <= 9) {
        console.log(`Tabuada do ${numero}:`);

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } else {
        console.log("Número inválido. Por favor, digite um número de 1 a 9.");
    }
}

imprimirTabuada();
