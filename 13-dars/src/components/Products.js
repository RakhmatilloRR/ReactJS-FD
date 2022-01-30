import { PureComponent } from 'react';
import FilterableProductTapbe from "./FilterableProductTapbe";
// === dataBase ====
const amockIO_url = "https://amock.io/api/Rakhmatillo/products";

// === Render Component ====
class Products extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch(amockIO_url)
      .then(response => response.json())
      .then(products => {
        this.setState({
          products: products,
          isLoading: false
        })
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: true
        })
      })
  }
  render() { 
    if (this.state.isLoading) {
      return <p>Iltimos sabr qiling Malumot yuklanayapti...</p>
    } else {
      
      return ( <FilterableProductTapbe products={this.state.products} /> );
    }
  }
}
export default Products;