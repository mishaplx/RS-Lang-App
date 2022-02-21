import './Sprintgame.css' 
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { incrementWords, setRightAnswers, setBestSeries, addRightAnswer, addWrongAnswer } from './../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Timer from './timer';
import Results from './Results';


function Sprintgame(props) {


const dispatch = useDispatch();

const learnedWords = useSelector(state=>{
  const {sprintReducer} = state;
  return sprintReducer.learnWords;
})

const bestSeries = useSelector(state=>{
  const {sprintReducer} = state;
  return sprintReducer.bestSeries;
})


 


const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [isGameStart, setGameStart ] = useState(false);
const [isGameOver, setGameOver ] = useState(false);
const [roundRightAnswers, setRoundRightAnswers] = useState([]);
const [roundWrongAnswers, setRoundWrongAnswers] = useState([]);
const [words, setWords] = useState([]);
const [loading, setLoading] = useState(false);
const [questionsCount, setQuestionsCount] = useState(1);
const [trueAnswer, setTrueAnser] = useState();
const [roundStreak, setRoundStreak] = useState(0);






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

function timerEnd(){
  setShowScore(true);
  dispatch(setRightAnswers(Math.floor((score/currentQuestion)*100)));
  setCurrentQuestion(0);
  checkAnswer();
}

function checkAnswer(){
 
 
  if(trueAnswer){
    setRoundStreak(roundStreak + 1);
  } 
  
  if(!trueAnswer){
    
    if(roundStreak > bestSeries) {
      dispatch(setBestSeries(roundStreak));
    }
    setRoundStreak(0);
  }
}


const handleAnswer = (event) => {
    const target = event.target;
    let trnslWord = document.querySelector('.translate-word').textContent;
    const nextQuestion = currentQuestion + 1;
    const id = words[currentQuestion].id;


    if (target.className === 'true-button' && trnslWord === words[currentQuestion].wordTranslate) {
        setScore(score + 1);
        dispatch(incrementWords());
        setTrueAnser(true);
        setRoundRightAnswers([...roundRightAnswers, { word: words[currentQuestion].word, translate: words[currentQuestion].wordTranslate}]);
        checkAnswer();
        dispatch(addRightAnswer(id))
    }
    
    if (target.className === 'true-button' && trnslWord !== words[currentQuestion].wordTranslate) {
      setTrueAnser(false);
      checkAnswer();
      setRoundWrongAnswers([...roundWrongAnswers, { word: words[currentQuestion].word, translate: words[currentQuestion].wordTranslate}]);
      dispatch(addWrongAnswer(id));
    }
   
    if (target.className === 'false-button' && trnslWord !== words[currentQuestion].wordTranslate) {
        setScore(score + 1);
        setTrueAnser(true);
        checkAnswer();
        setRoundRightAnswers([...roundRightAnswers, { word: words[currentQuestion].word, translate: words[currentQuestion].wordTranslate}]);
        dispatch(addRightAnswer(id));
    }

    if (target.className === 'false-button' && trnslWord == words[currentQuestion].wordTranslate) {
      setTrueAnser(false);
      checkAnswer();
      setRoundWrongAnswers([...roundWrongAnswers, { word: words[currentQuestion].word, translate: words[currentQuestion].wordTranslate}]);
      dispatch(addWrongAnswer(id));
    }
   

  if (nextQuestion < words.length && !showScore) {
    setCurrentQuestion(nextQuestion);
    setQuestionsCount(questionsCount + 1)

  
    } else {
    setShowScore(true);
    dispatch(setRightAnswers(Math.floor((score/currentQuestion)*100)));
    setCurrentQuestion(0);
    checkAnswer();
    } 
  };


  const chooseLevel = (event)=>{
    const target = event.target;
    const allTargets = document.querySelectorAll('.active');

  allTargets.forEach(el =>{
    el.classList.remove('active')
  })

  if(target.className !== 'active'){ 
    target.classList.toggle('active')
    group = target.dataset.id;
  }
}


let group = 1;

function startGame(){
  setGameStart(true);
  setGameOver(false);
  setScore(0);
  getWords(group, getRandomInt(0, 30));
  
}

function back(){
    setShowScore(false);
    setGameStart(false);
    setGameOver(false);
    setRoundRightAnswers([]);
    setRoundWrongAnswers([]);
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
                      Вы угадали {score} слов(а)!
                    </div>
                    <Results score = {score} back={back} wrongWords = {roundWrongAnswers} rightWords = {roundRightAnswers} />
                    <div className='score-section__buttons'>
                    <button onClick = {back}>Назад</button>
                    <button onClick = {back} ><Link to="/">На главную</Link></button>
                    </div>
                </div>
              )}
             
              {!showScore &&(
              <div className='game-wrapper'>
                 
                {loading ? <ClipLoader color={"rgb(110, 245, 211)"} loading={loading}  size={30} /> : 
           
                <div className='question-block'>
                    <Timer isGameStart = {isGameStart} showScore = {showScore} timerEnd = {timerEnd} />
                 <span className='first-word'>
                  {words[currentQuestion].word}</span> это <span className='translate-word'>{words[getRandomInt(0, words.length)].wordTranslate}</span>?
                
                  <div className='show-answer'>
                    <span className='answer-icon'></span>
                    {roundRightAnswers.length}
                  </div>
                </div>  
                }
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