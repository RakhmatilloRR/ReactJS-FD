
import ProductRow from './ProductRow';

function ProductTable(props) {
    const products = props.products;
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;
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
 
export default ProductTable;