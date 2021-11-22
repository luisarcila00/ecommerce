import "./App.css";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Products from './pages/Products';
import Categorias from './pages/Categorias';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingingScreen from "./pages/SingingScreen";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/singing" element={<SingingScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </>
  );
}

export default App;
