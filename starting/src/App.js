import Productos from "./components/Productos";
import Listas from "./components/Listas";
import "./static/styles/Listas.css";
import "./static/styles/Tabla.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Calificaciones from "./components/Calificaciones";
import Calificaciones2 from "./components/Calificaciones2";
import Contador from "./components/Contador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Listas/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="/FirstComponent" element={<MyFirstComponent/>} />
          <Route path="/Calificaciones" element={<Calificaciones/>} />
          <Route path="/Calificaciones2" element={<Calificaciones2/>} />
          <Route path="/Contador" element={<Contador/>} />

      </Routes>
    </BrowserRouter>
  );
}

function MyFirstComponent(){
  return <h1> This is a new component </h1>
}

export default App;
