import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Matrix from "./Grid/Matrix";
import Keypad from "./Keypad/Keypad";

export default function Wordle({answer}) {
    const { currGuess, handleKeyup, guesses, isRight, turn, usedKeys } = useWordle(answer)

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
            <Matrix currGuess = {currGuess} guesses = {guesses} turn = {turn} />
            <Keypad usedKeys = {usedKeys}/>
        </div>
    )
}