let marcadorX = document.querySelector(".x"); // Definição do marcador de X
let marcadorO = document.querySelector(".o"); // Definição do marcador de O
let boxes = document.querySelectorAll(".box"); // Caixas onde os marcadores serão inseridos
let buttons = document.querySelectorAll("#buttons-container button"); // Definição dos botões
let messageContainer = document.querySelector("#message"); // Mensagem de informação do vencedor
let messageText = document.querySelector("#message p"); // Texto da mensagem de vencedor
let secondPlayer; // Definição do segundo jogador (IA ou Pessoa)
let player1 = 0; // Contador de jogadas do jogador 1
let player2 = 0; // Contador de jogadas do jogador 2

// Validação de quem é a vez da jogada
function validadorJogada(player1, player2) {
    if (player1 == player2) { // Vez do jogador 'X'
        elemento = marcadorX;
    } else { // Vez do jogador 'O'
        elemento = marcadorO; 
    }
    return elemento;
}

// Adiciona quem fez a ultima jogada
function computaJogada(jogador1, jogador2) {
    if (jogador1 == jogador2) {
        player1++;
    } else {
        player2++;
    }
}

// Adicionando o evento de click dentro das boxes
for (let index = 0; index < boxes.length; index++) {

    // Quando alguem clicar na caixa
    boxes[index].addEventListener("click", function () {

        let elemento = validadorJogada(player1, player2);

        if (this.childNodes.length == 0) { // Valida de dentro da box esta vazio

            let cloneElemento = elemento.cloneNode(true); // Cria um clone do elemento
            this.appendChild(cloneElemento); // Inseri o elemento dentro da box
    
            computaJogada(player1, player2);
        }
    });
}
