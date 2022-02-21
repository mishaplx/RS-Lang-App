import './Sprintgame.css' 
import ResultElement from './ResultElement';




function Results(props) {



return (
    <div className='dictionary'>
    <ul className='right-list'>
      <p>Знаю : {props.rightWords.length}</p>
    {props.rightWords.map(item => <ResultElement item = {item} />)}
  </ul>
  <ul className='wrong-list'>
  <p>Не знаю : {props.wrongWords.length}</p>
    {props.wrongWords.map(item => <ResultElement item = {item} />)}
  </ul>
  </div>
 )
}
  
export default Results;