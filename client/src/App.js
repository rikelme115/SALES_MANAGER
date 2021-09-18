import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {

  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [ciudad, setCiudad] = useState("")
  const [cargo, setCargo] = useState("")
  const [sueldo, setSueldo] = useState(0)

  const addempleado = () => {
    
    Axios.post("http://localhost:3001/create", {
      nombre: nombre, 
      edad: edad,
      ciudad: ciudad,
      cargo: cargo,
      sueldo: sueldo,
    }).then(() => {
      console.log("exitoso");
    })
  };

  return (
    <div className="App">
      <div className="informacion">
        <label>Nombre:</label>
        <input type="text" 
        onChange={(event)=>{
          setNombre(event.target.value);
        }} 
        />
        <label>Edad:</label>
        <input type="number" onChange={(event)=>{
          setEdad(event.target.value);
        }}
        />
        <label>Ciudad:</label>
        <input type="text" onChange={(event)=>{
          setCiudad(event.target.value);
        }}
        />
        <label>Cargo:</label>
        <input type="text" onChange={(event)=>{
          setCargo(event.target.value);
        }}
        />
        <label>Sueldo (año):</label>
        <input type="number" onChange={(event)=>{
          setSueldo(event.target.value);
        }}
        />
        <button onClick={addempleado}>Añadir Empleado</button>
      </div>
    </div>
  );
}

export default App;
