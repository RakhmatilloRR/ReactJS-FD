import { PureComponent } from 'react';
import ComponentA from './ComponentA';

class Render extends PureComponent {
  state = {  }
  render() { 
    return (
      <div>
        <ComponentA />
      </div>
    );
  }
}
 
export default Render;