import { PureComponent } from 'react';
import ComponentD from './ComponentD';

class ComponentC extends PureComponent {
  state = {  }
  render() { 
    return (
      <div>
        <ComponentD />
      </div>
    );
  }
}
 
export default ComponentC;