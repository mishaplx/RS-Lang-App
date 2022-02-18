
import './WordCard.css';
import audioSvg from '../../../assets/audioSvg.svg'

function WordCard({el, chechLogin}) {
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
 function handleClickHardWord(){
   const hardword = document.querySelector('.hard-word')
   const hardwordchecked = document.querySelector('.hard-word-checked')
   hardword.classList.toggle('hide')
   hardwordchecked.classList.toggle('hide')
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
      {chechLogin() ? (<div>
        <button className='hard-word' onClick={handleClickHardWord}>Отметить как сложное слово</button>
        <button className='hard-word-checked hide' onClick={handleClickHardWord}>Cлово отмеченно как сложное</button>
      </div>
      
      ):
       (
       <p className='info-reg'>Авторизируйтесь что бы отмечать сложные слова </p>
       )}
      
    </div>
  );
}

export default WordCard;