import "./App.css";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Products from './pages/Products';
import Categorias from './pages/Categorias';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorias" element={<Categorias />} />
      </Routes>
    </>
  );
}

export default App;
