let selecionando = false;
let selecaoAtual = [];
let palavrasEncontradas = [];

function iniciarSelecao(linha, coluna, celula) {
    selecionando = true;
    selecaoAtual = [];

    adicionarCelula(linha, coluna, celula);
}

function arrastarSelecao(linha, coluna, celula) {
    if (!selecionando) return;

    adicionarCelula(linha, coluna, celula);
}

function adicionarCelula(linha, coluna, celula) {
    let existe = false;

    for (let i = 0; i < selecaoAtual.length; i++) {
        if (selecaoAtual[i].linha == linha && selecaoAtual[i].coluna == coluna) {
            existe = true;
            break;
        }
    }

    if (!existe) {
        selecaoAtual.push({
            linha: linha,
            coluna: coluna,
            letra: matriz[linha][coluna],
            elemento: celula
        });

        celula.classList.add("selecionada");
    }
}

function verificarPalavra() {
    let palavra = "";

    for (let i = 0; i < selecaoAtual.length; i++) {
        palavra += selecaoAtual[i].letra;
    }

    if (palavras.includes(palavra) && !palavrasEncontradas.includes(palavra)) {
        palavrasEncontradas.push(palavra);

        marcarPalavraEncontrada(palavra);

        for (let i = 0; i < selecaoAtual.length; i++) {
            selecaoAtual[i].elemento.classList.add("encontrada");
        }

    } else {
        for (let i = 0; i < selecaoAtual.length; i++) {
            selecaoAtual[i].elemento.classList.remove("selecionada");
        }
    }

    selecaoAtual = [];
}

function finalizarSelecao() {
    selecionando = false;
    verificarPalavra();
}

function marcarPalavraEncontrada(palavra) {
    const itens = document.querySelectorAll(".palavra");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].innerHTML == palavra) {
            itens[i].style.textDecoration = "line-through";
            itens[i].style.opacity = "0.5";
        }
    }
}

function iniciarJogo() {
    montarMatriz(matriz, palavras, palavrasX, palavrasY, letras);

    renderizarListaPalavras();
    renderizarTabuleiro();
}

iniciarJogo();
