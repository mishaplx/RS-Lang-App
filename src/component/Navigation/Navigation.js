import './Navigation.css'
import {Link} from "react-router-dom";


function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <span className="nav__icon"></span>
          <Link to="/" className="nav__name">Меню</Link>
        </li>
        <li>
        <span className="nav__icon"></span>
        <Link to="/textbook" className="nav__name">Электронный учебник</Link>
        </li>
        <li>  
          <span className="nav__icon"></span>
          <Link to="/minigames" className="nav__name">Мини-игры</Link>
        </li>
        <li> 
          <span className="nav__icon"></span>
          <Link to="/statistics" className="nav__name">Статистика</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;