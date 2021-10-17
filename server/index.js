const express = require('express')
const cors = require('cors')
const app = express();
const mysql = require('mysql')



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/productos'))
app.use('/', require('./routes/usuarios'))
app.use('/', require('./routes/ventas'))

app.listen(3001, () => {

    try {
        console.log('SERVIDOR CORRIENDO PUERTO 3001 IN http://localhost:3001')
    } catch (error) {
        console.log('SE HA PRODUCIDO UN ERROR', error)
    }
})