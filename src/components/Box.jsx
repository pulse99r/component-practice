import './Box.css'
import { useState } from 'react';
import User from './User';

const Box = (user) => {
  const [color, setColor] = useState(false)
  // const [user, setUser] = useState[]

  const handleClick = () => {
    {setColor(!color)}
  }

  return (
    <div id="box" onClick={handleClick} className={color ? "blue" : "red"} >
      {color ? (
        <User user={user.user}/>

      ) : (
        <>
          <p>RED</p>
          <p>Click to display user on BLUE card</p>
        </>
      )}
    </div>

  )
}

export default Box;