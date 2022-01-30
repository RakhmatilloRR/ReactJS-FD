let PRODUCTS;
const url = "https://amock.io/api/Rakhmatillo/products";
fetch(url)
  .then(response => response.json())
  .then(products => {
    PRODUCTS = products;
  })
module.exports = PRODUCTS;
