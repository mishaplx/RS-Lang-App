import './Sprintgame.css' 
import {useState, useEffect} from 'react';



function Timer(props) {

const [timeLeft, setTimeLeft] = useState(60);


useEffect(() => {
  let timer;
  if (!props.showScore && props.isGameStart) {
    timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }
  if (timeLeft === 0) {
    props.timerEnd();
    setTimeLeft(30);
  }
  return () => clearTimeout(timer);

}, [ timeLeft, props.isGameStart]);

return (
         <div className='timer'><span className='timer-icon'></span> {`${timeLeft}`}</div>  
    );
}
  
  export default Timer;