import React from 'react'
import axios from 'axios'
import './TablaProductos.css'
import { DataTable } from 'primereact/datatable';
import UserProfile from './UserProfile';
import { Link } from "react-router-dom";

export default function TablaProductos() {
    const user = UserProfile.getName();
    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Maestro de Productos</h1>
                        <form class="d-flex">
                            <Link exact class="btn btn-outline-primary btn-register" type="submit" to="/registrar_producto" >Registrar Producto</Link>
                        </form>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">DESCRIPCION</th>
                                    <th scope="col">VALOR UNITARIO</th>
                                    <th scope="col">ESTADO</th>
                                    <th scope="col" colSpan='2'>OPCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><Link href="#">Editar</Link></td>
                                    <td><Link href="#">Eliminar</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><Link href="#">Editar</Link></td>
                                    <td><Link href="#">Eliminar</Link></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><Link href="#">Editar</Link></td>
                                    <td><Link href="#">Eliminar</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col col-lg-2">

                    </div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
