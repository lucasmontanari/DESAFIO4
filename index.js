const express = require('express')
const rutas = require('./routes/rutas')

const app = express()
const puerto=8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/public', express.static(`${__dirname}/public`))

app.get('/api/', (req, resp) =>{
    resp.status(200).send('<h1 style="color: red">Bienvenidos al servidor express</h1>')
})

app.use('/api/', rutas)

app.listen(puerto, err =>{
    if(err){
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else{
        console.log(`El servidor esta escuchando el puerto ${puerto}`)
    }
    
})