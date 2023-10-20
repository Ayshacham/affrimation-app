const advice = [
  {
    id: 1,
    text: 'Beautiful',
  },
  {
    id: 2,
    text: 'Smart',
  },
  {
    id: 3,
    text: 'Worthy',
  },
  {
    id: 4,
    text: 'Talented',
  },
  {
    id: 5,
    text: 'Enough',
  },
  {
    id: 6,
    text: 'Kind',
  },
  {
    id: 7,
    text: 'Intelligent',
  },
  {
    id: 8,
    text: 'Brave',
  },
  {
    id: 9,
    text: 'A good friend',
  },
  {
    id: 10,
    text: 'Ready',
  },
  {
    id: 11,
    text: 'Woman',
  },
  {
    id: 12,
    text: 'Divine',
  },
  {
    id: 13,
    text: 'Phenomenal',
  },
  {
    id: 14,
    text: 'Original',
  },
  {
    id: 15,
    text: 'Exceptional',
  },
];

let currentNumber = 0;
let stop = false;

window.onload = function() {
  generateRandomAdvice();
  playRandomAdvice();
}

function playRandomAdvice() {
  changeAdvice();
}

function loadNext () {
  window.document.getElementById('body').innerText='';
  window.document.getElementById('body').innerHTML = '<div class="loader"><img src="./icons/loading.png" alt=""></div>';
}

function playPause() {
  stop = !stop;

  if(stop) window.document.getElementById('playPause').src = './icons/play.png';
  else window.document.getElementById('playPause').src = './icons/pause.png';
}
console.log('hello: ', stop);

const changeAdvice = setInterval(function() {

  
  if (!stop) {
    // setTimeout(function () {
    //   loadNext();
    // }, 4000);
    
    window.document.getElementById('title').innerText = `I am`;
    window.document.getElementById('body').innerText = `${advice[currentNumber].text}`;
    
    if (currentNumber === 14) {
      currentNumber = 0;
    } else {
      currentNumber++;
    }
  }
}, 3000);

function generateRandomAdvice() {

  let randomNumber = Math.round(Math.random()*advice.length-1);
  
  currentNumber = randomNumber;

  window.document.getElementById('title').innerText = `I am`;
  window.document.getElementById('body').innerText = `${advice[randomNumber].text}`;
}
