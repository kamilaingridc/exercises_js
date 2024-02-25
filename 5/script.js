function somaDosCubos() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += Math.pow(i, 3); 
    }

    return soma;
}

console.log("A soma dos cubos dos primeiros 10 números naturais é:", somaDosCubos());
