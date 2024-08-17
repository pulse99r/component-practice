import './User.css'
const User = (user) => {

  console.log("User user:==>", {user})

  return (
    <div className='user'>
      <ul>
        <li><span className='label'>Name:</span> {user.user.fname} {user.user.lname}</li>
        <li><span className='label'>City:</span> {user.user.city}</li>
        <li><span className='label'>Website:</span> {user.user.website}</li>
        <li><span className='label'>Date:</span> {user.user.created_at}</li>
      </ul>

    </div>
  )
};

export default User;