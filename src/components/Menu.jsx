import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Menu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/');
  };
  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    } 
    axios
      .get('http://localhost:8000/', { headers })
      .then((response)=> {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [])

  const handlePostOrder = (e) => {
    e.preventDefault();
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    const body =   {client: "dany 6",
    products : [{
      qty: 6,
      product: "patatas",
      price: 5000
      },
      {
        qty: 1,
        product: "patatas fritas",
        price: 10000
      }]
    }
    console.log(headers)
    axios
    .post('http://localhost:8000/orders',  body, { headers })  
    .then((response) => {
      console.log("orderrr---------->",response.data)
    }) 
    .catch((err) => console.log(err));
  }
  return (
    <div className="row">
      <div className="col s12 m5">
        <div className="card-panel teal">
          <span className="white-text">tecito</span>
        </div>
        <div className="card-panel teal">
          <span className="white-text">cafecito</span>
        </div>
        <div className="card-panel teal">
          <span className="white-text">chelita</span>
        </div>
        <div className="card-panel teal">
          <span className="white-text">vinito</span>
        </div>
        <div>
          <button className="waves-effect waves-light btn" type="submit"
      onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div>
        <input type="text" id="client"/>
      <button className="waves-light btn" onClick={handlePostOrder}>Crear orden</button>
      </div>
    </div>
  );
};


export default Menu
