import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
