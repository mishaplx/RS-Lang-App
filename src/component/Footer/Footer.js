import './Footer.css';
import logo from '../../assets/logo.svg'
function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
      <a href="https://rs.school/js/">
        <img src = {logo} alt="logo" width="100px" height="100px"/>
        </a>
      </div>
      <div className="name__dev">
        <a href="https://github.com/mishaplx">mishaplx</a>
      </div>
      <div className="item">
      &copy; 2022
      </div>
    </footer>
  );
}

export default Footer;