import React, { useState } from 'react'
import './FormVentas.css'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function GestionarVentas() {

    const [descripcion, setDescripcion] = useState("")
    const [valor_unitario, setValor_unitario] = useState(0)
    const [estado, setEstado] = useState("")

    const insert_products = () => {
        axios.post("http://localhost:3001/insertar_producto", {
            descripcion: descripcion,
            valor_unitario: valor_unitario,
            estado: estado,
        }).then(() => {
            <h1>datos insertado correctamente</h1>
            alert("Datos insertados exitosamente")
        })
    };

    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">

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

                            <select name="estado2" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Estado Venta</option>
                                <option value="Administrador">En proceso</option>
                                <option value="Vendedor">Entregada</option>
                                <option value="Vendedor">Cancelada</option>                                
                            </select>
                            <label for="floatingSelect">Estado Venta</label>
                        </div>
                        

                        <div class="form-floating mb-3">

                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="fecha" value="dd-mm-yyyy" onChange={(e) => { setDescripcion(e.target.value); }} class="form-control" id="fecha" placeholder="" />
                            <label for="floatingInput">Fecha</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="Nombre" value="XXXXXXXXXX XXXXXXX  XXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Nombre Cliente</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" name="idcliente" value="XXXXXXXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Documento de Identificación</label>
                        </div>
                        <div class="form-floating floating-select">
                            <h3>Detalle de productos venddios</h3>
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
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                    <tr>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                    <tr>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type="text" name="Nombre" value="XXXXX" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={insert_products} type="submit" class="btn btn-primary w-100">Agregar linea de Venta</button>
                        <button onClick={insert_products} type="submit" class="btn btn-primary w-100">Actualizar Venta</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}