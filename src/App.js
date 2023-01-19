import { useEffect, useState } from "react";
import Wordle from "./Components/Wordle";
import answers from "../data/db.json";

function App() {
  const [answer, setAnswer] = useState(null);
  console.log("answers: ", answers)
  useEffect(() => {
    fetch(answers)
    .then(res => res.json())
    .then(json => {
      const random = json[Math.floor(Math.random()*json.length)]
      setAnswer(random.word)
    })
  }, [setAnswer])
  return (
    <div className="App">
     <Wordle answer = {answer} />
    </div>
  );
}

export default App;
