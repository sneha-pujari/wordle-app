import React, { useEffect, useState } from 'react'
import { letters } from '../../Data/Letters';
import useWordle from '../../hooks/useWordle';

export default function Keypad({answer}) {
  const [char1, setchar1] = useState('')
  const { handleKeyup } = useWordle(answer)
  function handleKeyClick()
 {
  console.log("key from handleKeyClick: ", char1)
  handleKeyup(char1)
 }  return (
    <div className="keypad">
      {letters && letters.map(l => {
        return (
          <div key={l.key} onClick = { () => {
            setchar1(l.key)
            handleKeyClick()
          }
          }>{l.key}</div>
        )
      })}
    </div>
  )
}