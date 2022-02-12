
import './WordCard.css';
import audioSvg from '../../../assets/audioSvg.svg'
function WordCard({el}) {
 const imgSrc = `https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.image}`
 
 function handleClickAudio(){
   const audio1 = document.querySelector(".audio1")
  audio1.play()
  //console.log(audioNL.length);
 }
 function handleClickAudioEnded1(){
  const audio2 = document.querySelector(".audio2")
  audio2.play()
 }
 function handleClickAudioEnded2(){
  const audio3 = document.querySelector(".audio3")
  audio3.play()
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
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${ el.audio}`} type="audio/ogg" />
        </audio>
        <audio controls className='audio2' onEnded = {handleClickAudioEnded2}>
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.audioMeaning}`} type="audio/mpeg" />
        </audio>
        <audio controls className='audio3' >
           <source src={`https://raw.githubusercontent.com/rolling-scopes-school/react-rslang-be/main/${el.audioExample}`} type="audio/ogg" />
        </audio>
      </div>
      <h3 className='word__card-textMeaning-title'>Значение</h3>
      <p className='word__card-textMeaning'>{el.textMeaning}</p>
      <p className='word__card-textMeaning-translate'>{el.textMeaningTranslate}</p>
      <h3 className='word__card-textMeaning-title'>Пример</h3>
      <p className='word__card-textExample'>{el.textExample}</p>
      <p className='word__card-textExample-translate'>{el.textExampleTranslate}</p>
    </div>
  );
}

export default WordCard;