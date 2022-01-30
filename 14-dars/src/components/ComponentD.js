import { PureComponent } from 'react';
import ComponentE from './ComponentE';

class ComponentD extends PureComponent {
  state = {  }
  render() { 
    return (
      <div>
        <ComponentE />
      </div>
    );
  }
}
 
export default ComponentD;