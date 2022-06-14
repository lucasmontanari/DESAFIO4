const { Router } = require('express')
const Contenedor = require('./clase')

const PorductosPreCargados = [{"title":"Death Note","price":567.89,"thumbnail":"https://http2.mlstatic.com/D_NQ_NP_805388-MLA44665758739_012021-O.jpg","id":1},{"title":"Chainsaw Man","price":601.56,"thumbnail":"https://www.normaeditorial.com/upload/media/albumes/0001/07/fb73dc7a21d6a8f594f276d740675be20348aa57.jpeg","id":2},{"title":"Naruto Shippuden","price":598.23,"thumbnail":"https://i.pinimg.com/736x/f3/5a/19/f35a190feaedcb257518c09d0f79b14f.jpg","id":3}]

const router = Router()
const productos = new Contenedor(PorductosPreCargados)


router.get('/productos', (req, resp) =>{
    const getAll = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
            resp.status(200).json(await productos.getAll())
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    getAll();
})

router.get('/productos/:id', (req, resp) =>{
    const id = Number(req.params.id)

    const getProdId = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
            resp.status(200).json(await productos.getById(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    getProdId();
})

router.post('/productos', (req, resp) =>{
    const producto = req.body
    const subirProd = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
           resp.status(201).json(await productos.save(producto))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    subirProd();
})

router.put('/productos/:id', (req, resp) =>{
    const producto = req.body
    const id = Number(req.params.id)
    const getAll = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
           resp.status(201).json(await productos.changeById(producto,id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    getAll();
})


router.delete('/productos/:id', (req, resp) =>{
    const id = Number(req.params.id)
    const borrarID = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
           resp.status(201).json(await productos.deleteById(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    borrarID();
})



module.exports = router