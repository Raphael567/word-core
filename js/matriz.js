const linhas = 25;
const colunas = 25;

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const palavras = [
    "CPU",
    "ULA",
    "REGISTRADORES",
    "RAM",
    "ROM",
    "EPROM",
    "FLASH",
    "MASSA",
    "DMA",
    "CHIPSELECT",
    "ADRESSBUS",
    "DATABUS",
    "INTELCINCO",
    "INTELSETE",
    "DUALCORE",
    "QUADCORE"
];

let matriz = [];
let palavrasX = [];
let palavrasY = [];

//Preenchendo matriz com ''
function preencherMatrizVazia(matriz) {
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = '';
        }
    }
}

function sortearPalavras(palavras) {
    while (palavrasX.length != palavras.length / 2) {
        let indexPalavra = Math.floor(Math.random() * palavras.length);

        if (!palavrasX.includes(palavras[indexPalavra])) palavrasX.push(palavras[indexPalavra]);
    }

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];

        if (!palavrasX.includes(palavra)) palavrasY.push(palavra);
    }

    console.log("Palavras na posição X: \n" + palavrasX.join(', \n') + "\n\nPalavras na posição Y: \n" + palavrasY.join(', \n'));
}

function preencherPalavrasPosX(matriz, palavrasX) {
    for (let i = 0; i < palavrasX.length; i++) {
        let palavra = palavrasX[i];
        let linha = i;

        let pos_x = Math.floor(Math.random() * (colunas - palavra.length + 1));

        for (let k = 0; k < palavra.length; k++) {
            matriz[linha][pos_x + k] = palavra[k];
        }
    }
}

function preencherPalavrasPosY(matriz, palavrasY) {
    for (let i = 0; i < palavrasY.length; i++) {
        let palavra = palavrasY[i];
        let encaixou = false;

        while (!encaixou) {
            let coluna = i + 10;
            let pos_y = Math.floor(Math.random() * (linhas - palavra.length + 1));

            let podeInserir = true;

            for (let k = 0; k < palavra.length; k++) {
                if (matriz[pos_y + k][coluna] != '' && matriz[pos_y + k][coluna] != palavra[k]) {
                    podeInserir = false;
                    break;
                }
            }

            if (podeInserir) {
                for (let k = 0; k < palavra.length; k++) {
                    matriz[pos_y + k][coluna] = palavra[k];
                }

                encaixou = true;
            }
        }
    }
}

//Substituindo '' por letras aleatórias
function preencherMatrizLetras(matriz, letras) {
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (matriz[i][j] == '') {
                let nova_letra = Math.floor(Math.random() * letras.length);
                matriz[i][j] = letras[nova_letra];
            }
        }
    }
}

function montarMatriz(matriz, palavras, palavrasX, palavrasY, letras) {
    preencherMatrizVazia(matriz);
    sortearPalavras(palavras);
    preencherPalavrasPosX(matriz, palavrasX);
    preencherPalavrasPosY(matriz, palavrasY);
    preencherMatrizLetras(matriz, letras);
}
