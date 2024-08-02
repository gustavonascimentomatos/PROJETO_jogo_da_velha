let marcadorX = document.querySelector(".x"); // Definição do marcador de X
let marcadorO = document.querySelector(".o"); // Definição do marcador de O
let boxes = document.querySelectorAll(".box"); // Caixas onde os marcadores serão inseridos
let buttons = document.querySelectorAll("#buttons-container button"); // Definição dos botões
let messageContainer = document.querySelector("#message"); // Mensagem de informação do vencedor
let messageText = document.querySelector("#message p"); // Texto da mensagem de vencedor
let secondPlayer; // Definição do segundo jogador (IA ou Pessoa)
let player1 = 0; // Contador de jogadas do jogador 1
let player2 = 0; // Contador de jogadas do jogador 2
let winner = 0;

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

// Validação se houve vencedor
function checkWinCondition(){
    winner = 0;
    let block1 = document.getElementById("block-1");
    let block2 = document.getElementById("block-2");
    let block3 = document.getElementById("block-3");
    let block4 = document.getElementById("block-4");
    let block5 = document.getElementById("block-5");
    let block6 = document.getElementById("block-6");
    let block7 = document.getElementById("block-7");
    let block8 = document.getElementById("block-8");
    let block9 = document.getElementById("block-9");

    // Validação 1ª linha horizontal
    if (block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length > 0 ) {

        let block1Child = block1.childNodes[0].className;
        let block2Child = block2.childNodes[0].className;
        let block3Child = block3.childNodes[0].className;

        if (block1Child == "x" && block2Child == "x" && block3Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block1Child == "o" && block2Child == "o" && block3Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 2ª linha horizontal
    if (block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length > 0 ) {

        let block4Child = block4.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;

        if (block4Child == "x" && block5Child == "x" && block6Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block4Child == "o" && block5Child == "o" && block6Child == "o") {
            winner = 1;
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 3ª linha horizontal
    if (block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length > 0 ) {

        let block7Child = block7.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block7Child == "x" && block8Child == "x" && block9Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block7Child == "o" && block8Child == "o" && block9Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 1ª linha vertical
    if (block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length > 0 ) {

        let block1Child = block1.childNodes[0].className;
        let block4Child = block4.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block1Child == "x" && block4Child == "x" && block7Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block1Child == "o" && block4Child == "o" && block7Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 2ª linha vertical
    if (block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length > 0 ) {

        let block2Child = block2.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;

        if (block2Child == "x" && block5Child == "x" && block8Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block2Child == "o" && block5Child == "o" && block8Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 3ª linha vertical
    if (block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length > 0 ) {

        let block3Child = block3.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block3Child == "x" && block6Child == "x" && block9Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block3Child == "o" && block6Child == "o" && block9Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Validação 1ª linha diagonal
    if (block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length > 0 ) {

        let block1Child = block1.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block1Child == "x" && block5Child == "x" && block9Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block1Child == "o" && block5Child == "o" && block9Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }
    
    // Validação 2ª linha diagonal
    if (block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length > 0 ) {

        let block3Child = block3.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block3Child == "x" && block5Child == "x" && block7Child == "x") {
            winner = 1;
            declararWinner("x");
        } else if (block3Child == "o" && block5Child == "o" && block7Child == "o") {
            winner = 1;
            declararWinner("o");
        }
    }

    // Velha
    let counterJogadas = 0;
    
    for (let index = 0; index < boxes.length; index++) {
        if (boxes[index].childNodes[0] != undefined) {
            counterJogadas++;
        }
    }

    if (counterJogadas == 9 && winner == 0) {
        declararWinner("velha");
    }
}

// Declaração Vencedor, exibição da mensagem de vencedor
function declararWinner(winner) {

    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardO = document.querySelector("#scoreboard-2");
    let messageWinner = "";

    if (winner == "x") {
        messageWinner = "Jogador 1 venceu!";
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        
    } else if (winner == "o") {
        messageWinner = "Jogador 2 venceu!";
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        
    } else {
        messageWinner = "Deu velha!";
    }

    messageText.innerHTML = messageWinner;
    messageContainer.classList.remove("hide");

    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 2500);

    player1 = 0;
    player2 = 0;

    removeJogadas()
}

// Limpa tela
function removeJogadas(){
    let boxesToRemove = document.querySelectorAll(".box div");

    setTimeout(function() {
        for (let index = 0; index < boxesToRemove.length; index++) {
            boxesToRemove[index].parentNode.removeChild(boxesToRemove[index]);
        }
    }, 2500);
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

            checkWinCondition();

        }
    });
}
