const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//const conexion = require('../server/database/db')

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public
app.use(express.static('public'))

//para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorno
dotenv.config({path: './env/.env'})

//para trabajar con las cookies
//app.use(cookieParser)



app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})


app.listen(3001, ()=>{
    console.log('SERVIDOR CORRIENDO PUERTO 3001 IN http://localhost:3001')
})