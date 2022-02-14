function Sprintgame() {
    return (
      <main className="main">
        <div className="sprint">
          <div className="start-screen">
            <div className="start-screen__title">
            <p className="sprint-game__title">Спринт</p>
            <p className="sprint-game__description">Как можно быстрее определи верный перевод слова или нет!</p>
            </div>
            <div className="start-screen__menu">
              <p className="start-screen__menu_title">Выберите уровень сложности</p>
              <div className="start-screen__menu_buttons">
                <div className="level-button" role="button">A1</div>
                <div className="level-button" role="button">A2</div>
                <div className="level-button" role="button">B1</div>
                <div className="level-button" role="button">B2</div>
                <div className="level-button" role="button">C1</div>
                <div className="level-button" role="button">C2</div>
              </div>
              <button className="start-game-button">Начать</button>
            </div>
          </div> 
        </div>
      </main>
    );
  }
  
  export default Sprintgame;