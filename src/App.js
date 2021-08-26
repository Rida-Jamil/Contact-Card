import React, {useState, useEffect} from 'react';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import Cards from './Cards/Cards';

import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])



  return (
    <>
      {users.map(user => (
        <Cards
          image={user.picture.medium}
          name={user.name.first + " " + user.name.last}
          email={user.email}
          nationality={user.nat}
          age={user.dob.age}
        />
      ))}
    </>
  );



};


export default App;
