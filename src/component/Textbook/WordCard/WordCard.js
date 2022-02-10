
import './WordCard.css';
import audioSvg from '../../../assets/audioSvg.svg'
function WordCard({el}) {
  
  console.log(`https://github.com/rolling-scopes-school/react-rslang-be/tree/main/files${el.image}`);
  return (
    <div className="word__card">
      <div className='word__card-img'> <img src={el.image} alt="img"/></div>
      <div className='word__card-word'>{el.word} </div>
      <div className='word__card-word-translate'>{el.wordTranslate}</div>
      <span className='word__card-transcription'>{el.transcription}</span>
      <span className='word__card-audio'><img src={audioSvg} alt= "audio" width="20px"/></span>
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