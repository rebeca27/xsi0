let board = Array(9).fill(null);
let currentPlayer = '❤️';  // Starts with heart

function makeMove(index) {
    let cell = document.querySelectorAll('.cell')[index];
    let emojiSpan = cell.querySelector('.emoji');
    
    if (!board[index] && !checkWinner(board) && !emojiSpan.textContent) {
        board[index] = currentPlayer;
        emojiSpan.textContent = currentPlayer;

        // Add specific class for styling
        if (currentPlayer === '❤️') {
            emojiSpan.classList.add('heart');
        } else {
            emojiSpan.classList.add('kiss');
        }

        currentPlayer = currentPlayer === '❤️' ? '💋' : '❤️';
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
