import React from 'react';
import ComponentB from './ComponentB';
import { UserContext } from './UserContext';

function ComponenA() {
  
    return (
      <UserContext.Provider value="Rakhmatillo">
        <ComponentB />
      </UserContext.Provider>
    );
 
}
 
export default ComponenA;