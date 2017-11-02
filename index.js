let playing = true;
const timer = () => {
  return setInterval(function() {
    let counter = document.getElementById('counter');
    let current = parseInt(counter.innerText);

    counter.innerText = current + 1;
  }, 1000);
};

let interval = timer();

let minus = document.getElementById('-');
let plus = document.getElementById('+');
let heart = document.getElementById('<3');
let pause = document.getElementById('pause');
let commentForm = document.getElementsByTagName('form')[0];

minus.addEventListener('click', function() {
  let counter = document.getElementById('counter');
  let current = parseInt(counter.innerText);

  counter.innerText = current - 1;
});

plus.addEventListener('click', function() {
  let counter = document.getElementById('counter');
  let current = parseInt(counter.innerText);

  counter.innerText = current + 1;
});

heart.addEventListener('click', function() {
  let counter = document.getElementById('counter');
  let current = parseInt(counter.innerText);

  let ul = document.querySelector('.likes');

  let nums = [...ul.children].map(item => {
    return parseInt(item.dataset['num']);
  });

  let li;

  if (nums.includes(current)) {
    li = document.querySelector(`[data-num="${current}"]`);
    let currentLikes = parseInt(li.children[0].innerText);

    li.innerHTML = `${current} has been liked <span>${currentLikes +
      1}</span> times`;
  } else {
    li = document.createElement('li');
    li.setAttribute('data-num', current);
    li.innerHTML = `${current} has been liked <span>1</span> time`;
    ul.appendChild(li);
  }
});

pause.addEventListener('click', function() {
  if (playing) {
    playing = false;
    clearInterval(interval);
    this.innerText = 'resume';
  } else {
    playing = true;
    interval = timer();
    this.innerText = 'pause';
  }

  [...document.getElementsByTagName('button')].forEach(function(btn) {
    if (btn.id !== 'pause') btn.disabled = !playing;
  });
});

commentForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  let textArea = this.children[0];
  let comment = textArea.value;
  textArea.value = '';

  let commentsDiv = document.querySelector('.comments');

  let newComment = document.createElement('p');

  newComment.innerText = comment;

  commentsDiv.appendChild(newComment);
});
