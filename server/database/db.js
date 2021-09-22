const mysql = require('mysql')


const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: "xenco123*",
    database: process.env.DB_DATABASE,
})

conexion.connect((error) => {
    if (error) {
        console.log('el error de conexion es :' + error)
        return
    }
    console.log('¡conectado a la base de datos MySql!')
})

module.exports = conexion