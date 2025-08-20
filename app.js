let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset_btn');
let turn0 = true; // true for X's turn, false for O's turn

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const checkWin = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== '' && val1 === val2 && val2 === val3) {
            alert(`${val1} wins!`);
            resetGame();
            return;
        }
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.classList.remove("disabled");
    });
    turn0 = true;
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText !== '') return; // prevent overwrite

        if (!turn0) {
            box.innerText = 'O';
            box.style.color = 'blue';
            turn0 = true;
        } else {
            box.innerText = 'X';
            box.style.color = 'red';
            turn0 = false;
        }

        box.classList.add("disabled");
        checkWin();
    });
});

resetButton.addEventListener('click', resetGame);
