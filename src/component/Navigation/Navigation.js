import './Navigation.css'
import {Link} from "react-router-dom";
import imgMenu from '../../assets/menu.svg'
import imgBook from '../../assets/book.svg'
import imgGame from '../../assets/game.svg'
import imgStat from '../../assets/stats.svg'

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="nav__name"> <span className="nav__icon"><img src={imgMenu} width="20px" alt="menu" /></span> <p>Меню</p></Link>
        </li>
        <li>
        
        <Link to="/textbook" className="nav__name"><span className="nav__icon"><img src={imgBook} width="20px" alt="menu" /></span> <p>Электронный учебник</p></Link>
        </li>
        <li>  
          
          <Link to="/minigames" className="nav__name"> <span className="nav__icon"><img src={imgGame} width="20px" alt="menu" /></span><p>Мини-игры</p> </Link>
        </li>
        <li> 
       
          <Link to="/statistics" className="nav__name">    <span className="nav__icon"><img src={imgStat} width="20px" alt="menu" /></span><p>Статистика</p></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;