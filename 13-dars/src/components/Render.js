import { PureComponent } from 'react';
import { BrowserRouter, Link, Route, Routes, Switch,  } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Products from './Products';


// === Render Component ====
class Render extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {  
      return (
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Asosiy</Link>
            </li>
            <li>
              <Link to="/products">Maxsulotlar</Link>
            </li>
            <li>
              <Link to="/about">Biz Haqimizda</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>
      );
  }
}
export default Render;


