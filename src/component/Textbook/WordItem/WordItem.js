
import './WordItem.css';
function WordItem(props) {
  return (
    <div className="word-item">

     <p className='word-english'>{props.text}</p>
     <p className='word-english'>столица</p>
    </div>
  );
}

export default WordItem;