
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import './index.css';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/Menu" element={<ProtectedRoutes>  <Menu/> </ProtectedRoutes> } />
    </Routes>
  );
}

export default App;
