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



app.listen(3001, () => {
    console.log('SERVIDOR CORRIENDO PUERTO 3001 IN http://localhost:3001')
})