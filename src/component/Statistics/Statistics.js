import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import './Statistics.css';




function Statistics(props) {
  
  const sprintLearnedWords = useSelector(state=>{
    const {sprintReducer} = state;
    return sprintReducer.learnWords;
  })
  const rightAnswers = useSelector(state=>{
    const {sprintReducer} = state;
    return sprintReducer.rightAnswers;
  })

  const bestSeries = useSelector(state=>{
    const {sprintReducer} = state;
    return sprintReducer.bestSeries;
  })


  const [loading, setLoading] = useState()
  const getStatistic = async () => {
    setLoading(true)
    const response = await fetch(`https://react-rs-language.herokuapp.com/users/${localStorage.getItem('userId')}/statistics`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json()
    localStorage.setItem('learnedWords', res.learnedWords)
    localStorage.setItem('correctPercent', res.optional["correctPercent"])

    localStorage.setItem('sprintLearnedWords',  res.optional["sprintLearnedWords"])
    localStorage.setItem('sprintCorrectPercent', res.optional["sprintCorrectPercent"])
    localStorage.setItem('sprintBestSeries', res.optional["sprintBestSeries"])
    setLoading(false)
  }
  useEffect(() => {
    getStatistic()
  }, [setLoading])
  return (
    < main className="main" >
      <div className="today-statistic">
        <div className="total-statistics">
        <h2 className='today-statistic__title'> Статистика за сегодня</h2>
          <div className="words-learned">
            <p className="words-learned-count">{loading ? 'загрузка...' : (Number(localStorage.getItem('learnedWords')))}</p>
            <p className="words-learned-title">Слов изучено</p>
          </div>
          <div className="right-answers">
            <p className="right-answers-count"> {loading ? 'загрузка...' : (Number(localStorage.getItem('correctPercent')) + (Number(localStorage.getItem('sprintCorrectPercent'))))/2 } % </p>
            <p className="right-answers-title">Правильных ответов</p>
          </div>
        </div>
      </div>

        <div className="games-statistics">
          <h2>Статистика игр</h2>
          <div  className="games-statistics__container">
            <div className="sprint-statisic">
              <h3>Спринт</h3>
              <p>Изучено слов : {localStorage.getItem('token') ? (loading ? 'загрузка...' : localStorage.getItem('sprintLearnedWords')) : <span id="only-auth">(Только для авторизованных пользователей)</span>}</p>
              <p>Правильных ответов (%) : {localStorage.getItem('token') ? (loading ? 'загрузка...' : localStorage.getItem('sprintCorrectPercent')) : <span id="only-auth">(Только для авторизованных пользователей)</span>}</p>
              <p>Лучшая серия : {localStorage.getItem('token') ? (loading ? 'загрузка...' : localStorage.getItem('sprintBestSeries')) : <span id="only-auth">(Только для авторизованных пользователей)</span>}</p>
        
              
            </div>

            <div className="audio-call-statisic">
              <h3>Аудиовызов</h3>
              <p>Изучено слов : {localStorage.getItem('token') ? (loading ? 'загрузка...' : localStorage.getItem('learnedWords')) : <span id="only-auth">(Только для авторизованных пользователей)</span>}</p>
              <p>Правильных ответов (%) : {localStorage.getItem('token') ? (loading ? 'загрузка...' : localStorage.getItem('correctPercent')) : <span id="only-auth">(Только для авторизованных пользователей)</span>}</p>
              <p>Лучшая серия : 0</p>
            </div>
          </div>
        </div>
      
    </main>
  );
}

export default Statistics;