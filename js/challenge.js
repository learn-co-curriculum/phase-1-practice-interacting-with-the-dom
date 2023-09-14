// increment and decrement counter
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');

const count = document.querySelector('#counter');

minusBtn.addEventListener('click', () => {
    if (count > 0) {
        count.innerText--;
    }
})

plusBtn.addEventListener('click', () => {
    count.innerText++;
})



// timer increment every second once the page loads


