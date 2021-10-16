import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from 'react-router'
import cookie from 'react-cookies';
import axios from "axios";

const CLIENT_ID = "868743608228-uevqhvhflfl6btl2dqia40ucd32bahue.apps.googleusercontent.com";

function Login() {
  const history = useHistory();
  const [llamadaUsuario, setLlamadaUsuario] = useState([]);

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const ValidarUsuario = async (email) => {
    await axios.get(`http://localhost:3001/usuarios/validar/${email}`)
      .then(res => {
        setLlamadaUsuario(res.data);
        console.log(llamadaUsuario[0].email)
      }).catch(err => {
        console.log(err);
      })
  };

  const onLoginSuccess = async (res) => {
    console.log('Inicio de Sesion Exitoso:', res);
    if (res.tokenId) {
      cookie.save('token', res.tokenId);
      try {
        await ValidarUsuario(res.profileObj.email);
        if (llamadaUsuario.length > 0) {
          alert('usuario ya existe en la base de datos')
          if(llamadaUsuario[0].rol == "administrador") {
            history.push('/usuarios')
          }else if(llamadaUsuario[0].rol == "vendedor"){
            history.push('/realizarventa')
          }
          

          

        } else if (llamadaUsuario === 0) {
          console.log('usuario no existe en la base de datos')
          
        }

      } catch (error) {
        console.log(error)

      }
      setShowloginButton(false);
      setShowlogoutButton(true);
    }

  };

  const onLoginFailure = (res) => {
    console.log('Error de Inicio:', res);
  };

  const onSignoutSuccess = () => {
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