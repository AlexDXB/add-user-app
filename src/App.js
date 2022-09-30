import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const userListHandler = (uName, uAge) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={userListHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
