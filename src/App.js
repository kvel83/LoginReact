import React, {useState} from "react";
import { Alert } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


import ButtonForm from "./components/button"
import "./App.css"

function App() {
  // const [formData, setFormData] = useState({
    // username: '',
    // password: '',
  // });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState('');
  const [hideAlert, setHideAlert] = useState (true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin123.'){
      setShowAlert(
        <Alert className="mt-2 p-1" key={"success"} variant={"success"}>
          Inicio de sesión correcto
        </Alert>);
      setTimeout(() => {setShowAlert("")},2000);
      setUsername("");
      setPassword("");
      // setShowAlert("");
    }else if (username !== 'Admin' || password !== 'Admin123.'){
      setShowAlert(
        <Alert className="mt-2 p-1" key={"danger"} variant={"danger"}>
          Username o Password incorrectos
        </Alert>
      );
      setTimeout(() => {setShowAlert("")},2000);
      setUsername("");
      setPassword("");
      // setShowAlert("");
    }
  };

  return(

    <div className="contenedor">
      {showAlert}
      <form onSubmit={handleSubmit}>
        <label for="username">Usuario:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <label id ="labelPass" for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       {username !== '' && password !== '' && (
        <ButtonForm
          id="botonInicioSesion"
          text="Iniciar Sesión"
          handleSubmit={handleSubmit}
        />
      )}
      </form>
    </div>
);

}

export default App;
