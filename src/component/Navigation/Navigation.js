import './Navigation.css'
function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <span className="nav__icon"></span>
          <span className="nav__name">Menu</span>
        </li>
        <li>
        <span className="nav__icon"></span>
          <span className="nav__name">TextBoox</span>
        </li>
        <li>  
          <span className="nav__icon"></span>
          <span className="nav__name">MiniGames</span></li>
        <li> 
          <span className="nav__icon"></span>
          <span className="nav__name">Statistic</span></li>
      </ul>
    </nav>
  );
}

export default Navigation;