import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="me-2" />
            Panel Admin
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/clientes" className="nav-link">Clientes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/proveedor" className="nav-link">Proveedor</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/usuarios" className="nav-link">Usuarios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
