
const CardsOrders = ({orders}) => {
  if(orders){  
  console.log(orders)
  //  const list = orders.map(element => 
  //   element
  //   )
  //   console.log(list)
    return (
<table className="table-fixed">
  <thead>
    <tr>
      <th></th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    )}else{
    return (<div>Cargando</div>)
    }
}
export default CardsOrders