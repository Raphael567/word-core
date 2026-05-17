function renderizarTabuleiro() {
    const tabuleiro = document.getElementById("tabuleiro");
    tabuleiro.innerHTML = "";

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const celula = document.createElement("div");

            celula.classList.add("celula");
            celula.innerHTML = matriz[i][j];

            celula.addEventListener("mousedown", () => iniciarSelecao(i, j, celula));
            celula.addEventListener("mouseenter", () => arrastarSelecao(i, j, celula));
            celula.addEventListener("mouseup", finalizarSelecao);

            tabuleiro.appendChild(celula);
        }
    }
}

function renderizarListaPalavras() {
    const lista = document.getElementById("palavras");
    lista.innerHTML = "";

    for (let i = 0; i < palavras.length; i++) {
        const item = document.createElement("div");

        item.classList.add("palavra");
        item.innerHTML = palavras[i];

        lista.appendChild(item);
    }
}

function selecionarCelula(linha, coluna, celula) {
    celula.classList.toggle("selecionada");

    console.log(`Linha: ${linha}, Coluna: ${coluna}`);
}
