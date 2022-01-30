import { PureComponent } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {filterText: "", inStockOnly: false};
  }
  handleFilterTextChange=(filterText)=>{
    this.setState({
      filterText: filterText,
    });
  }
  handleInStockChange=(inStockOnly)=>{
    this.setState({
      inStockOnly: inStockOnly,
    });
  }
  render() { 
    const {products} = this.props;
    const {filterText, inStockOnly} = this.state;
    return (
      <>
        <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange={this.handleInStockChange}

        />
        <ProductTable 
        products={products} 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        />
      </>
    );
  }
}
 
export default FilterableProductTable;