let board = Array(9).fill(null);
let currentPlayer = '🎄';

function makeMove(index) {
    let cell = document.querySelectorAll('.cell')[index];
    let emojiSpan = cell.querySelector('.emoji');
    
    if (!board[index] && !checkWinner(board) && !emojiSpan.textContent) {
        board[index] = currentPlayer;
        emojiSpan.textContent = currentPlayer;

        if (currentPlayer === '🎄') {
            emojiSpan.classList.add('tree');
        } else {
            emojiSpan.classList.add('star');
        }

        if (checkWinner(board)) {
            setTimeout(() => alert(`${currentPlayer} Wins!`), 100);
            return;
        }

        currentPlayer = currentPlayer === '🎄' ? '🌟' : '🎄';
    }
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
