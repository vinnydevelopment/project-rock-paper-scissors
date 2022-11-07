function getComputerChoice() {
    // Gera um número aleatório.
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    // Com o número gerado escolhe entre...
    // 0 = "Rock", 1 = "Paper" ou 2 = "Scissor".
    switch (randomNumber) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    let message;
    // Transformar as variaveis em lower case.
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // LÓGICA DO JOGO.

    // Se a escolha do jogador for igual a escolha do computador, retorna a mensagem "Draw!"(empate).
    if (playerSelection === computerSelection) {
        message = "Draw!";
    // Se não, compara a escolha do jogador e a escolha do computador, caso a escolha do computador seja uma condição de vitória, result recebe "Loser", caso contrário result = "Won".
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                result = "Loser";
            } else {
                result = "Won";
            }
            
        } else if (playerSelection === "paper"){
            if (computerSelection === "scissors") {
                result = "Loser";
            } else {
                result = "Won";
            }

        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                result = "Loser";
            } else {
                result = "Won";
            }
        }
        // Formata adequatamente a messagem de saída, contida na variável message.
        if (result === "Won") {
            message = `You ${result}! ${playerSelection} beats ${computerSelection}`;
        } else {
            message = `You ${result}! ${computerSelection} beats ${playerSelection}`;
        }
    }
    
    return message;
}

function game(){
    let computerPoint = 0;
    let playerPoint = 0;
    let message;
    // Define o jogo em 5 rounds
    for (let i = 0; i < 5; i++) {
        // Pega as estradas do jogador e do computador
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Chose enter Rock, Paper or Scissors: ", "Rock");
        let gameRound = playRound(playerSelection, computerSelection);
        
        
        // Mostra o resultado da rodada no console do navegador(para acessálo pressione CTRL + SHIFT + I)
        console.log(gameRound);

        // Verifica o ganhador da partida e atribui um ponto a ele.
        // A função substring() pega uma parte de uma string
        if (gameRound.substring(0, 7) === "You Won") {
            playerPoint += 1;
        } else if(gameRound.substring(0, 9) === "You Loser") {
            computerPoint += 1;
        }
    }

    // Verifica quem foi o ganhador da partida e atribui uma mensagem.
    if (playerPoint === computerPoint) {
        message = "YOUR'LL DRAW!";
    }else if (playerPoint > computerPoint) {
        message = "PLAYER WON THE GAME!";
    }else if (playerPoint < computerPoint) {
        message = "COMPUTER WON THE GAME!";
    }

    console.log(message)
}

game()