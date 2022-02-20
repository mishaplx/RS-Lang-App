import "./HardWord.css";
import { addHardWord } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function HardWord() {
  console.log(addHardWord.data);
  const hardWord = useSelector(state => {
    const { addHardWordReducer } = state;
    return addHardWordReducer.words;
  });
  useEffect(() => {
    console.log("render");
  }, [hardWord]);
  console.log(hardWord);
  return (
    <div className="hardWord">
      {hardWord.map(element => (
        <div className="hardword-item">
          <p>{element.wordEnglish}</p>
          <p>{element.wordTranslate}</p>
        </div>
      ))}
    </div>
  );
}
