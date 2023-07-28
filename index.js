
const gameBoard = document.querySelector('.gameboard')
const infoDisplay = document.querySelector('#info')

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

function createBoard(){
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        gameBoard.append(cellElement)
    })
}
createBoard()


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

