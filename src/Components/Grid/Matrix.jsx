import React from 'react'

// components
import Row from './Row'

export default function Grid({ guesses, currGuess, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currGuess={currGuess} />
        }
        return <Row key={i} guess={g} /> 
      })}
    </div>
  )
}