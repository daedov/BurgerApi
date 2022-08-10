
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders'
import './index.css';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/Dashboard" element={<ProtectedRoutes>  <Dashboard/> </ProtectedRoutes> } /> 
      <Route path="/Orders" element={<ProtectedRoutes>  <Orders/> </ProtectedRoutes> } /> 
      <Route/>
    </Routes>
  );
}
export default App;
