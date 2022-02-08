import './Navigation.css'
import {Link} from "react-router-dom";


function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <span className="nav__icon"></span>
          <Link to="/" className="nav__name">Menu</Link>
        </li>
        <li>
        <span className="nav__icon"></span>
        <Link to="/textbook" className="nav__name">Textbook</Link>
        </li>
        <li>  
          <span className="nav__icon"></span>
          <Link to="/minigames" className="nav__name">MiniGames</Link>
        </li>
        <li> 
          <span className="nav__icon"></span>
          <Link to="/statistics" className="nav__name">Statistic</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;