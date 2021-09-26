import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top">
            <div class="container-fluid">
                <Link class="navbar-brand" exact to="/" >Sales Manager</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link exact class="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link exact class="nav-link" aria-current="page" to="/ventas" >Ventas</Link>
                        </li>
                        <li class="nav-item">
                            <Link exact class="nav-link" aria-current="page" to="/contacto" >Contacto</Link>
                        </li>
                        <li class="nav-item">
                            <Link exact class="nav-link" aria-current="page" to="/about" >Acerca de</Link>
                        </li>                        
                    </ul>
                    <form class="d-flex">
                        <Link exact class="btn btn-outline-success" type="submit" to="/login" >Login</Link>
                    </form>

                </div>
            </div>
        </nav>
    );
}
export default Nav;