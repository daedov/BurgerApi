import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import BarChart from "./BarChar";
// import {UserData} from '../Data'

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/');
  };
  const handleOrders =()=>{
    navigate('/orders')
  }

  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    } 
    axios
      .get('http://localhost:8000/users', { headers })
      .then((response)=> {
        console.log(response.data)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [])

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <>
    <div className="row">
    <button className="waves-effect waves-light btn" type="submit"
      onClick={handleLogout}>Logout</button>
      <button className="waves-effect waves-light btn" type="submit"
      onClick={handleOrders}>Orders</button>
    </div>
    <div id="myChart">
    <div style={{ width: 700 }}>
        {/* <BarChart chartData={userData} /> */}
      </div>
    </div>
    </>
  );
};


export default Dashboard
