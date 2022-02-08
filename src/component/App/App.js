import './App.css';
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import Main from '../Main/Main.js'
import Navigation from '../Navigation/Navigation.js'
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Textbook from '../Textbook/Textbook';
import Minigames from '../Minigames/Minigames';
import Statistics from '../Statistics/Statistics';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     <Header/>
     <div className="main__flex">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/textbook" element={<Textbook />}/>
        <Route path="/minigames" element={<Minigames />}/>
        <Route path="/statistics" element={<Statistics />}/>
      </Routes>
     </div>
     <Footer/>
     <Login/>
     <Registration />
    </div>
  );
}

export default App;
