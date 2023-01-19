import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Matrix from "./Grid/Matrix";

export default function Wordle({answer}) {
    const { currGuess, handleKeyup, guesses, isRight, turn } = useWordle(answer)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
    
      return () => {
        window.removeEventListener('keyup', handleKeyup)
      }
    }, [handleKeyup])
    
    useEffect(() => {
      console.log(guesses, turn, isRight)
    }, [guesses, turn, isRight])
    

    return( 
        <div>
            <Navbar />
            {/* {answer && <div> currGuess is: {currGuess} and {answer}</div>} */}
            <Matrix currGuess = {currGuess} guesses = {guesses} turn = {turn} />
        </div>
    )
}