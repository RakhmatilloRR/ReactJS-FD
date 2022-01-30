import React, { PureComponent } from 'react';
import DataFetching from './DataFetching';

class Render extends PureComponent {
  state = {  }
  render() { 
    return ( 
      <div>
        <DataFetching/>
      </div>
     );
  }
}
 
export default Render;