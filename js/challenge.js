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

// function likeBuilder () {
//     let likeCount = 0;

//     heartBtn.addEventListener('click', () => {
//         likeCount++

//          //make new element for click count
//         const like = document.createElement('li')

//         //append new element to DOM
//         const likeComment = document.querySelector('.likes')
//         likeComment.append(like)
        
//         //put like count in new element
//         like.innerText = `${count.innerText} has been liked ${likeCount} times`
          
//     })
// }

// likeBuilder();

// check for like happen
// if no, make new
// if yes, edit dom

// leave comment

const comment = document.querySelector('form')
comment.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const commentNew = document.createElement('p');
    commentNew.innerText = e.target.comment.value;

    const commentList = document.querySelector('#list');
    commentList.append(commentNew);
})





