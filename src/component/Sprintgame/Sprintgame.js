import './Sprintgame.css' 

import {useState} from 'react';

function Sprintgame() {



  const words =[
    {
        word: 'cat',
        translate: 'кот',
        id: 1
    },
    {
        word: 'dog',
        translate: 'собака',
        id: 2
    },
    {
        word: 'pig',
        translate: 'свинья',
        id: 3
    },
    {
        word: 'wolf',
        translate: 'волк',
        id: 4
    },
    {
        word: 'snake',
        translate: 'змея',
        id: 5
    },
    {
        word: 'home',
        translate: 'дом',
        id: 6
    },
    {
        word: 'sun',
        translate: 'солнце',
        id: 7
    },
    {
        word: 'tree',
        translate: 'дерево',
        id: 8
    },
    {
        word: 'screen',
        translate: 'экран',
        id: 9
    }
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [isGameStart, setGameStart ] = useState(false);
const [isGameOver, setGameOver ] = useState(false);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const handleAnswer = (event) => {
    
    const target = event.target;


    let trnslWord = document.querySelector('.translate-word').textContent;

if (target.className === 'true-button' && trnslWord=== words[currentQuestion].translate) {
  console.log(true);
        setScore(score + 1);
}
    if (target.className === 'false-button' && trnslWord !== words[currentQuestion].translate) {
  console.log(true);
        setScore(score + 1);
}

const nextQuestion = currentQuestion + 1;

if (nextQuestion < words.length) {
  setCurrentQuestion(nextQuestion);
} else {
  setShowScore(true);
} 
};

const chooseLevel = (event)=>{
  const target = event.target;
  if(target.className != 'active'){ 
    target.classList.toggle('active')
  }
  console.log(target)
}

function startGame(){
  setGameStart(true);
  setGameOver(false);
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
              <p className="start-screen__menu_title">Выберите уровень сложности</p>
            <div className="start-screen__menu_buttons">
                  <div className="level-button" role="button"  onClick={chooseLevel}>A1</div>
                  <div className="level-button" role="button"  onClick={chooseLevel}>A2</div>
                  <div className="level-button" role="button"  onClick={chooseLevel}>B1</div>
                  <div className="level-button" role="button"  onClick={chooseLevel}>B2</div>
                  <div className="level-button" role="button"  onClick={chooseLevel}>C1</div>
                  <div className="level-button" role="button"  onClick={chooseLevel}>C2</div>
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
                    Вы набрали {score} из {words.length}
                    </div>
                    <button onClick = {back}>Назад</button>
                </div>
            )}
    
            {!showScore &&(
            <div className='game-wrapper'>
              <div className='timer'>30</div>
              <div className='question-block'>
                  <span className='first-word'>
                  {words[currentQuestion].word}</span> 
                   это  
                  <span className='translate-word'>{words[getRandomInt(0, words.length)].translate}</span>
                   ?
                  </div>
              <div className='answers-block'>
                <button className='true-button' onClick={handleAnswer}>Верно</button>
                <button className='false-button' onClick={handleAnswer}>Не верно</button>
              </div>
            </div>)}
          </div> 
          )}     
        </div>
      </main>
    );
  }
  
  export default Sprintgame;