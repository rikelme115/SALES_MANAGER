import React from 'react'
import axios from 'axios'
import './GestionUsuarios.css'
import { DataTable } from 'primereact/datatable';
import UserProfile from './UserProfile';
import { Link } from "react-router-dom";

export default function GestionUsuarios() {
    const user = UserProfile.getName();
    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Gestión de usuarios</h1>

                        <input class="form-control form-control-dark d-flex" type="text" placeholder="Buscar usuario" aria-label="Search" />
                        <h3>Detalle Usuario</h3>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">ROL</th>
                                    <th scope="col">ESTADO USUARIO</th>
                                    <th scope="col" colSpan='2'>ACCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   
                                    <td>XXXXX</td>
                                    <td>xXXXX@XXX</td>

                                    <td> <select name="estado2" class="form-select" id="floating2" aria-label="Floating label select example">
                                        <option selected>Rol Usuario</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Vendedor">Vendedor</option>
                                        
                                    </select>
                                        

                                    </td>
                                    <td> <select name="estado" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Estado Usuario</option>
                                        <option value="Disponible">Pendiente</option>
                                        <option value="No disponible">No Disponible</option>
                                      

                                    </select>
                                    </td>
                                    <td><Link href="#">Actualizar</Link></td>
                          
                                </tr>
                                <tr>
                                   
                                    <td>XXXXX</td>
                                    <td>xXXXX@XXX</td>

                                    <td> <select name="estado2" class="form-select" id="floating2" aria-label="Floating label select example">
                                        <option selected>Rol Usuario</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Vendedor">Vendedor</option>
                                        
                                    </select>
                                        

                                    </td>
                                    <td> <select name="estado" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Estado Usuario</option>
                                        <option value="Disponible">Pendiente</option>
                                        <option value="No disponible">No Disponible</option>
                                        

                                    </select>
                                    </td>
                                    <td><Link href="#">Actualizar</Link></td>
                          
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
