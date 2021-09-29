import React from 'react'
import './FormProducto.css'


export default function FormProducto() {
    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Registro de Productos</h1>
                        <hr/>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="descripcion" />
                            <label for="floatingInput">Descripcion</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Valor Unitario</label>
                        </div>
                        <div class="form-floating floating-select">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Estado Producto</option>
                                <option value="1">Disponible</option>
                                <option value="2">No Disponible</option>
                            </select>
                            <label for="floatingSelect">Estado Producto</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Grabar</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}