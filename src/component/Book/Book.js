
import './Book.css';
function Book() {
  return (
    <div className="book">
       <h3>Уровень сложности слов</h3>
     <div className = "word__level">
       <div className = "level a1">
         <div className = "description__level">
           <p>Easy</p>
           <p className = "number__word">1-600</p>
         </div>
         <div className = "level__word">A1</div>
       </div>
       <div className = "level a2">
       <div className = "description__level">
           <p>Easy</p>
           <p className = "number__word">601-1200</p>
         </div>
         <div className = "level__word">A2</div>
       </div>
       <div className = "level b1">
       <div className = "description__level">
           <p>Medium</p>
           <p className = "number__word">1201-1800</p>
         </div>
         <div className = "level__word">B1</div>
       </div>
       <div className = "level b2">
       <div className = "description__level">
           <p>Medium</p>
           <p className = "number__word">1801-2400</p>
         </div>
         <div className = "level__word">B2</div>
       </div>
       <div className = "level c1">
       <div className = "description__level">
           <p>Hard</p>
           <p className = "number__word">2401-3000</p>
         </div>
         <div className = "level__word">C1</div>
       </div>
       <div className = "level c2">
        <div className = "description__level">
           <p>Hard</p>
           <p className = "number__word">3001-3600</p>
         </div>
         <div className = "level__word">C2</div>
       </div>
     </div>
     <div className = "word">
       <div className = "word__ card"></div>
       <div className = "all__word"></div>
       <div className = "pagination"></div>
     </div>
    </div>
  );
}

export default Book;