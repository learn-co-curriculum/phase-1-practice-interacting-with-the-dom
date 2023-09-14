// const minusButton = document.getElementById(`minus`) 

const minusOneFromCounter = document.querySelector(`button`) 

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`counter`) 
    lowerCounter.innerText-- 
}) 

const plusOneToCounter = document.getElementById('plus')

plusOneToCounter.addEventListener(`click`, ()=> {
    const addCounter = document.getElementById(`counter`) 
    addCounter.innerText++
})


