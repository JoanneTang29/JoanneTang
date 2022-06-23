// 1. IMPORT REACT
import React, { useState, useEffect } from 'react';
// 2. ADDITIONAL IMPORTS
import axios from 'axios';
// 3. CREATE COMPONENT
const User = () => {
  // LETS CREATE A VARIABLE TO HOLD OUR APPLICATION STATE
  const [users, setUsers] = useState([]);
  // LETS CREATE OUR EFFECT
  useEffect(() => {
    // Create a helper function to make api calls
    // const helperFunction = async () => {
    //   // Retrieve data from api
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   // Lets retrieve the data from the response object
    //   const data = response.data;
    //   setUsers(data);
    // };
    // helperFunction();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);
  // Create our userList
  const usersList = users.map((element) => {
    return (
      <div className="ui card" key={element.id}>
        <div className="image">
          <i className="user icon large middle"></i>
        </div>
        <div className="content">
          <a className="header">{element.name}</a>
          <div className="meta">
            <span className="date">Company: {element.company.name}</span>
          </div>
          <div className="description">
            Company Catch Phrase: {element.company.catchPhrase}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="envelope icon"></i>
            Email: {element.email}
          </a>
        </div>
      </div>
    );
  });
  return <div>{usersList}</div>;
};
// 4. EXPORT COMPONENT
export default User;
