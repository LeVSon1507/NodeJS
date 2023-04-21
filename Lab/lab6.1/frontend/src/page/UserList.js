import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function UserList() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/users");
        console.log(res);
        if (res.status === 200) {
          setUsers(res.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Users</h1>;
      {!users ? (
        <h1>No Users Found!</h1>
      ) : (
        <>
          {users.map((user) => {
            return (
              <ul>
                <li>{user.name}</li>
              </ul>
            );
          })}
        </>
      )}
    </>
  );
}

export default UserList;
