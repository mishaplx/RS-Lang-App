import { useEffect, useState } from 'react'
import './AudioCallGame.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { incrementWordsA } from '../../../../redux/actions'

function AudioCallGame() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [words, setWords] = useState([])

  const group = localStorage.getItem('group')
  const page = localStorage.getItem('page')

  async function getWords(group, page) {
    setLoading(true)
    try {
      const res = await axios.get(`https://react-rs-language.herokuapp.com/words?group=${group}&page=${page}`)
      setWords(res.data)
      console.log(words)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const numbers = []
  const getRand = (min, max, noRem) => {
    const number = Math.floor(min + Math.random() * (max - min))
    if (number === noRem) return getRand(min, max, noRem)
    if (numbers.includes(number)) return getRand(min, max, noRem)
    else {
      numbers.push(number)
      return number
    }
  }

  useEffect(() => {
    getWords(group, page)
  }, [setLoading])

  function handleIsCorrect(e) {
    if (end.game === false) {
      setMinus(1)

      for (let i = 0; i < 20; i++) {
        if (e.target.textContent === words[i].wordTranslate) {
          if (i === Number(localStorage.getItem('num'))) {
            let correct = localStorage.getItem('correct')
            correct = Number(correct)
            correct++
            setCorrect({ is: true })
            dispatch(incrementWordsA())
            localStorage.setItem('correct', correct)
          } else {
            setCorrect({ is: false })
          }
          console.log(localStorage.getItem('correct'))
        }
      }

      const engWord = document.querySelector('.word')

      if (engWord) engWord.style.display = 'block'

      setTimeout(() => {
        engWord.style.display = 'none'
      }, 1500)
      number()
    } else {
      console.log('Конец')
    }
  }
  const [end, setEnd] = useState({ game: false })
  const [correct, setCorrect] = useState({ is: false })
  const [minus, setMinus] = useState(0)

  function number() {
    let num = localStorage.getItem('num')
    num = Number(num)
    num++
    if (num < 20) {
      localStorage.setItem('num', num)
    } else {
      setEnd({ game: true })
    }
  }

  const answers = document.querySelectorAll('.answer')
  const answersOrder = []
  const getRandOrder = (min, max) => {
    const orderNum = Math.floor(min + Math.random() * (max - min))
    if (answersOrder.includes(orderNum)) return getRand(min, max)
    else {
      answersOrder.push(orderNum)
      return orderNum
    }
  }
  mix()
  function mix() {
    if (answers.length > 0) {
      for (let i = 0; i < 5; i++) {
        answers[i].style.order = getRandOrder(1, 6)
      }
    }
  }

  function playAudio() {
    const audio = new Audio(`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${words[JSON.parse(localStorage.getItem('array'))[localStorage.getItem('num')]].audio}`)
    audio.play()
  }

  return (
    <div className='play-audiocall'>
      <div className='play-audiocall__content'>
        {end.game ? <Link to="/minigames/audiocall/end"><h1>Завершить игру</h1></Link> : words.length > 0 ? <img src={require("../../../../assets/sound.jpg")} onClick={playAudio} alt="" /> : ''}

        {end.game ? '' : words.length > 0 ? <h3 className='word'>{words[JSON.parse(localStorage.getItem('array'))[localStorage.getItem('num')] - minus].word} - {correct.is ? <span className='is'>Верно</span> : <span className='not'>Не верно</span>}</h3> : ''}

        {end.game ? '' : loading ? <h1>Загрузка...</h1> : <div className='words-content' onClick={handleIsCorrect}>
          {words.length > 0 ? <h4 className='answer'>{words[getRand(0, 20, Number(localStorage.getItem('num')))].wordTranslate}</h4> : ''}
          {words.length > 0 ? <h4 className='answer'>{words[JSON.parse(localStorage.getItem('array'))[localStorage.getItem('num')]].wordTranslate}</h4> : ''}
          {words.length > 0 ? <h4 className='answer'>{words[getRand(0, 20, Number(localStorage.getItem('num')))].wordTranslate}</h4> : ''}
          {words.length > 0 ? <h4 className='answer'>{words[getRand(0, 20, Number(localStorage.getItem('num')))].wordTranslate}</h4> : ''}
          {words.length > 0 ? <h4 className='answer'>{words[getRand(0, 20, Number(localStorage.getItem('num')))].wordTranslate}</h4> : ''}
        </div>}
      </div>
    </div >
  )
}

export default AudioCallGame