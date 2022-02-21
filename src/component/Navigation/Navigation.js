import "./Navigation.css";
import { Link } from "react-router-dom";
import imgMenu from "../../assets/menu.svg";
import imgBook from "../../assets/book.svg";
import imgGame from "../../assets/game.svg";
import imgStat from "../../assets/stats.svg";
import { useEffect, useState } from 'react';
function Navigation() {
  function handleClick(event) {
    const navli = document.querySelectorAll(".title_nav");
    const nav = document.querySelector(".nav");
    const menuImg = document.querySelector(".menuImg");
    menuImg.classList.toggle("rotate");
    nav.classList.toggle("hide-nav");
    for (let i = 0; i < navli.length; i++) {
      navli[i].classList.toggle("hide");
    }
  }
  const [loginState, setLogin] = useState(false)

  function chechLogin(){
    localStorage.getItem(`UserName`) !== null ? setLogin(true) : setLogin(false)
    return loginState
  }
  useEffect(()=>{
    chechLogin()
  },loginState)

 
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/RS-Lang-App/main" className="nav__name">
            <span className="nav__icon" onClick={handleClick}>
              <img src={imgMenu} className="menuImg" width="20px" alt="menu" />
            </span>
            <p className="title_nav">Меню</p>
          </Link>
        </li>
        <li>
          <Link to="/RS-Lang-App/textbook" className="nav__name">
            <span className="nav__icon">
              <img src={imgBook} width="20px" alt="menu" />
            </span>
            <p className="title_nav">Электронный учебник</p>
          </Link>
        </li>
        <li>
          <Link to="/RS-Lang-App/minigames" className="nav__name">
            <span className="nav__icon">
              <img src={imgGame} width="20px" alt="menu" />
            </span>
            <p className="title_nav">Мини-игры</p>
          </Link>
        </li>
        <li>
          <Link to="/RS-Lang-App/statistics" className="nav__name">
            <span className="nav__icon">
              <img src={imgStat} width="20px" alt="menu" />
            </span>
            <p className="title_nav">Статистика</p>
          </Link>
        </li>
        {loginState ? (
  <li>
  <Link to="/RS-Lang-App/hard-word" className="nav__name">
    <span className="nav__icon">
      <img src={imgStat} width="20px" alt="menu" />
    </span>
    <p className="title_nav">Сложные слова</p>
  </Link>
</li>
        ): <p className="nav-info">Авторизируйтесь что бы пользоваться разделом сложные слова</p>}
      
      </ul>
    </nav>
  );
}

export default Navigation;
