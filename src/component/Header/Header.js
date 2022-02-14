import "./Header.css";
import loginSvg from "../../assets/header/login.png";
import logOutSvg from "../../assets/header/log-out-outline.svg";
import { Link } from "react-router-dom";
function Header() {
  const toggleMenu = function () {
    const login = document.querySelector(".login");
    login.classList.toggle("open");
    const registration = document.querySelector(".registration");
    registration.classList.remove("open");
    const frameLog = document.querySelector(".login-frame");
    frameLog.style.display = "block";
  };

  const handleClickLogin = e => {
    e.stopPropagation();
    toggleMenu();
  };
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <header className="header">
      <Link to="/">
      <h1>RS Lang</h1>
      </Link>
      <div className="block__login">
        <button className="button__log-in" onClick={handleClickLogin}>
          <img src={loginSvg} width="20px" alt="logSvg" />{" "}
          <span>{localStorage.getItem(`UserName`) || `Вход`}</span>
        </button>
        <button className="button__log-out" onClick={logout}>
          <img src={logOutSvg} width="20px" alt="logSvg" /> <span>Выйти</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
