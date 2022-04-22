import Productos from "./components/Productos";
import Listas from "./components/Listas";
import "./static/styles/Listas.css";

function App() {
  return (
    <div className="App">
        <MyFirstComponent/>
        <Productos/>
        <Listas/>
    </div>
  );
}

function MyFirstComponent(){
  return <h1> This is a new component </h1>
}

export default App;
