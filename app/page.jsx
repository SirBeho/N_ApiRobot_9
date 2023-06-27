'use client'
import "./globals.css"
import { useState, useEffect } from "react";
import Card  from "../components/Card";

 function App() {
  const [users, setusers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const resJson = await res.json();
      setusers(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
   
  return (
    <div className="App">
      <h1 className="title">RoboFriends</h1>
      <div className="users-list">
          {users.map((user) => (
            <Card key={user.id} data={user} />
          ))}
  </div>  
    </div>
  );
}

export default App;
