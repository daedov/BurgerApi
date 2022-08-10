import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardsOrders from "./CardsOrders";

const Orders = () => {
  const [orders, setOrders] = useState()
  const [users, setUsers] = useState()
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
    axios
    .get('http://localhost:8000/users', {headers})
    .then((response)=>{
      setUsers(response.data.result)
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
    <CardsOrders orders = {orders} users = {users}/>
  );
};

export default Orders;
