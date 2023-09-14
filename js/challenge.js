// increment and decrement counter
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const heartBtn = document.querySelector('#heart')

const count = document.querySelector('#counter');

minusBtn.addEventListener('click', () => {
    count.innerText--;
})

plusBtn.addEventListener('click', () => {
    count.innerText++;
})

// like feature
let likeCount = 0

heartBtn.addEventListener('click', () => {
    
    likeCount++

    //make new element for click count
    const like = document.createElement('li')
    //put like count in new element
    like.innerText = `${count.innerText} has been liked ${likeCount} times`
    //append new element to DOM
    const likeComment = document.querySelector('.likes')
    likeComment.append(like)
})


// timer increment every second once the page loads


