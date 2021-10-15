import React, { useState } from 'react'
import './FormProducto.css'
import axios from 'axios'
import { useForm } from 'react-hook-form';


export default function FormProducto() {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        insert_products();
        e.preventDefault();
    }

    const [descripcion, setDescripcion] = useState("")
    const [valor_unitario, setValor_unitario] = useState(0)
    const [estado, setEstado] = useState("")   


    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }; 

    const insert_products = () => {
        axios.post("http://localhost:3001/insertar_producto", {
            codigo_producto: makeid(10),
            descripcion: descripcion,
            valor_unitario: valor_unitario,
            estado: estado,
        }).then(() => {
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
                            <input type="text" name="descripcion"
                                {
                                ...register('descripcion', {
                                    required: { value: true, message: 'campo requerido' }
                                })
                                }
                                onChange={(e) => { setDescripcion(e.target.value); }}
                                class="form-control" id="floatingInput" placeholder="descripcion" />
                            <label for="floatingInput">Descripcion</label>
                        </div>
                        <div>
                            {errors?.descripcion?.message}
                        </div>
                        <div class="form-floating">
                            <input type="text" name="valor_unitario"
                                {
                                ...register('valor_unitario', {
                                    required: { value: true, message: 'campo requerido' }
                                })
                                }
                                onChange={(e) => { setValor_unitario(e.target.value); }}
                                class="form-control" id="floatingInput" placeholder="valor unitario" />
                            <label for="floatingInput">Valor Unitario</label>
                        </div>
                        <div>
                            {errors?.valor_unitario?.message}
                        </div>
                        <div class="form-floating floating-select">
                            <select name="estado"
                                {
                                ...register('estado', {
                                    required: { value: true, message: 'campo requerido' }
                                })
                                }
                                onChange={(e) => { setEstado(e.target.value); }}
                                class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Estado Producto</option>
                                <option value="Disponible">Disponible</option>
                                <option value="No disponible">No Disponible</option>
                            </select>
                            <label for="floatingSelect">Estado Producto</label>
                        </div>
                        <div>
                            {errors?.estado?.message}
                        </div>
                        <button onClick={handleSubmit(onSubmit)} type="submit" class="btn btn-primary w-100">Registrar Producto</button>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                </div>
            </div>
        </div>
    )
}