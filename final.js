const player1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1button')
}

const player2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2button')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
//            reset(player, opponent);
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function() {
    updateScores(player1, player2);
});

player2.button.addEventListener('click', function() {
    updateScores(player2, player1);
});

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
    }
}






