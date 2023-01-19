import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Matrix from "./Grid/Matrix";
import Keypad from "./Keypad/Keypad";
import {
  Box,
  useColorModeValue
} from '@chakra-ui/react';

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
        <Box bg={useColorModeValue('gray.50', 'gray.800')}>
            <Navbar />
            <Matrix currGuess = {currGuess} guesses = {guesses} turn = {turn} />
            <Keypad usedKeys = {usedKeys}/>
        </Box>
    )
}