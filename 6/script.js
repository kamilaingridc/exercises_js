function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1; 
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (!isNaN(numero) && numero >= 0) {
    let resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é: ${resultado}`);
} else {
    console.log("Número inválido. Por favor, digite um número inteiro não negativo.");
}
