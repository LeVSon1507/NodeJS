import React from 'react';
import axios from 'axios';

function User() {
  const [users, setUsers] = React.useState([])
  const handleChange = (e) => {
    const { value } = e.target
    setUsers(value)
  }

  const handleAddUserName = async() => {
    try {
      const res = await axios.post('http://localhost:3001/api/users/addUser', {  
      name: users
    })
    console.log(res)
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddUserName}>Add</button>
    </div>
  )
}

export default User;