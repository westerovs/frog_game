const btnRow = document.querySelector('.game__btn-row')
const btnTop = document.querySelector('.button--top')
const btnBottom = document.querySelector('.button--bottom')

const out = document.querySelector('.game__text-question')

let count = 0
btnTop.addEventListener('click', () => {
  if (count === 0) {
    count++
  
    out.innerHTML = 'КРУТАЯ ЛЯГУШКА говорит, что выполнит твоё желание'
    btnTop.innerHTML = '<span>&gt</span>Загадать желание'
    btnBottom.style.display = 'none'
  }

  if (count === 1) {
    out.innerHTML = 'КРУТАЯ ЛЯГУШКА говорит, что МАША великолепна!'
    setTimeout(() => {
      out.innerHTML = 'КРУТАЯ ЛЯГУШКА говорит, что Вы победили!'
      document.querySelector('.game__pic').style.filter = 'invert(1)'
      document.body.style.backgroundColor = 'green'
      
      setTimeout(() => {
        out.innerHTML = 'МАША ВЕЛИКОЛЕПНА!'
      }, 1000)
      
    }, 1000)
    btnRow.style.display = 'none'
  }
  
})


btnBottom.addEventListener('click', () => {
  out.innerHTML = 'КРУТАЯ ЛЯГУШКА ТЕБЯ СЖИРАЕТ'
  out.style.backgroundColor = 'black'
  btnTop.innerHTML = '<span>&gt</span>Загадать желание'
  document.body.style.background = 'red'
  btnRow.style.display = 'none'
})
