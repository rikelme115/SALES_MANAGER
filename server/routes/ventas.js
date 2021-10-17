const express = require('express');
const router = express.Router();
const db = require('../database/db');
const mysql = require('mysql')


// router.get("/productos", (req, res) => {
//     const sqlSelect = "SELECT * FROM productos";
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     });
// });

router.post("/insertar_venta", (req, res) => {
    const id_venta= req.body.id_venta;
    const fecha_venta=req.body.fecha_venta;
    const vendedor= req.body.vendedor;
    const nombre_cliente=req.body.nombre_cliente;
    const documento_id= req.body.documento_id;
    const productos=req.body.productos;
    
    db.query(
        "INSERT INTO ventas (id_venta,fecha_venta,vendedor,nombre_cliente,documento_id,productos) VALUES (?,?,?,?,?,?)",
        [id_venta,fecha_venta,vendedor,nombre_cliente,documento_id,productos],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Datos Insertados");
            }
        }
    );
});

router.delete("/ventas/delete/:idventas", (req, res) => {
    const id = req.params.idusuarios;
    const sqlDelete = "DELETE FROM ventas WHERE id_venta = ?";

    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Datos eliminados correctamente");
        }

    });
});

module.exports = router;