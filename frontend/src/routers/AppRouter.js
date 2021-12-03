import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import  LoginScreen  from "../pages/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Services from "../pages/Service/Services";
import Testimonial from "../pages/Testimonial/Testimonial";
import Contact from "../pages/Contact/Contact";
import Home from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />

      
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
