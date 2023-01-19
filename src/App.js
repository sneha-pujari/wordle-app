import { useEffect, useState } from "react";
import Wordle from "./Components/Wordle";
import { dictionary } from "./Data/Dictionary";

function App() {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
      const random = dictionary[Math.floor(Math.random()*dictionary.length)]
      console.log("random: ", random)
      setAnswer(random)
   }, [setAnswer])
  return (
    <div className="App">
     <Wordle answer = {answer} />
    </div>
  );
}

export default App;
