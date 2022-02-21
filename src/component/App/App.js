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
import Sprintgame from '../Sprintgame/Sprintgame';
import AudioCall from '../Minigames/AudioCall/AudioCall';
import AudioCallGame from '../Minigames/AudioCall/AudioCallGame/AudioCallGame';
import AudioCallEnd from '../Minigames/AudioCall/AudioCallEnd/AudioCallEnd';
import HardWord from '../HardWord/HardWord'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main__flex">
        <Navigation />
        <Routes>
          <Route path="/RS-Lang-App/" element={<Main />} />
          <Route path="/RS-Lang-App/textbook" element={<Textbook />} />
          <Route path="/RS-Lang-App/minigames" element={<Minigames />} />
          <Route path="/RS-Lang-App/statistics" element={<Statistics />} />
          <Route path="/RS-Lang-App/minigames/sprint" element={<Sprintgame />} />
          <Route path="/RS-Lang-App/minigames/audiocall" element={<AudioCall />} />
          <Route path="/RS-Lang-App/minigames/audiocall/play" element={<AudioCallGame />} />
          <Route path="/RS-Lang-App/minigames/audiocall/end" element={<AudioCallEnd />} />
          <Route path="/RS-Lang-App/hard-word" element={<HardWord />} />
        </Routes>
      </div>
      <Footer />
      <Login />
      <Registration />
    </div>
  );
}

export default App;
