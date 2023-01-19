import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Matrix from "./Grid/Matrix";
import Keypad from "./Keypad/Keypad";
import {
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import Modals from "./Modal/Modals";

export default function Wordle({answer}) {
    const { currGuess, handleKeyup, guesses, isRight, turn, usedKeys } = useWordle(answer)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
    
      if(isRight){
        console.log('congrats, you win!')
        setTimeout(() => {
          setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup', handleKeyup)
      }

      if(turn > 5) {
        console.log("try again, out of guesses!")
        setTimeout(() => {
          setShowModal(true)
        }, 2000);
        window.removeEventListener('keyup', handleKeyup)
      }

      return () => {
        window.removeEventListener('keyup', handleKeyup)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleKeyup])
   
    return( 
        <Box bg={useColorModeValue('gray.50', 'gray.800')}>
            <Navbar />
            <Matrix currGuess = {currGuess} guesses = {guesses} turn = {turn} />
            <Keypad usedKeys = {usedKeys}/>
            {showModal && <Modals isRight={isRight} turn={turn} answer = {answer} />}
        </Box>
    )
}