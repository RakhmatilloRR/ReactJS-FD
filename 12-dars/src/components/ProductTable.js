import { Component } from 'react';

import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const {products, filterText, inStockOnly} = this.props;
    const rows = [];
    products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />)
    });
    return (
      <table>
         <thead>
           <tr key="">
             <th align="left">Nome</th>
             <th align="left">Narxi</th>
           </tr>
         </thead>
         <tbody>
           {rows}
         </tbody>
      </table>
    );
  }
}
 
export default ProductTable;