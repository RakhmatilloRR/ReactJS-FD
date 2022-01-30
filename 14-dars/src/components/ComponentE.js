import React, {useContext} from 'react';
import { UserContext } from './UserContext';

function ComponentE() {
    const name = useContext(UserContext)
    return (
      <>
        <h1>Assalomu Alaykum, {name}</h1>
      </>
    );

}
 
export default ComponentE;