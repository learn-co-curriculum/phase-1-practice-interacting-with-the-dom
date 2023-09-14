
const minusOneFromCounter = document.querySelector(`button`) 

const updateCounter = document.getElementById(`counter`)

minusOneFromCounter.addEventListener(`click`, (e)=>{
    const lowerCounter = document.getElementById(`.counter`) 
    lowerCounter.innerText-- 
}) 

const plusOneToCounter = document.getElementById('plus')

plusOneToCounter.addEventListener('click', (e) => {
    const plusCounter = document.getElementById('plus')
    plusCounter.innerText++
})

const addNumberLikes = document.getElementById('heart')

addNumberLikes.addEventListener('click', (e) => {
    /* add text "this number has been liked this many times" 
    to the unordered list section */
    const likeMessages = document.getElementsByClassName('likes')
    likeMessages.addEventListener
} )