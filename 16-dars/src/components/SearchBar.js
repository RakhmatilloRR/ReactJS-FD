function SearchBar(props) {
  function handleFilterTextChange(e){
    props.onFilterTextChange(e.target.value);
  }
  function handleInStockChange(e){
    props.onInStockChange(e.target.checked);
  }
    return (
       <form>
         <input type="text" placeholder="Izlash..." 
         onChange={handleFilterTextChange}/>
         <p>
           <input type="checkbox" id="onlyInStock" name="onlyInStock" 
           onChange={handleInStockChange}/>
           <label htmlFor="onlyInStock">
              Faqat omborda mavjud bo'lgan maxsulotlar
           </label>
         </p>
       </form>
    );
  
}

 
export default SearchBar;