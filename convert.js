

const showResult = document.getElementById('show');
const showResult2 = document.getElementById('show2');
const showResult3 = document.getElementById('show3');
const btn = document.getElementById('convert');



function convert (e) {
    e.preventDefault();
    const input = document.getElementById('input').value;
    
    if (input < 0) {
        alert('Please enter valid decimal number')
    } else if (input === '') {
        alert('Please enter a valud decimal number')
    }else {
        baineryNum = Number(input).toString(2);
        octalNum = Number(input).toString(8);
        hexDecimalNum = Number(input).toString(16);
        showResult.value = baineryNum;
        showResult2.value = octalNum;
        showResult3.value = hexDecimalNum;
    }
    
}

btn.addEventListener('click',convert );

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', function () {
    const input = document.getElementById('input');
    input.value = '';
    showResult.value = '';
})