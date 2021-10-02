import React, { useState } from 'react'
import './FormProducto.css' 
import axios from 'axios'


export default function FormProducto() {

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
                        <h1>Registro de Productos</h1>
                        <hr />
                        <div class="form-floating mb-3">
                            <input type="text" name="descripcion" onChange={(e) =>{setDescripcion(e.target.value);}} class="form-control" id="floatingInput" placeholder="descripcion" />
                            <label for="floatingInput">Descripcion</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" name="valor_unitario" onChange={(e)=>{setValor_unitario(e.target.value);}} class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Valor Unitario</label>
                        </div>
                        <div class="form-floating floating-select">
                            <select name="estado" onChange={(e)=>{setEstado(e.target.value);}} class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Estado Producto</option>
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No Disponible</option>
                            </select>
                            <label for="floatingSelect">Estado Producto</label>
                        </div>
                        <button onClick={insert_products} type="submit" class="btn btn-primary w-100">Registrar Producto</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}