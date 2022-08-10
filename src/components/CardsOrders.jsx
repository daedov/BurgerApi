/** @format */

import { formatISO } from 'date-fns';

const CardsOrders = ({ orders, users }) => {
  if (orders && users) {
    console.log(orders);
    console.log(users);

    const arrayInfoOrders = orders.map((element) => {
      const date = formatISO(new Date(element.dataEntry), {
        representation: 'date',
      });
      const time = formatISO(new Date(element.dataEntry), {
        representation: 'time',
      });
      let propertiesOrders = {
        client: element.client,
        userId: element.userId,
        date: date,
        hour: time.slice(0, 5),
        status: element.status,
        products: element.products,
        id: element._id,
      };
      return propertiesOrders;
    });
    const nameUserIdOrder = (id) => {
      const user = users.find((e) => e._id === id);
      return user.email;
    };
    return (
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Creada por</th>
            <th>Fecha y hora</th>
            <th>Estado</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
          {arrayInfoOrders.map((element) => (
            <tr key={element.id}>
              <td>{nameUserIdOrder(element.userId)}</td>
              <td>
                {element.date}, {element.hour}hrs.
              </td>
              <td>{element.status}</td>
              <td>
                {element.products.map((el) => (
                  <table key={el.product}>
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Valor Unidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{el.product}</td>
                        <td>{el.qty}</td>
                        <td>{el.price}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div>Cargando</div>;
  }
};
export default CardsOrders;
