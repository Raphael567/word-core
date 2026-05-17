// Controle do estado da partida
let selecionando = false;
let selecaoAtual = [];
let palavrasEncontradas = [];


// Inicia a seleção ao pressionar o mouse sobre uma célula
function iniciarSelecao(linha, coluna, celula) {
    selecionando = true;
    selecaoAtual = [];

    adicionarCelula(linha, coluna, celula);
}


// Continua selecionando enquanto o mouse é arrastado
function arrastarSelecao(linha, coluna, celula) {
    if (!selecionando) return;

    adicionarCelula(linha, coluna, celula);
}


// Adiciona uma célula à seleção atual
// Evita que a mesma célula seja adicionada duas vezes
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


// Verifica se a sequência selecionada forma uma palavra válida
function verificarPalavra() {
    let palavra = "";

    for (let i = 0; i < selecaoAtual.length; i++) {
        palavra += selecaoAtual[i].letra;
    }

    if (palavras.includes(palavra) && !palavrasEncontradas.includes(palavra)) {
        palavrasEncontradas.push(palavra);

        marcarPalavraEncontrada(palavra);

        // Mantém a palavra destacada no tabuleiro
        for (let i = 0; i < selecaoAtual.length; i++) {
            selecaoAtual[i].elemento.classList.add("encontrada");
        }

        // Verifica condição de vitória
        if (palavrasEncontradas.length == palavras.length) {
            mostrarVitoria();
        }

    } else {
        // Remove destaque caso a seleção esteja incorreta
        for (let i = 0; i < selecaoAtual.length; i++) {
            selecaoAtual[i].elemento.classList.remove("selecionada");
        }
    }

    selecaoAtual = [];
}


// Finaliza a seleção ao soltar o mouse
function finalizarSelecao() {
    selecionando = false;
    verificarPalavra();
}


// Risca a palavra encontrada na lista superior
function marcarPalavraEncontrada(palavra) {
    const itens = document.querySelectorAll(".palavra");

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].innerHTML == palavra) {
            itens[i].style.textDecoration = "line-through";
            itens[i].style.opacity = "0.5";
        }
    }
}


// Exibe a tela de vitória quando todas as palavras forem encontradas
function mostrarVitoria() {
    const mensagem = document.createElement("div");

    mensagem.classList.add("vitoria");

    mensagem.innerHTML = `
        <h2>Parabéns!</h2>
        <p>Você encontrou todas as palavras.</p>
        <button onclick="reiniciarJogo()">Jogar novamente</button>
    `;

    document.body.appendChild(mensagem);
}


// Reinicia o jogo recarregando a página
function reiniciarJogo() {
    location.reload();
}


// Inicializa uma nova partida
function iniciarJogo() {
    montarMatriz(matriz, palavras, palavrasX, palavrasY, letras);

    renderizarListaPalavras();
    renderizarTabuleiro();
}


// Executa o jogo ao carregar a aplicação
iniciarJogo();
