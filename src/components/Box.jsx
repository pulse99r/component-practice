import './Box.css'
import { useState } from 'react';

const Box = () => {
  const [color, setColor] = useState(true)

  const handleClick = () => {
    {setColor(!color)}
  }

  return (
    <div id="box" onClick={handleClick} className={color ? "red" : "blue"} >
      {color ? (
        <p>Red {color}</p>

      ) : (
          <p>Blue {color}</p>
      )}
    </div>
  )
}

export default Box;