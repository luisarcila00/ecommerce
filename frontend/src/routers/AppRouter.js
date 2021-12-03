import {Routes, Route, BrowserRouter} from "react-router-dom";

import {PrivateRoute} from "./PrivateRoute";

import {DashboardRoutes} from "./DashboardRoutes";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Services from "../pages/Service/Services";
import Ofertas from "../pages/Ofertas/Ofertas";
import Contact from "../pages/Contact/Contact";
import Home from '../pages/Home';
import {useContext} from "react";
import {AuthContext} from "../auth/authContext";
import SidebarComp from "../components/Sidebar/SidebarComp";

export const AppRouter = () => {
  const {user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar/>
      {user.logged ? <SidebarComp/> : null}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/contact" element={<Contact />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
