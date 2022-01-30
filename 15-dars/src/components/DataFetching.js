import React, { useState, useEffect } from 'react';

import axios from 'axios';

function DataFetching(){
  const [user, setUser] = useState({});
  const [id, setId] = useState(3);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
useEffect(() => {
  axios(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((result) => {
    console.log(result.data);
    setUser(result.data);

  }).catch((err) => {
    console.log(err);
  });
},[idFromButtonClick]); 
  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  return (
    <div>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <button onClick={handleClick}>clic me!</button>
      <table style={{width: "500px", textAlign: "left"}}>
        <thead>
        <tr key="th">
          <th>name:</th>
          <th>phone:</th>
          <th>email:</th>
        </tr>
        </thead>
        <tbody>
        <tr key="td">
          <td>{user.name}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );

  
}
 
export default DataFetching;