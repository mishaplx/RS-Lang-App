
import './WordCard.css';
import audioSvg from '../../../assets/audioSvg.svg'
import { useEffect, useState } from 'react';

function WordCard({el}) {
 const imgSrc = `https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.image}`

 function createMarkuptextExample() {
  return {
     __html: el.textExample };
};
function  createMarkuptextMeaning(){
  return {
     __html: el.textMeaning };
};
 function handleClickAudio(){
  const audio1 = document.querySelector(".audio1")
  audio1.play()

 }
 function handleClickAudioEnded1(){
  const audio2 = document.querySelector(".audio2")
  audio2.play()
 }
 function handleClickAudioEnded2(){
  const audio3 = document.querySelector(".audio3")
  audio3.play()
 }
 const [loginState, setLogin] = useState(false)

useEffect(()=>{
  localStorage.getItem(`UserName`) !== "Вход" ? setLogin(false) : setLogin(true)
},loginState)
function handleClickHardWord(){
  console.log(loginState);
}

  return (
    <div className="word__card">

      <div className='word__card-img'> { <img src={imgSrc} alt='img' width='300'/>}</div>
      <div className='word__card-word'>{el.word} </div>
      <div className='word__card-word-translate'>{el.wordTranslate}</div>
      <div className='word__card-audio-flex'>
        <span className='word__card-transcription'>{el.transcription}</span>
        <span className='word__card-audio' onClick={handleClickAudio}>
          <img src={audioSvg} alt= "audio" width="20px" />
        </span>
        <audio controls className='audio1' onEnded = {handleClickAudioEnded1}>
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.audio}`} type="audio/ogg" />
        </audio>
        <audio controls className='audio2' onEnded = {handleClickAudioEnded2}>
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.audioMeaning}`} type="audio/mpeg" />
        </audio>
        <audio controls className='audio3' >
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.audioExample}`} type="audio/ogg" />
        </audio>
      </div>
      <h3 className='word__card-textMeaning-title'>Значение</h3>
      <p className='word__card-textMeaning'   dangerouslySetInnerHTML={createMarkuptextMeaning()}>
      
      </p>
      <p className='word__card-textMeaning-translate'>{el.textMeaningTranslate}</p>
      <h3 className='word__card-textMeaning-title'>Пример</h3>
      <p className='word__card-textExample' dangerouslySetInnerHTML ={createMarkuptextExample()}></p>
      <p className='word__card-textExample-translate'>{el.textExampleTranslate}</p>
      {loginState ? (<button className='hard-word' onClick={handleClickHardWord}>Отметить как сложное слово</button>): (<p className='info-reg'>Авторизируйтесь что бы отмечать сложные слова </p>) }
      
    </div>
  );
}

export default WordCard;