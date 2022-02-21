import './Sprintgame.css' 




function ResultElement(props) {

return (
   <li>
       {props.item.word} - {props.item.translate}
    </li>
    );
}
  
export default ResultElement;