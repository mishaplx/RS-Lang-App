import "./WordItem.css";
function WordItem({ word, wordTranslate ,onClick}) {
      return (
            <div className="word-item" onClick={onClick}>
                  <p className="word-english">{word}</p>
                  <p className="word-english">{wordTranslate}</p>
            </div>
      );
}

export default WordItem;
