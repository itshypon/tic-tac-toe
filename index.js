
const gameBoard = document.querySelector('.gameboard')
const infoDisplay = document.querySelector('#info')

const startCells = [
    "", "", "", "", "", "", "", "", ""
]
let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard(){
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'circle' ? 'cross' : 'circle'
    infoDisplay.textContent = "It is now " + go + "'s turn."
    e.target.removeEventListener('click', addGo)
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll('.square')
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
        if (circleWins) {
            infoDisplay.textContent = "Circle Wins"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))
        
        if (crossWins) {
            infoDisplay.textContent = "Cross  Wins"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
    })

    
}


// class Player {
//     constructor() {
//         this.arr1 = [0, 0, 0];
//         this.arr2 = [0, 0, 0];
//     }
//     add(i, j) {
//         this.arr1[i]++;
//         this.arr2[j]++;
//     }
// }

// let p1 = new Player();
// let p2 = new Player();
// let win1 = false;
// let win2 = false;
// let turn = 1;
// function checkWin() {
//     win1 = p1.arr1.includes(3) || p1.arr2.includes(3) || (!p1.arr1.includes(0) && !p1.arr2.includes(0));
//     win2 = p2.arr1.includes(3) || p2.arr2.includes(3) || (!p2.arr1.includes(0) && !p2.arr2.includes(0));
//     if (win1) console.log('p1 wins');
//     else if (win2) console.log('p2 wins');
// }


// document.querySelector('button').addEventListener('click', process);

// function process() {
//     let i = parseInt(document.querySelector('#r').value);
//     let j = parseInt(document.querySelector('#c').value);

//     if (turn === 1) {
//         document.querySelector('h1').innerHTML = 'P2 value';
//         p1.add(i, j);
//     } else {
//         document.querySelector('h1').innerHTML = 'P1 value';
//         p2.add(i, j);
//     }

//     checkWin();

//     // Switch turns for the next move
//     turn = turn === 1 ? 2 : 1;

//     // Clear the input fields for the next move
//     document.querySelector('#r').value = '';
//     document.querySelector('#c').value = '';
// }

