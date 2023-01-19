import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/answers')
    .then(res => res.json())
    .then(json => {
      const random = json[Math.floor(Math.random()*json.length)]
      setAnswer(random.word)
    })
  }, [setAnswer])
  return (
    <div className="App">
      <Navbar />
      {answer && <div> answer is: {answer} </div>}
    </div>
  );
}

export default App;
