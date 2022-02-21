import './AudioCall.css'
import { Link } from 'react-router-dom'

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
localStorage.setItem('array', JSON.stringify(nums))

function AudioCall() {
  localStorage.setItem('correct', 0)
  localStorage.setItem('num', 0)
  // function toggleLevel(e) {
  //   if (e.target.tagName === 'SECTION') {
  //     e.stopPropagation()
  //   } else {
  //     e.target.classList.toggle('select-level')
  //   }
  // }

  function randPage(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  function groupWords(e) {
    const arrBtn = document.querySelectorAll('.btn-play')
    for (let i = 0; i < arrBtn.length; i++) {
      if (e.target.textContent === arrBtn[i].textContent) {
        localStorage.setItem(`group`, `${i}`)
        localStorage.setItem(`page`, `${randPage(0, 30)}`)
      }
    }
  }

  return (
    <div className='audio-call'>
      <div className='audio-call__content'>
        <h1>Аудиовызов - Мини-игра</h1>
        <p>Заключается в том, что пользователь прослушивает аудиозапись, и выбирает правильный вариант ответа.</p>
        <div className='levels'>
          <div className='levels-content'>
            <h4>Выбери уровень сложности</h4>
            <section className='select-levels__content' onClick={groupWords}>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>А1</h5>
                </section>
              </Link>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>А2</h5>
                </section>
              </Link>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>B1</h5>
                </section>
              </Link>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>B2</h5>
                </section>
              </Link>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>C1</h5>
                </section>
              </Link>
              <Link to="/RS-Lang-App/minigames/audiocall/play">
                <section className='btn-play'>
                  <h5>C2</h5>
                </section>
              </Link>
            </section>
          </div >
        </div>
      </div >
    </div >
  )
}

export default AudioCall