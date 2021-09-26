import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../componentes/Footer"
import LoginB from "../componentes/LoginB"
import Nav from "../componentes/Nav"
import About from "../pages/About"
import Categorias from "../pages/Categorias"
import Contacto from "../pages/Contacto"
import NotFound from "../pages/NotFound"
import Profile from "../pages/Profile"
import Ventas from "../pages/Ventas"


export default function AppRouter() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contacto" component={Contacto}/>
                <Route exact path="/ventas" component={Ventas}/>
                <Route exact path="/" component={LoginB}/>
                <Route exact path="/categorias" component={Categorias}/>

                <Route exact path="/Profile/:username" component={Profile}/>

                <Route path="*" component={NotFound}/>
            </Switch>
            <Footer />
        </Router>
    )
}