import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import UserProfile from './UserProfile';

const CLIENT_ID =
  "868743608228-uevqhvhflfl6btl2dqia40ucd32bahue.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
        //img: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    console.log();

    //axios({
     // method: "POST",
     // url: "http://localhost:3001/api/googlelogin",
     // data: {
        //tokenId: response.tokenId,
      //}
   // }).then(response => {
      //console.log(response)
    //})
  //};

    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
      //img: response.profileObj.imageUrl,
    };
    console.log(response)
    this.setState({ userInfo, isLoggedIn: true });
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    const email = this.state.userInfo.emailId
    UserProfile.setName(email);
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>

            <p>Bienvenido, {UserProfile.getName()}</p>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText={"Cerrar Sesion"}
              onLogoutSuccess={this.logout}
            ></GoogleLogout>
          </div>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Iniciar Sesion con Gmail"
            onSuccess={this.responseGoogleSuccess}
            onFailure={this.responseGoogleError}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    );
  }
}
export default GoogleLoginComponent;