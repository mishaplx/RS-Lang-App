import {useSelector} from 'react-redux';
import './Statistics.css';


function Statistic(props) {
  
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


  
  

  return (
    
    <main className="main">
      <div className="today-statistic">
        <div className="total-statistics">
        <h2 className='today-statistic__title'> Статистика за сегодня</h2>
          <div className="words-learned">
            <p className="words-learned-count">0</p>
            <p className="words-learned-title">Слов изучено</p>
          </div>
          <div className="right-answers">
            <p className="right-answers-count">0%</p>
            <p className="right-answers-title">Правильных ответов</p>
          </div>
        </div>
      </div>

        <div className="games-statistics">
          <h2>Статистика игр</h2>
          <div  className="games-statistics__container">
            <div className="sprint-statisic">
              <h3>Спринт</h3>
              <p>Изучено слов : {sprintLearnedWords}</p>
              <p>Правильных ответов (%) : {rightAnswers}</p>
              <p>Лучшая серия : {bestSeries}</p>
            </div>

            <div className="audio-call-statisic">
              <h3>Аудиовызов</h3>
              <p>Изучено слов : 0</p>
              <p>Правильных ответов (%) : 0</p>
              <p>Лучшая серия : 0</p>
            </div>
          </div>
        </div>
       
    </main>
  );
}

export default Statistic;