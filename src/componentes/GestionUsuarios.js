import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './GestionUsuarios.css'
//import UserProfile from './UserProfile';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function GestionUsuarios() {
    //const user = UserProfile.getName();
    const [usuariosLista, setUsuariosLista] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        idusuarios: '',
        nombre: '',
        email: '',
        rol: '',
        estado: ''
    });


    const seleccionarUsuarios = (usuarios) => {
        setUsuarioSeleccionado(usuarios);
        console.log(usuarios)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUsuarioSeleccionado(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(usuarioSeleccionado);
    }

    const updateProductos = (idusuarios) => {
        axios.put("http://localhost:3001/usuarios/update", {
            idusuarios: idusuarios,
            nombre: usuarioSeleccionado.nombre,
            email: usuarioSeleccionado.email,
            rol: usuarioSeleccionado.rol,
            estado: usuarioSeleccionado.estado
        }).then((response) => {
            alert("actualizacion exitosa")
            setUsuariosLista(usuariosLista.map((usuarios) => {
                return usuarios.idusuarios == idusuarios ? { idusuarios: usuarios.idusuarios, nombre: usuarioSeleccionado.nombre, email: usuarioSeleccionado.email, rol: usuarioSeleccionado.rol, estado: usuarioSeleccionado.estado } : usuarios;

            }))

        })

    }


    const deleteUsuarios = (idusuarios) => {
        axios
            .delete(`http://localhost:3001/usuarios/delete/${idusuarios}`)
            .then((response) => {
                PeticionGet();
                setUsuariosLista(usuariosLista.filter(usuarios => usuarios.idusuarios !== idusuarios));
                alert("eliminacion correcta");
            });

    };


    const PeticionGet = () => {
        axios.get("http://localhost:3001/usuarios")
            .then(res => {
                setUsuariosLista(res.data);
            }).catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        PeticionGet();
    }, [])
    return (
        <div>
            <div class="container  container-register">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2">

                    </div>
                    <div class="col-md-auto">
                        <h1>Gestión de usuarios</h1>

                        <input class="form-control form-control-dark d-flex w-100" type="text" placeholder="Buscar usuario" aria-label="Search" />
                        <h3>Detalle Usuario</h3>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">Nombre</th>
                                    <th scope="col">Correo Electronico</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col" colSpan='2'>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuariosLista && usuariosLista.map((usuarios) => {
                                    return (

                                        <tr key={usuarios.idusuarios}>
                                            <td>{usuarios.nombre}</td>
                                            <td>{usuarios.email}</td>
                                            <td>{usuarios.rol}</td>
                                            <td>{usuarios.estado}</td>
                                            <td>
                                                <button className="btn btn-danger btn-form " data-bs-toggle="modal" data-bs-target="#editarUsuario" onClick={() => { seleccionarUsuarios(usuarios) }}><FontAwesomeIcon icon={faEdit} /></button>
                                                {"   "}
                                                <button className="btn btn-danger" onClick={() => { deleteUsuarios(usuarios.idusuarios) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="col col-lg-2">

                    </div>


                    <div class="modal fade" id="editarUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Editar Usuario</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input type="text" name="id" readOnly class="form-control" id="floatingInput" placeholder="id" value={usuarioSeleccionado && usuarioSeleccionado.idusuarios} />
                                            <label for="floatingInput">ID</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input type="text" name="nombre" class="form-control" id="floatingInput" placeholder="nombre" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.nombre} />
                                            <label for="floatingInput">nombre</label>
                                        </div>
                                        <div class="form-floating">
                                            <input type="text" name="email" class="form-control" id="floatingInput" placeholder="email" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.email} />
                                            <label for="floatingInput">email</label>
                                        </div>
                                        <div class="form-floating floating-select">
                                            <select name="rol" class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.rol} >
                                                <option selected>rol</option>
                                                <option value="administrador">administrador</option>
                                                <option value="vendedor">vendedor</option>
                                            </select>
                                            <label for="floatingSelect">Rol</label>
                                        </div>
                                        <div class="form-floating floating-select">
                                            <select name="estado" class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.estado} >
                                                <option selected>estado</option>
                                                <option value="pendiente">Pendiente</option>
                                                <option value="autorizado">autorizado</option>
                                                <option value="no autorizado">no autorizado</option>
                                            </select>
                                            <label for="floatingSelect">Estado</label>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success  btn-editar" data-bs-dismiss="modal">Cerrar</button>
                                    {"   "}
                                    <button type="button" class="btn btn-success" onClick={() => updateProductos(usuarioSeleccionado.idusuarios)} data-bs-dismiss="modal">Editar</button>
                                </div>
                            </div>
                        </div>
                    </div >

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
