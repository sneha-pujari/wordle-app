import {useState} from "react";

const useWordle = (answer) => {
  
    const [turn, setTurn] = useState(0);    
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [currGuess, setCurrGuess] = useState('');
    const [isRight, setIsRight] = useState(false);
    const [history, setHistory] = useState([]);
    
    const guessColour = () => {
        let answerArray = [...answer]
        let modifiedGuess = [...currGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })
        //find green letters
        modifiedGuess.forEach((letter, index) => {
            if(answerArray[index] == letter.key) {
                modifiedGuess[index].color = 'green'
                answerArray[index] = null
            }
        })
        //find yellow letters 
        modifiedGuess.forEach((letter, index) => {
            if(answerArray.includes(letter.key) && letter.color !== 'green') {
                modifiedGuess[index].color = 'yellow'
                answerArray[answerArray.indexOf(letter.key)] = null
            }
        })
        console.log("guess ", currGuess)
        return modifiedGuess
    }
    //1. add new guess to the list 
    //2. update isRight state to true if correct
    //3. increment turn 
    const newGuess = (modifiedGuess) => {
        if(currGuess === answer) {
            setIsRight(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = modifiedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrGuess('')
    }
    const handleKeyup = ({key}) => {
        if(key === "Enter") {
            //add guess if turn === 5 and no duplicate words
            if(turn > 5) {
                console.log("used all the turns")
                return
            }
            if(history.includes(currGuess)) {
                console.log("already tried that word")
                return 
            }
            if(currGuess.length !== 5) {
                console.log("word should be 5 char long")
                return 
            }
        const modified = guessColour()
        newGuess(modified)
        console.log("answer: ", answer)
        console.log("modified: ", modified)
        }
        if(key === "Backspace") {
            setCurrGuess((prev) => {
                return prev.slice(0, -1)
            })
        }
        if(/^[A-Za-z]$/.test(key)) {
            if(currGuess.length < 5) {
                setCurrGuess((prev) => {
                    return prev + key.toLowerCase();
                })
            }
        }
        console.log(key)
    }
    return {turn, currGuess, guesses, isRight, handleKeyup}
}
export default useWordle