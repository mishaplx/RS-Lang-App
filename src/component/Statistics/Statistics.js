import {useSelector} from 'react-redux';



function Statistic(props) {
  
  const sprintLearnedWords = useSelector(state=>{
    const {sprintReducer} = state;
    return sprintReducer.words;
  })
  
  
  return (
    
    <main className="main">
      <div className="today-statistic">
        <h2> Статистика за сегодня</h2>
        <div className="total-statistics">
          <div className="words-learned">
            <p className="words-learned-count">0</p>
            <p className="words-learned-title">Слов изучено</p>
          </div>
          <div className="right-answers">
            <p className="right-answers-count">0%</p>
            <p className="right-answers-title">Правильных ответов</p>
          </div>

          <div className="games-statistics">
          <h2>Статистика игр</h2>
            <div className="sprint-statisic">
              <h3>Спринт</h3>
              <p>Изучено слов : {sprintLearnedWords}</p>
              <p>Правильных ответов (%) : 0</p>
              <p>Лучшая серия : 0</p>
            </div>

            <div className="audio-call-statisic">
              <h3>Аудиовызов</h3>
              <p>Изучено слов : 0</p>
              <p>Правильных ответов (%) : 0</p>
              <p>Лучшая серия : 0</p>
            </div>
          </div>
        </div>

                
      </div>
    </main>
  );
}

export default Statistic;