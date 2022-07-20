import React from "react";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

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
