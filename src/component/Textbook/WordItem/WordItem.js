import "./WordItem.css";
function WordItem({ word, wordTranslate }) {
      return (
            <div className="word-item">
                  <p className="word-english">{word}</p>
                  <p className="word-english">{wordTranslate}</p>
            </div>
      );
}

export default WordItem;
