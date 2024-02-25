function jogarPedraPapelTesoura() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaUsuario = "pedra"; // O usuário sempre escolhe "pedra"
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    alert(`Você escolheu: ${escolhaUsuario}`);
    alert(`O computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        alert("Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        alert("Você ganhou!");
    } else {
        alert("Você perdeu!");
    }
}

jogarPedraPapelTesoura();
