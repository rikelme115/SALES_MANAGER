import React from "react";
import LoginIcon from '../../images/user.png';
import './Login.css';

const LoginB = () => {
    return (
        <div class="modal-dialog text-center">
            <div class="col-sm-8 main-section">
                <div class="modal-content">
                    <div class="col-12 user-img">
                        <img src={LoginIcon} alt="icon" />
                    </div>
                    <form class="col-12">
                        <div class="mb-3">
                            <input type="text" class="form-control" id="user-group" aria-describedby="emailHelp" placeholder="Nombre de usuario" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary ">Iniciar Sesion</button>
                        </div>
                    </form>
                    <div class="col-12 forgot">
                        <a href="#">Recordar Contraseña?</a>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default LoginB;