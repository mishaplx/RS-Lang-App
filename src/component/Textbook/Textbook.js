import { useEffect, useState } from "react";
import "./Textbook.css";
import WordCard from "./WordCard/WordCard";
import WordItem from "./WordItem/WordItem";
import Pagination from "./Pagination/Pagination";
import React from "react";
import Minigames from "../Minigames/Minigames";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";



function Textbook() {
  const arrPagin = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
  ];

  const [words, setWords] = useState([]);
  const [groupe, setGroupe] = useState(localStorage.getItem('groupe'));
  const [page, setPage] = useState(localStorage.getItem('page'));
  const [loading, setLoading] = useState(true);
  const [bookState, setBookState] = useState([]);
  const [wordCard, setWordCard] = useState("alcohol");
  const [loginState, setLogin] = useState(false)
  
  localStorage.setItem('page', page)
  localStorage.setItem('groupe', groupe)


  function chechLogin(){
    localStorage.getItem(`UserName`) !== null ? setLogin(true) : setLogin(false)
    return loginState
  }

  useEffect(()=>{
    
    const apiUrl = `https://react-rs-language.herokuapp.com/words?group=${groupe}&page=${page}`
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setWords(allPersons);
    });
    console.log('render1');
 }, [page, groupe])

 

   useEffect(() => {
    const apiUrl = `https://react-rs-language.herokuapp.com/words?group=${groupe}&page=${page}`
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      let objWordCard = allPersons.filter(el => el.word === wordCard);
      setBookState(objWordCard);
      console.log('render2');
      setLoading(false)
    });
   },[bookState]);

  
  function handleClickWordItem(event) {
    setLoading(true)
    const englishWord = event.currentTarget.children[0].innerHTML;
    setWordCard(englishWord);
  }


  function handleClick(event) {
    setLoading(true)
    const { value } = event.target.closest(".level");
    const [groupeValue, pageValue] = value.split("-");
    setPage(pageValue);
    setGroupe(groupeValue);
  }

  function handleClickPag(event) {
    setLoading(true)
    const numberPageinPAgination = event.target.innerHTML;
    setPage(Number(numberPageinPAgination) - 1);
  }
  return (
    <div className="textbook">
      <h2>Учебник</h2>
      <h3>Уровень сложности слов</h3>
      <div className="word__level">
        <button className="level a1" onClick={handleClick} value="0-0">
          <div className="description__level">
            <p>Easy</p>
            <p className="number__word">1-600</p>
          </div>
          <div className="level__word">A1</div>
        </button>
        <button className="level a2" onClick={handleClick} value="1-0">
          <div className="description__level">
            <p>Easy</p>
            <p className="number__word">601-1200</p>
          </div>
          <div className="level__word">A2</div>
        </button>
        <button className="level b1" onClick={handleClick} value="2-0">
          <div className="description__level">
            <p>Medium</p>
            <p className="number__word">1201-1800</p>
          </div>
          <div className="level__word">B1</div>
        </button>
        <button className="level b2" onClick={handleClick} value="3-0">
          <div className="description__level">
            <p>Medium</p>
            <p className="number__word">1801-2400</p>
          </div>
          <div className="level__word">B2</div>
        </button>
        <button className="level c1" onClick={handleClick} value="4-0">
          <div className="description__level">
            <p>Hard</p>
            <p className="number__word">2401-3000</p>
          </div>
          <div className="level__word">C1</div>
        </button>
        <button className="level c2" onClick={handleClick} value="5-0">
          <div className="description__level">
            <p>Hard</p>
            <p className="number__word">3001-3600</p>
          </div>
          <div className="level__word">C2</div>
        </button>
      </div>
      <div className="word-block">
        <h3 className="word__title">Слова</h3>
        <div className="word__flex">
          <div className="word__block">
            {loading ? 
            <ClipLoader color={"rgb(110, 245, 211)"} loading={loading}  size={30} /> : (
              <div className="word__block-flex">
                {words.map(element => (
                  <WordItem
                    key={element.word}
                    word={element.word}
                    wordTranslate={element.wordTranslate}
                    onClick={handleClickWordItem}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="word__description">
            {loading ? <ClipLoader color={"rgb(110, 245, 211)"} loading={loading}  size={30} /> : bookState.map(el => <WordCard el={el} chechLogin = {chechLogin} />)}
          </div>
        </div>
      </div>
      <div className="pagination">
        {arrPagin.map(el => (
          <Pagination number={el} key={el} onClick={handleClickPag} />
        ))}
      </div>
      <Minigames />
      
    </div>
  );
}

export default Textbook;
