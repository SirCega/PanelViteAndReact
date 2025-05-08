# 🧭 Panel Administrativo con React + Vite + Bootstrap

Este proyecto consiste en una aplicación web construida con **React y Vite** que simula un panel administrativo con navegación moderna. Forma parte del taller de la asignatura _Desarrollo de Aplicaciones Empresariales_ del I Semestre 2025.

## 👨‍🏫 Profesor

**Carlos Adolfo Beltrán Castro**  
Coordinación de Ingeniería de Sistemas

---

## 🎯 Objetivo

Construir una interfaz web con un **menú de navegación moderno**, enlazando las secciones de Clientes, Proveedor, Usuarios y Logout. El sistema debe ser SPA (Single Page Application), permitiendo la navegación sin recarga de página, y estilizado con un framework visual como **Bootstrap**.

---

## 🧱 Tecnologías usadas

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🌐 [React Router DOM](https://reactrouter.com/)
- 🎨 [Bootstrap 5](https://getbootstrap.com/)

---

## ⚙️ Instalación del proyecto

### 1. Crear proyecto con Vite

```bash
npm create vite@latest panel-admin --template react

![image](https://github.com/user-attachments/assets/a2d22ed0-3a4d-4039-8703-2f912c12b9e9)

cd panel-admin
npm install
npm install react-router-dom bootstrap


![image](https://github.com/user-attachments/assets/03b8d2dc-4803-4090-840a-fccf996efd66)


### 2. Estructura de carpetas creadas de forma predeterminada

![image](https://github.com/user-attachments/assets/ccd081bf-9143-4359-b22e-531e3a1f2975)

### 3. Importa Bootstrap en tu proyecto

En el archivo main.jsx agregamos la importación de Bootstrap arriba de todo:

import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

### 4. Creamos la carpeta pages
Y creamos los componentes de cada vista dentro de la carpeta src.
Luego, creamos los siguientes archivos:

Clientes.jsx

Proveedor.jsx

Usuarios.jsx

Logout.jsx

![image](https://github.com/user-attachments/assets/5732bfe2-fe64-4d13-bf48-2ec1db7a1395)

Y en cada pagina ponemos una estructura similar a esta:

![image](https://github.com/user-attachments/assets/fe34cf37-eb91-472c-931b-7e2173723885)


### 5. Creamos el componente de navegación

Creamos una carpeta llamada components dentro de src, y dentro de ella crea Navbar.jsx con este contenido básico:

![image](https://github.com/user-attachments/assets/79ac0718-e0d9-4dc8-a715-eb84ff8f89c9)

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Panel Admin</span>
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


### 5. Configuramos las rutas en App.jsx

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


### 6. Eliminamos las carpetas de estilos prederterminados
Al crear el proyecto con vite y react se crean unos estilos por defecto, yo los elimine ya que ya estoy usando el bootstrap.
Asi quedan los archivos de src:

![image](https://github.com/user-attachments/assets/988b312f-034c-4ebf-824b-29df2e6f3d9e)

Y quitamos la siguiente linea de main.jsx
import './index.css'

### 7. Ejecutamos
En la ruta del proyecto, en mi caso frontend\panel-admin> ejecutamos el siguiente comando npm run dev

![image](https://github.com/user-attachments/assets/021f9356-58f1-485f-9319-3ecbf5a957bb)

Ponemos la ruta del localhost en el navegador y vemos los resultados:


![image](https://github.com/user-attachments/assets/dc95e62f-4843-4a0f-a133-6b2640003f00)




