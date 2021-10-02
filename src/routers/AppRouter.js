import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../componentes/Footer"
import LoginB from "../componentes/LoginB"
import Nav from "../componentes/Nav"
import About from "../pages/About"
import Categorias from "../pages/Categorias"
import Productos from "../pages/Productos"
import NotFound from "../pages/NotFound"
import Profile from "../pages/Profile"
import Ventas from "../pages/Ventas"
import Home from "../pages/Home"
import MaestroProductos from "../pages/MaestroProductos"
import Usuarios from "../pages/Usuarios"
import VentasForm from "../pages/VentasForm"
import GestionarVentas from "../pages/GestionarVentas"


export default function AppRouter() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/registrar_producto" component={Productos}/>
                <Route exact path="/maestro_productos" component={MaestroProductos}/>
                <Route exact path="/ventas" component={Ventas}/>
                <Route exact path="/login" component={LoginB}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/categorias" component={Categorias}/>
                <Route exact path="/usuarios" component={Usuarios}/>
                <Route exact path="/realizarventa" component={VentasForm}/>
                <Route exact path="/gestionarventas" component={GestionarVentas}/>
                <Route exact path="/Profile/:username" component={Profile}/>

                <Route path="*" component={NotFound}/>
            </Switch>
            <Footer />
        </Router>
    )
}