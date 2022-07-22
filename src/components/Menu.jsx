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
      .get('https://apiburgerqueenv1.herokuapp.com/', { headers })
      .then((response)=> {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })

  }, [])

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
    </div>
  );
};

export default Menu;
