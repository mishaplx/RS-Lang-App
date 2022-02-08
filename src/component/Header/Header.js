import './Header.css'
import loginSvg from '../../assets/header/login.png'
import logOutSvg from '../../assets/header/log-out-outline.svg'
function Header() {
  const toggleMenu = function() {
    const login = document.querySelector('.login')
    login.classList.toggle('open');
    const registration = document.querySelector('.registration')
    registration.classList.remove('open');
}

  const handleClickLogin = (e) => {
    e.stopPropagation();
    toggleMenu();
  }
  return (
    <header className="header">
      <h1>RS Lang</h1>
      <div className="block__login">
        <button className="button__log-in" onClick={handleClickLogin}><img src = {loginSvg} width = "20px" alt="logSvg"/>  <span>LOGIN</span></button>
        <button className="button__log-out"> <img src = {logOutSvg} width = "20px" alt="logSvg"/> <span>LOGOUT</span></button>
      </div>
    </header>
  );
}

export default Header;