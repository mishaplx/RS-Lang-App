import { useEffect, useState } from "react";
import "./Textbook.css";
import WordCard from "./WordCard/WordCard";
import WordItem from "./WordItem/WordItem";
function Textbook() {
      const [words, setWords] = useState([]);
      const [loading, setLoading] = useState(true);
      const [page, setPage] = useState(0);
      const [groupe, setGroupe] = useState(0);

      useEffect(async () => {
            setLoading(true);
            const res = await fetch(
                  `https://react-rs-language.herokuapp.com/words?group=${groupe}&page=${page}`
            );
            setWords(await res.json());
            setLoading(false);
      }, [page, groupe]);
      function handleClick(event) {
            const { value } = event.target.closest(".level");
            const [groupeValue, pageValue] = value.split("-");
            setPage(pageValue);
            setGroupe(groupeValue);
      }
      return (
            <div className="textbook">
                  <h2>Учебник</h2>
                  <h3>Уровень сложности слов</h3>
                  <div className="word__level">
                        <button className="level a1" onClick={handleClick} value="0-0"
                        >
                              <div className="description__level">
                                    <p>Easy</p>
                                    <p className="number__word">1-600</p>
                              </div>
                              <div className="level__word">A1</div>
                        </button>
                        <button className="level a2" onClick={handleClick} value = "1-0">
                              <div className="description__level">
                                    <p>Easy</p>
                                    <p className="number__word">601-1200</p>
                              </div>
                              <div className="level__word">A2</div>
                        </button>
                        <button className="level b1" onClick={handleClick} value = "2-0">
                              <div className="description__level">
                                    <p>Medium</p>
                                    <p className="number__word">1201-1800</p>
                              </div>
                              <div className="level__word">B1</div>
                        </button>
                        <button className="level b2" onClick={handleClick} value = "3-0">
                              <div className="description__level">
                                    <p>Medium</p>
                                    <p className="number__word">1801-2400</p>
                              </div>
                              <div className="level__word">B2</div>
                        </button>
                        <button className="level c1" onClick={handleClick} value = "4-0">
                              <div className="description__level">
                                    <p>Hard</p>
                                    <p className="number__word">2401-3000</p>
                              </div>
                              <div className="level__word">C1</div>
                        </button>
                        <button className="level c2" onClick={handleClick} value = "5-0">
                              <div className="description__level">
                                    <p>Hard</p>
                                    <p className="number__word">3001-3600</p>
                              </div>
                              <div className="level__word">C2</div>
                        </button>
                  </div>
                  <div className="word">
                        <h3 className="word__title">Слова</h3>
                        <div className="word__flex">
                              <div className="word__block">
                                    {loading ? (
                                          "Loading..."
                                    ) : (
                                          <div className="word__block-flex">
                                                {words.map((element) => (
                                                      <WordItem
                                                            key={element.word}
                                                            word={element.word}
                                                            wordTranslate={
                                                                  element.wordTranslate
                                                            }
                                                      />
                                                ))}
                                          </div>
                                    )}
                              </div>
                              <div className="word__description">
                                    <WordCard />
                              </div>
                        </div>
                  </div>
                  <div className="pagination">
                        <p className="number__page" data-index-number="0">
                              0
                        </p>
                        <p className="number__page" data-index-number="1">
                              1
                        </p>
                  </div>
                  <div className="game">
                        <h3 className="game__title">Игры</h3>
                        <p className="game__subtitle">
                              Закрепи новые слова при помощи игр.
                        </p>
                        <div className="game__flex">
                              <div className="audioCall-game">
                                    <h3>Аудиовызов</h3>
                                    <p>
                                          Попробуй понять, какое слово было
                                          произнесено.
                                    </p>
                              </div>
                              <div className="sprint-game">
                                    <h3>Спринт</h3>
                                    <p>
                                          Как можно быстрее определи верный
                                          перевод слова или нет.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Textbook;
