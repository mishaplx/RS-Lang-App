import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import NAvigation from '../Navigation/Navigation.js'
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
function App() {
  return (
    <div className="app">
     <Header/>
     <div className="main__flex">
      <NAvigation />
      <Main/>
     </div>
     <Footer/>
     <Login/>
     <Registration />
    </div>
  );
}

export default App;
