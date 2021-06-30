class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
    // ... your code goes here
    const contar = () => {
      this.currentTime++
    }
    this.intervalId = setInterval(contar, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = 0;
    if (this.currentTime >= 60) {
      minutes = (this.currentTime - (this.currentTime % 60)) / 60
    }
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime < 60) {
      return this.currentTime
    } else
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let number = '';
    if (value < 10)  {
      number = "0" + value
    } else {
      number = `${value}`
    }
    return number
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
