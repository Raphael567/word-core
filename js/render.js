// Renderiza o tabuleiro dinamicamente com base na matriz gerada
function renderizarTabuleiro() {
    const tabuleiro = document.getElementById("tabuleiro");
    tabuleiro.innerHTML = "";

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const celula = document.createElement("div");

            // Define a estrutura visual da célula
            celula.classList.add("celula");
            celula.innerHTML = matriz[i][j];

            // Eventos para seleção por arrasto
            celula.addEventListener("mousedown", () => iniciarSelecao(i, j, celula));
            celula.addEventListener("mouseenter", () => arrastarSelecao(i, j, celula));
            celula.addEventListener("mouseup", finalizarSelecao);

            tabuleiro.appendChild(celula);
        }
    }
}


// Renderiza a lista de palavras que o jogador deve encontrar
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


// Alterna manualmente o estado visual da célula
function selecionarCelula(linha, coluna, celula) {
    celula.classList.toggle("selecionada");

    console.log(`Linha: ${linha}, Coluna: ${coluna}`);
}
