function ProductRow(props) {
    const name = props.name;
    const price = props.price;
    const stocked = props.stocked;
    const result = stocked ? name : <span style={{color: "red"}}>{name}</span>
    return (
      <tr>
        <td>{result}</td>
        <td>{price}</td>
      </tr>
    );
}
export default ProductRow;