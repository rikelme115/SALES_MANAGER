const express = require('express')
const cors = require('cors')
const app = express();
const mysql = require('mysql')
const db = require('./database/db')



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.get("/api/productos", (req,res)=>{
    const  sqlSelect = "SELECT * FROM productos";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);    
    });   
});


app.post("/insertar_producto", (req, res) => {
    const descripcion = req.body.descripcion;
    const valor_unitario = req.body.valor_unitario;
    const estado = req.body.estado;

    db.query(
        "INSERT INTO productos (descripcion, valor_unitario, estado) VALUES (?,?,?)",
        [descripcion, valor_unitario, estado],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Datos Insertados");
            }
        }
    );
});

app.delete("/api/delete/:id", (req, res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM productos WHERE id = ?";

    db.query(sqlDelete, id, (err, result)=>{
        if(err) {
            console.log(err);
        }else{
            res.send("Datos eliminados correctamente");
        }
        
    });
});

app.get("/api/getbydesc/:descripcion", (req,res)=>{
    const descripcion = req.params.descripcion;
    const  sqlSelect = "SELECT * FROM productos where descripcion=?";
    db.query(sqlSelect, (err, result)=>{
        res.send(result);    
    });   
});

app.put("/api/update", (req, res)=>{
    const descripcion = req.body.descripcion;
    const valor_unitario = req.body.valor_unitario;
    const estado = req.body.estado;
    const id = req.body.id;
    const sqlUpdate = "UPDATE productos SET descripcion = ? , valor_unitario = ? , estado = ? WHERE id = ?";
    

    db.query(sqlUpdate, [descripcion, valor_unitario, estado, id], (err, result)=>{
        if(err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});



app.listen(3001, () => {
    console.log('SERVIDOR CORRIENDO PUERTO 3001 IN http://localhost:3001')
})