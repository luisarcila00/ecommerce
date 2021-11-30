import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SidebarComp from "./components/Sidebar/SidebarComp";

import {Route,Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Usuarios from './pages/Usuarios';
import Products from './pages/Products';
import Categorias from './pages/Categorias';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingingScreen from "./pages/SingingScreen";
import RegisterScreen from "./pages/RegisterScreen";
import {BrowserRouter} from "react-router-dom";
import About from './pages/About/About';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SidebarComp/>
    <main>

    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/singing" element={<SingingScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />

        <Route path="/testimonial" element={<Testimonial/>} />

        <Route path="/contact" element={<Contact/>} />


      </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
