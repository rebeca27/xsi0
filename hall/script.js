let board = Array(9).fill(null);
let currentPlayer = '🎃';  // Starts with pumpkin

function makeMove(index) {
    if (!board[index] && !checkWinner(board)) {
        board[index] = currentPlayer;
        document.querySelectorAll('.cell')[index].textContent = currentPlayer;

        if (checkWinner(board)) {
            setTimeout(() => alert(`${currentPlayer} Wins!`), 100);
            return;
        }

        currentPlayer = currentPlayer === '🎃' ? '👻' : '🎃';
    }
    currentPlayer = currentPlayer === (document.getElementById('player1').value || '🎃') ? (document.getElementById('player2').value || '👻') : (document.getElementById('player1').value || '🎃');
    updateAnnouncement();
}


function checkWinner(board) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]  // diagonals
    ];

    for (let combo of winningCombos) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            return true;
        }
    }

    return false;
}
