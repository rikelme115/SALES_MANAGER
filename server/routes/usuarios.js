const express = require('express');
const router = express.Router();
const db = require('../database/db');
const mysql = require('mysql')


router.get("/usuarios", (req, res) => {
    const sqlSelect = "SELECT * FROM usuarios";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

router.post("/usuarios/insertar_producto", (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const rol = req.body.rol;
    const estado = req.body.estado;

    db.query(
        "INSERT INTO usuarios (nombre, email, rol, estado) VALUES (?,?,?,?)",
        [nombre, email, rol, estado],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Datos Insertados");
            }
        }
    );
});

router.delete("/usuarios/delete/:idusuarios", (req, res) => {
    const id = req.params.idusuarios;
    const sqlDelete = "DELETE FROM usuarios WHERE idusuarios = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Datos eliminados correctamente");
        }

    });
});

router.get("/usuarios/getbydesc/:descripcion", (req, res) => {
    const descripcion = req.params.descripcion;
    const sqlSelect = "SELECT * FROM productos where descripcion=?";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

router.put("/usuarios/update", (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const rol = req.body.rol;
    const estado = req.body.estado;
    const idusuarios = req.body.idusuarios;
    const sqlUpdate = "UPDATE usuarios SET nombre = ? , email = ? , rol = ? , estado = ? WHERE idusuarios = ?";


    db.query(sqlUpdate, [nombre, email, rol, estado, idusuarios], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

module.exports = router;