import { useState } from 'react';
import './App.css'
import Box from './components/Box'
import userData from './components/data/user-data'

function App() {
  const [users, setUsers] = useState(userData)

  // const getUserData = () => {
  //   fetch("https://collect-data-be.onrender.com/users/")
  //     .then((response) => response.json())
  //     .then(response => setUsers(response))
  // }
  // setUsers(userData)
  console.log("App users", users)

  return (
    <div className="app">
      {users.map((user, id) => 
        <Box key={id} user={user}/>
      )}
    </div>
  )
}

export default App
