// Type Name **********************

const myName = ["Hi, I'm Prashant Amoli. "]
let countN = 0
let indexN = 0
let currentTextN = ''
let letterN = ''

function typeName() {
  let timeout = 250
  // if (count === myName.length) {
  //   count = 0
  // }

  currentTextN = myName[countN]
  letterN = currentTextN.slice(0, ++indexN)
  document.querySelector('#name').textContent = letterN
  // document.querySelector('#info').textContent = letter

  // if (letter.length === currentText.length) {
  //   count++
  //   index = 0
  //   timeout = timeout + 1000
  // }

  setTimeout(typeName, timeout)
}

typeName()

// Info Text ***********************

const info = [
  ' Software Engineer  ',
  ' Development Enthusiast  ',
  ' Computer Science Student  ',
  ' Full-Stack Web Developer  ',
]
let count = 0
let index = 0
let currentText = ''
let letter = ''

function type() {
  let timeout = 250
  if (count === info.length) {
    count = 0
  }

  currentText = info[count]
  letter = currentText.slice(0, ++index)
  // document.querySelector('#name').textContent = letter
  document.querySelector('#info').textContent = letter

  if (letter.length === currentText.length) {
    count++
    index = 0
    timeout = timeout + 1000
  }

  setTimeout(type, timeout)
}

type()

// STUB
// Footer Text *******************************

const footer = ['Resume ', 'Hire me ']
let countF = 0
let indexF = 0
let currentTextF = ''
let letterF = ''

function typeFooter() {
  let timeout = 500
  if (countF === footer.length) {
    countF = 0
  }

  currentTextF = footer[countF]
  letterF = currentTextF.slice(0, ++indexF)
  document.querySelector('.resume').classList.add('typing')
  document.querySelector('.resume').textContent = letterF

  if (letterF.length === currentTextF.length) {
    countF++
    indexF = 0
    const remove = () => {
      document.querySelector('.resume').innerText = ''
      document.querySelector('.resume').classList.remove('typing')
    }
    setTimeout(remove, timeout)
    timeout = timeout + 10000
  }

  setTimeout(typeFooter, timeout)
}

setTimeout(typeFooter(), 10000)
