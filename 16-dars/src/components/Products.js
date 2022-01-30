import { useState, useEffect } from 'react';
import FilterableProductTapbe from "./FilterableProductTapbe";
// === dataBase ====
const amockIO_url = "https://amock.io/api/Rakhmatillo/products";
// === Render Component ====
function Products(){
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(amockIO_url)
      .then(response => response.json())
      .then(products => {
        setProducts(products);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      })
  }, []);
  if (isLoading) {
    return <p>Iltimos sabr qiling Malumot yuklanayapti...</p>
  } else {
    return ( <FilterableProductTapbe products={products} /> );
  }
}
export default Products;