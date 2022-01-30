import { PureComponent } from 'react';
import FilterableProductTapbe from "./FilterableProductTapbe";
const PRODUCTS = require('../database/products');

class Render extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    return ( <FilterableProductTapbe products={PRODUCTS} /> );
  }
}
export default Render;


