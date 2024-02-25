function iniciarJogo() {
    alert("Pense em um número de 1 a 100 e eu vou tentar adivinhar!");

    let min = 1;
    let max = 100;
    let acertou = false;

    while (!acertou) {
        let chute = Math.floor(Math.random() * (max - min + 1)) + min;
        let resposta = prompt(`É ${chute}? (Digite 's' se eu acertei, ou outra tecla se não)`);

        if (resposta === 's') {
            acertou = true;
            alert(`Acertei! Seu número é ${chute}.`);
        } else {
            alert("Vou tentar de novo.");
        }
    }
}

iniciarJogo();
