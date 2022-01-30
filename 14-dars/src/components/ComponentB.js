import { PureComponent } from 'react';
import ComponentC from './ComponentC';

class ComponentB extends PureComponent {
  state = {  }
  render() { 
    return (
      <div>
        <ComponentC />
      </div>
    );
  }
}
 
export default ComponentB;