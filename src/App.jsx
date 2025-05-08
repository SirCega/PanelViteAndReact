import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Proveedor from './pages/Proveedor';
import Usuarios from './pages/Usuarios';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
