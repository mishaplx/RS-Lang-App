
import './WordCard.css';
import audioSvg from '../../../assets/audioSvg.svg'
function WordCard() {
  return (
    <div className="word__card">
      <div className='word__card-img'>img</div>
      <div className='word__card-word'>Лодка </div>
      <div className='word__card-word-translate'>Лодка</div>
      <span className='word__card-transcription'>[ǽlkəhɔ̀ːl]</span>
      <span className='word__card-audio'><img src={audioSvg} alt= "audio" width="20px"/></span>
      <h3 className='word__card-textMeaning-title'>Значение</h3>
      <p className='word__card-textMeaning'>A <i>boat</i> is a vehicle that moves across water.</p>
      <p className='word__card-textMeaning-translate'>Лодка - это транспортное средство, которое движется по воде</p>
      <h3 className='word__card-textMeaning-title'>Пример</h3>
      <p className='word__card-textExample'>A <i>boat</i> There is a small <b>boat</b> on the lake.</p>
      <p className='word__card-textExample-translate'>На озере есть маленькая лодка</p>
      
    </div>
  );
}

export default WordCard;