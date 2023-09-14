// const minusButton = document.getElementById(`minus`) 

const minusOneFromCounter = document.querySelector(`button`) 

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`.counter`) 
    lowerCounter.innerText-- 
}) 

const plusOneToCounter = document.querySelector('.counter')

plusOneToCounter.addEventListener('click', (e) => {
    const plusCounter = document.getElementById('plus')
    plusCounter.innerText++
})