import './Sprintgame.css' 
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

function Sprintgame() {





const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [isGameStart, setGameStart ] = useState(false);
const [isGameOver, setGameOver ] = useState(false);
const [timeLeft, setTimeLeft] = useState(30);
const [words, setWords] = useState([]);
const [loading, setLoading] = useState(false);



async function getWords(group = 1 , page = 1){
  
  setLoading(true);
  try{
    const res = await axios.get(`https://react-rs-language.herokuapp.com/words?group=${group}&page=${page}`);
    setWords(res.data);
  } catch(e){
    console.log(e);
  }
  setLoading(false);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

useEffect(() => {
  let timer;
  if (!isGameOver && isGameStart) {
    timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }
  if (timeLeft === 0) {
    setShowScore(true);
    setCurrentQuestion(0);
    setTimeLeft(30);
  }
  return () => clearTimeout(timer);
}, [timeLeft]);


const handleAnswer = (event) => {

    const target = event.target;
    let trnslWord = document.querySelector('.translate-word').textContent;

    if (target.className === 'true-button' && trnslWord === words[currentQuestion].wordTranslate) {
        setScore(score + 1);
    }
    if (target.className === 'false-button' && trnslWord !== words[currentQuestion].wordTranslate) {
        setScore(score + 1);
    }

  const nextQuestion = currentQuestion + 1;

  if (nextQuestion < words.length) {
    setCurrentQuestion(nextQuestion);
    } else {
    setShowScore(true);
    setCurrentQuestion(0);
    } 
  };

  const chooseLevel = (event)=>{
  const target = event.target;
  const allTargets = document.querySelectorAll('.active');

  allTargets.forEach(el =>{
    el.classList.remove('active')
  })

  if(target.className != 'active'){ 
    target.classList.toggle('active')
    group = target.dataset.id;
    console.log(group);
  }
  
  

}
let group = 1;

function startGame(){
  setGameStart(true);
  setGameOver(false);
  setScore(0);
  getWords(group, getRandomInt(0, 30))
}

function back(){
    setShowScore(false);
    setGameStart(false);
    setGameOver(false);
  }

  
  return (
      <main className="main">
        <div className="sprint">
          {!isGameStart &&  !isGameOver && (
            <div className="start-screen">
            <div className="start-screen__title">
              <p className="sprint-game__title">Спринт</p>
              <p className="sprint-game__description">Как можно быстрее определи верный перевод слова или нет!</p>
            </div>
            <div className="start-screen__menu">
              <p className="start-screen__menu_title">Выбери уровень сложности :</p>
                <div className="start-screen__menu_buttons">
                  <div className="level-button" role="button" data-id="0" onClick={chooseLevel}>A1</div>
                  <div className="level-button" role="button" data-id="1" onClick={chooseLevel}>A2</div>
                  <div className="level-button" role="button" data-id="2" onClick={chooseLevel}>B1</div>
                  <div className="level-button" role="button" data-id="3" onClick={chooseLevel}>B2</div>
                  <div className="level-button" role="button" data-id="4" onClick={chooseLevel}>C1</div>
                  <div className="level-button" role="button" data-id="5" onClick={chooseLevel}>C2</div>
                </div>
              <button className="start-game-button" onClick={startGame}>Начать</button>
              </div>
            </div> 
          )} 

          {isGameStart && !isGameOver && (
            <div className='game'>
              {showScore && (
                <div className='score-section'>
                    <div className='score-section__score'>
                    Вы угадали {score} слов!
                    </div>
                    <div className='score-section__buttons'>
                    <button onClick = {back}>Назад</button>
                    <button onClick = {back} ><Link to="/">На главную</Link></button>
                    </div>
                </div>
              )}
              {!showScore &&(
              <div className='game-wrapper'>
                <div className='timer'><span className='timer-icon'></span>{timeLeft}</div>
                {loading ? <h1>Загрузка</h1> : <div className='question-block'>
                  <span className='first-word'>
                  {words[currentQuestion].word}</span> это <span className='translate-word'>{words[getRandomInt(0, words.length)].wordTranslate}</span>?
                </div> } 
              <div className='answers-block'>
                <button className='true-button' onClick={handleAnswer}>Да</button>
                <button className='false-button' onClick={handleAnswer}>Нет</button>
              </div>
            </div>)}
          </div> 
          )}     
        </div>
      </main>
    );
  }
  
  export default Sprintgame;