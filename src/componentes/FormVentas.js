import React from 'react'
import './FormVentas.css'
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

export default function FormVentas() {
    

    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Registro de Ventas</h1>
                        <hr />
                        <div class="form-floating mb-3">
                            <input type="text" name="fecha"  class="form-control" id="fecha" placeholder="Fecha" />
                            <label for="floatingInput">Fecha</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="Nombre"  class="form-control" id="floatingInput" placeholder="Nombre Cliente" />
                            <label for="floatingInput">Nombre Cliente</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="idcliente"  class="form-control" id="floatingInput" placeholder="Documento de Identificacion" />
                            <label for="floatingInput">Documento de Identificación</label>
                        </div>
                        <div class="form-floating floating-select">
                            <h3>Detalle Usuario</h3>
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>

                                        <th scope="col">ID</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio Unitario</th>
                                        <th scope="col">Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>
                                            <input type ="text" name="Nombre"  class ="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type ="text" name="Nombre"  class ="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type ="text" name="Nombre"  class ="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>
                                        <td>
                                        <button class="btn btn-success"><FontAwesomeIcon icon={faPlus} /></button>
                                        </td>


                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <button  type="submit" class="btn btn-primary w-100">Registrar Venta</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}