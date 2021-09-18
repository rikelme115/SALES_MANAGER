const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "xenco123*",
    database: "salesmanager",
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const ciudad = req.body.ciudad;
    const cargo = req.body.cargo;
    const sueldo = req.body.sueldo;

    db.query(
        "INSERT INTO empleados (nombre, edad, ciudad, cargo, sueldo) VALUES (?,?,?,?,?)",
        [nombre, edad, ciudad, cargo, sueldo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Datos Insertados");
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Su servidor esta corriendo en puerto 3001");
});
