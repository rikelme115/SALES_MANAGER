import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Cookies from 'universal-cookie';
import cookie from 'react-cookies';
import axios from "axios";

const CLIENT_ID = "868743608228-uevqhvhflfl6btl2dqia40ucd32bahue.apps.googleusercontent.com";

function Login() {
  const [llamadaUsuario, setLlamadaUsuario] = useState([]);

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const cookies = new Cookies();

  const onLoginSuccess = async (res) => {
    console.log('Inicio de Sesion Exitoso:', res);
    if (res.tokenId) {
      cookie.save('token', res.tokenId);
      try {

        await axios.get(`http://localhost:3001/usuarios/${res.profileObj.email}`)
        .then(res => {
          setLlamadaUsuario(res.data)
          llamadaUsuario.map((usuario)=>{
            console.log(usuario.email)
          })
        });
        //llamadaUsuario.map((usuario) => {
          //if (usuario.email == res.profileObj.email) {
            //console.log(usuario.email)
          //} else {
            //const user = axios.post('http://localhost:3001/usuarios/inserta_usuario', {
              //nombre: res.profileObj.name,
              //email: res.profileObj.email,
              //rol: "",
              //estado: "pendiente",
            //});
            //console.log(user);
          //}
        //})
        setShowloginButton(false);
        setShowlogoutButton(true);

      } catch (error) {
        console.log('error', error);

      }
    }

  };

  const onLoginFailure = (res) => {
    console.log('Error de Inicio:', res);
  };

  const onSignoutSuccess = () => {
    cookies.remove('nombreUsuario', { path: '/' })
    alert("has cerrado sesion");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);


  };


  return (

    <div>


      {showloginButton ?
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Iniciar Sesion con Gmail"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        /> : null}

      {showlogoutButton ?
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Cerrar Sesion"
          onLogoutSuccess={onSignoutSuccess}
        >
        </GoogleLogout> : null
      }
    </div>
  );
}
export default Login;