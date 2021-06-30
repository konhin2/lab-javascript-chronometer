const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
let splitsElement = document.getElementById('splits');


let parar = null

function printTime() {
  // ... your code goes here
  parar = setInterval(() => {
    const minutos = printMinutes()
    minDecElement.innerHTML = minutos[0]
    minUniElement.innerHTML = minutos[1]
    const segundos = printSeconds()
    secDecElement.innerHTML = segundos[0]
    secUniElement.innerHTML = segundos[1]
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes())
}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li')
  li.innerText = chronometer.split()
  splitsElement.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
  let parent = splitsElement.parentNode
  parent.removeChild(splitsElement)
  let ol = document.createElement('ol')
  ol.setAttribute('id', 'splits')
  parent.appendChild(ol)
  splitsElement = document.getElementById('splits')
  chronometer.reset()
  minDecElement.innerHTML = '0'
  minUniElement.innerHTML = '0'
  secDecElement.innerHTML = '0'
  secUniElement.innerHTML = '0'
  milDecElement.innerHTML = '0'
  milUniElement.innerText = '0'
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.innerHTML = 'STOP'
    btnLeftElement.setAttribute('class', 'btn stop')
    btnRightElement.innerHTML = 'SPLIT'
    btnRightElement.setAttribute('class', 'btn split')
    chronometer.start()
    printTime()
  } else if (btnLeftElement.innerHTML === 'STOP') {
    btnLeftElement.innerHTML = 'START'
    btnLeftElement.setAttribute('class', 'btn start')
    btnRightElement.innerHTML = 'RESET'
    btnRightElement.setAttribute('class', 'btn reset')
    chronometer.stop()
    clearInterval(parar)
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerHTML === 'RESET') {
    setStartBtn()
    clearSplits()
  } else if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit() 
  }
});