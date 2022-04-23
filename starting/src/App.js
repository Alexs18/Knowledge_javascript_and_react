import Productos from "./components/Productos";
import Listas from "./components/Listas";
import "./static/styles/Listas.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Listas/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="/FirstComponent" element={<MyFirstComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

function MyFirstComponent(){
  return <h1> This is a new component </h1>
}

export default App;
