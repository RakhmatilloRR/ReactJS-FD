import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(true);
  function handleFilterTextChange(filterText){
    setFilterText(filterText)
  }
  function handleInStockChange(inStockOnly){
    setInStockOnly(inStockOnly)
  }
    const {products} = this.props;
    return (
      <>
        <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}

        />
        <ProductTable 
        products={products} 
        filterText={filterText} 
        inStockOnly={inStockOnly}
        />
      </>
    );
}
export default FilterableProductTable;