import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardsOrders from "./CardsOrders";

const Orders = () => {
  const [orders, setOrders] = useState()
  useEffect(() =>{ 
    let headers = {
      Authorization : `Bearer ${localStorage.getItem('token')}`
    }
    axios
    .get('http://localhost:8000/orders', {headers})
    .then((response) => {
      setOrders(response.data.result)
    })
    .catch((error)=>{
      console.log(error)
    })
     
   }, [])

    // const body = {
    //   client: "dany 6",
    //   products: [
    //     {
    //       qty: 10,
    //       product: "vodka de papas sabor limon",
    //       price: 500,
    //     },
    //   ],
    // };
    // console.log(headers);
    // axios
    //   .post("http://localhost:8000/orders", body, { headers })
    //   .then((response) => {
    //     console.log("orderrr---------->", response.data);
    //   })
    //   .catch((err) => console.log(err.response.data));

  return (
    <  CardsOrders orders = {orders} />
    // <div className="col s12 m5">
    //   <div className="card-panel teal">
    //     <span className="white-text">tecito</span>
    //   </div>
    //   <div className="card-panel teal">
    //     <span className="white-text">cafecito</span>
    //   </div>
    //   <div className="card-panel teal">
    //     <span className="white-text">chelita</span>
    //   </div>
    //   <div className="card-panel teal">
    //     <span className="white-text">vinito</span>
    //   </div>
    //   <div>
    //     <input type="text" id="client" />
    //     <button className="waves-light btn" onClick={handlePostOrder}>
    //       Crear orden
    //     </button>
    //   </div>
    // </div>
  );
};

export default Orders;
