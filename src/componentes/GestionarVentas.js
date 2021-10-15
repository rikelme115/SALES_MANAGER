import React from 'react'
import './FormVentas.css'
import { Link } from "react-router-dom";

export default function GestionarVentas() {

    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>

                    <div class="col-md-auto">


                        <h1>Gestionar ventas</h1>

                        <input class="form-control form-control-dark d-flex" type="text" placeholder="Buscar venta" aria-label="Search" />
                        <h3>Ventas</h3>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">ID VENTA</th>
                                    <th scope="col">NOMBRE CLIENTE</th>
                                    <th scope="col">NOMBRE VENDEDOR</th>
                                    <th scope="col">FECHA</th>
                                    <th scope="col" colSpan='2'>ACCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>XXXXX</td>
                                    <td>xXXXX xxx yyyyy</td>

                                    <td> zzzzz xxx yyyyy</td>
                                    <td> DD-mm-yyyy</td>

                                    <td><Link href="#">Actualizar</Link></td>

                                </tr>
                                <tr>

                                    <td>XXXXX</td>
                                    <td>xXXXX xxx yyyyy</td>

                                    <td> zzzzz xxx yyyyy</td>
                                    <td> DD-mm-yyyy</td>

                                    <td><Link href="#">Actualizar</Link></td>

                                </tr>
                                <tr>

                                    <td>XXXXX</td>
                                    <td>xXXXX xxx yyyyy</td>

                                    <td> zzzzz xxx yyyyy</td>
                                    <td> DD-mm-yyyy</td>

                                    <td><Link href="#">Actualizar</Link></td>

                                </tr>

                            </tbody>
                        </table>


                        <h1>Actualizar Registro de Ventas</h1>
                        <hr />
                        
                        <div class="form-floating floating-select">

                            <select name="estado2" class="form-select w-50" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Estado Venta</option>
                                <option value="Administrador">En proceso</option>
                                <option value="Vendedor">Entregada</option>
                                <option value="Vendedor">Cancelada</option>
                            </select>
                            <label for="floatingSelect">Estado Venta</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" name="fecha" class="form-control w-50" id="fecha" placeholder="" />
                            <label for="floatingInput">Fecha</label>
                        </div>
                        
                        <div class="form-floating mb-3">
                            <input type="text" name="Nombre" value="XXXXXXXXXX XXXXXXX  XXXX" class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Nombre Cliente</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="idcliente" value="XXXXXXXXXX" class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Documento de Identificación</label>
                        </div>
                        <div class="form-floating floating-select">
                            <h3>Detalle de productos vendidos</h3>
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>

                                        <th scope="col">ID DEL PRODUCTO</th>
                                        <th scope="col">CANTIDAD</th>
                                        <th scope="col">PRECIO UNITARIO</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                    <tr>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                    <tr>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Agregar linea de Venta</button>
                        <button type="submit" class="btn btn-primary w-100">Actualizar Venta</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}