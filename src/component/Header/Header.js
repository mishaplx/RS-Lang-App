import './Header.css'
function Header() {
  return (
    <header className="header">
      <h1>RS Lang</h1>
      <div className="block__login">
        <button className="button__log-in">LOGIN</button>
        <button className="button__log-out">LOGOUT</button>
      </div>
    </header>
  );
}

export default Header;