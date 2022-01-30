import { PureComponent } from 'react';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFilterTextChange=(e)=>{
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockChange=(e)=>{
    this.props.onInStockChange(e.target.checked);
  }
  render() { 
    return (
       <form>
         <input type="text" placeholder="Izlash..." 
         onChange={this.handleFilterTextChange}/>
         <p>
           <input type="checkbox" id="onlyInStock" name="onlyInStock" 
           onChange={this.handleInStockChange}/>
           <label htmlFor="onlyInStock">
              Faqat omborda mavjud bo'lgan maxsulotlar
           </label>
         </p>
       </form>
    );
  }
}

 
export default SearchBar;