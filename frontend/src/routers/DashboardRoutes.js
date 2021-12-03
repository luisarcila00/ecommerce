import { Routes, Route } from "react-router-dom";

import Usuarios from '../pages/Usuarios';
import Products from '../pages/Products';
import Categorias from '../pages/Categorias';
import SidebarComp from "../components/Sidebar/SidebarComp";

export const DashboardRoutes = () => {
  return (
    <>
    <SidebarComp/>
      <div className="container">
      
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categorias" element={<Categorias />} />


        </Routes>
      </div>
    </>
  );
};
