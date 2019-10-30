//find the timer
let timer = document.getElementById("counter")
//find the innerText for the timer
//increment that text every second 
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let likeButton = document.getElementById("heart")
let pauseButton = document.getElementById("pause")
let likesList = document.getElementsByClassName("likes")[0]
let body = document.body
let interval = setInterval(function () { timer.innerText = parseInt(timer.innerText) + 1 }, 1000)

let likeTracker = {}
let resumeButton = document.createElement("button")

let commentsContainer = document.getElementById("list")
let form = document.getElementById("comment-form")



function clickHandler(e) {
    switch (e.target.id) {
        case "plus":
            timer.innerText = parseInt(timer.innerText) + 1
            break;
        case "minus":
            if (parseInt(timer.innerText) > 0) {
                timer.innerText = parseInt(timer.innerText) - 1
            }
            break;
        case "heart":
            let likedNums = Object.keys(likeTracker) //will return an array of all the keys
            let numString = timer.innerText

            if (likedNums.includes(numString)) {
                console.log("number already liked")
                likeTracker[`${numString}`]++
                let li = document.querySelector(`li[data-id="${numString}"]`)
                li.innerText = `${numString} has been liked ${likeTracker[`${numString}`]} times`


            } else {
                console.log("number liked for first time")
                likeTracker[`${numString}`] = 1
                let li = document.createElement("li")
                li.innerText = `${numString} has been liked`
                li.dataset.id = numString
                likesList.appendChild(li)
            }
            break;
        case "pause":
            console.log("pause some stuff")
            clearInterval(interval)
            plusButton.disabled = true
            minusButton.disabled = true
            likeButton.disabled = true
            resumeButton.innerText = "resume"
            resumeButton.id = "resume"
            e.target.parentNode.replaceChild(resumeButton, pauseButton)
            break;
        case "resume":
            interval = setInterval(function () { timer.innerText = parseInt(timer.innerText) + 1 }, 1000)
            plusButton.disabled = false
            minusButton.disabled = false
            likeButton.disabled = false
            e.target.parentNode.replaceChild(pauseButton, resumeButton)
            break;
        default:
            break;
    }


}


form.addEventListener("submit", function (e) {
    e.stopPropagation()
    e.preventDefault()
    let comment = e.target[0].value
    let pTag = document.createElement("p")
    pTag.innerText = comment
    commentsContainer.appendChild(pTag)
    form.reset()

})
body.addEventListener("click", clickHandler)