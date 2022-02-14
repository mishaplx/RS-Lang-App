
import {Link} from "react-router-dom";

function Minigames() {
    return (
      <main className="main">
        <div className="game">
        <h3 className="game__title">Игры</h3>
        <p className="game__subtitle">Закрепи новые слова при помощи игр.</p>
        <div className="game__flex">
          <Link to ="/minigames" className="audioCall-game" >
            <h3>Аудиовызов</h3>
            <p>Попробуй понять, какое слово было произнесено.</p>
          </Link>
          <Link to ="/minigames/sprint" className="sprint-game" href="/minigames">
            <h3>Спринт</h3>
            <p>Как можно быстрее определи верный перевод слова или нет.</p>
          </Link>
        </div>
      </div>
      </main>
    );
  }
  
  export default Minigames;