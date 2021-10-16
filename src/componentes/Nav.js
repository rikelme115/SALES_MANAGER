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

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ventas
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/realizarventa">Realizar Venta</Link></li>
                                <li><Link class="dropdown-item" to="/gestionarventas">Gestionar Ventas</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/registrar_producto">Registrar un producto</Link></li>
                                <li><Link class="dropdown-item" to="/maestro_productos">Maestro de productos</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Administrar Usuarios
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/usuarios">Gestionar Usuarios</Link></li>

                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link exact class="nav-link" aria-current="page" to="/about" >Acerca de</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default Nav;