import React from 'react';
import ReactDOM from 'react-dom';

import ClassCounter from "./components/classCounter";
import HookCounter from './components/hookCounter';
import Render from './components/Render';

ReactDOM.render(
   <div>
     <h1>ClassCounter</h1>
     <ClassCounter />
     <h1>HookCounter</h1>
     <HookCounter />
     <hr/>
     <h1>DataFetching</h1>
     <Render/>
   </div>
  ,document.getElementById('root')
);

