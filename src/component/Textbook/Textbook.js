import "./Textbook.css";
import WordCard from "./WordCard/WordCard";
import WordItem from "./WordItem/WordItem";
function Textbook() {
  return (
    <div className="textbook">
      <h2>Учебник</h2>
      <h3>Уровень сложности слов</h3>
      <div className="word__level">
        <div className="level a1">
          <div className="description__level">
            <p>Easy</p>
            <p className="number__word">1-600</p>
          </div>
          <div className="level__word">A1</div>
        </div>
        <div className="level a2">
          <div className="description__level">
            <p>Easy</p>
            <p className="number__word">601-1200</p>
          </div>
          <div className="level__word">A2</div>
        </div>
        <div className="level b1">
          <div className="description__level">
            <p>Medium</p>
            <p className="number__word">1201-1800</p>
          </div>
          <div className="level__word">B1</div>
        </div>
        <div className="level b2">
          <div className="description__level">
            <p>Medium</p>
            <p className="number__word">1801-2400</p>
          </div>
          <div className="level__word">B2</div>
        </div>
        <div className="level c1">
          <div className="description__level">
            <p>Hard</p>
            <p className="number__word">2401-3000</p>
          </div>
          <div className="level__word">C1</div>
        </div>
        <div className="level c2">
          <div className="description__level">
            <p>Hard</p>
            <p className="number__word">3001-3600</p>
          </div>
          <div className="level__word">C2</div>
        </div>
      </div>
      <div className="word">
        <h3 className="word__title">Слова</h3>
        <div className="word__flex">
          <div className="word__block">
            <div className="word__block-flex">
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
              <WordItem />
            </div>
          </div>
          <div className="word__description">
            <WordCard />
          </div>
        </div>
      </div>
      <div className="pagination">pagination</div>
      <div className="game">
        <h3 className="game__title">Игры</h3>
        <p className="game__subtitle">Закрепи новые слова при помощи игр.</p>
        <div className="game__flex">
          <div className="audioCall-game">
            <h3>Аудиовызов</h3>
            <p>Попробуй понять, какое слово было произнесено.</p>
          </div>
          <div className="sprint-game">
            <h3>Спринт</h3>
            <p>Как можно быстрее определи верный перевод слова или нет.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textbook;
