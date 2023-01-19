import {useState} from "react";

const useWordle = (answer) => {
  
    const [turn, setTurn] = useState(0);    
    const [guess, setGuesses] = useState([]);
    const [currGuess, setCurrGuess] = useState('');
    const [isRight, setIsRight] = useState(false);
    const [history, setHistory] = useState([]);
    
    const guessColour = () => {

    }
    const newGuess = () => {

    }
    const handleKeyup = () => {

    }
    return {turn, currGuess, guess, isRight, handleKeyup}
}
export default useWordle