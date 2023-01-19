import React, { useEffect, useState } from 'react'
import {letters} from "../../Data/Letters";

export default function Keypad({ usedKeys }) {
  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}><b>{l.key}</b></div>
        )
      })}
    </div>
  )
}