import { PureComponent } from 'react';

class ProductRow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const {name, price, stocked} = this.props.product;
    const result = stocked ? name : <span style={{color: "red"}}>{name}</span>
    return (
      <tr>
        <td>{result}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
 
export default ProductRow;