import React from "react";
import LoginIcon from '../images/user.png';
import './Login.css';
import GoogleLoginComponent from "./googlebutton.component";



const LoginB = () => {

    return (
        <div class="modal-dialog text-center">
            <div class="col-sm-8 main-section">
                <div class="modal-content">
                    <div class="col-12 user-img">
                        <img src={LoginIcon} alt="icon" />
                    </div>
                    <form class="col-12">
                        <div class="d-grid gap-2">
                            <GoogleLoginComponent />
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
}
export default LoginB;