import React, { useState } from 'react'
import './FormVentas.css'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function FormVentas() {

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
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Registro de Ventas</h1>
                        <hr />
                        <div class="form-floating mb-3">
                            <input type="text" name="fecha" onChange={(e) => { setDescripcion(e.target.value); }} class="form-control" id="fecha" placeholder="" />
                            <label for="floatingInput">Fecha</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" name="Nombre" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Nombre Cliente</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" name="idcliente" onChange={(e) => { setValor_unitario(e.target.value); }} class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Documento de Identificación</label>
                        </div>
                        <div class="form-floating floating-select">
                            <h3>Detalle Usuario</h3>
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
                                            <input type ="text" name="Nombre" onChange={(e) => { setValor_unitario(e.target.value); }} class ="form-control" id="floatingInput" placeholder="ID" /></td>

                                        <td>
                                            <input type ="text" name="Nombre" onChange={(e) => { setValor_unitario(e.target.value); }} class ="form-control" id="floatingInput" placeholder="CANTIDAD" /></td>


                                        <td> <input type ="text" name="Nombre" onChange={(e) => { setValor_unitario(e.target.value); }} class ="form-control" id="floatingInput" placeholder="PRECIO" />
                                        </td>


                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <button onClick={insert_products} type="submit" class="btn btn-primary w-100">Agregar linea de Venta</button>
                        <button onClick={insert_products} type="submit" class="btn btn-primary w-100">Registrar Venta</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}