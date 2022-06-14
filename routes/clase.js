const fs = require('fs')

module.exports = class Contenedor{ //module.exports permite importar la clase en otro archivo usando require
    constructor(productos){
        this.productos = productos
    }

    async save(objeto){
        if(!this.productos){
            objeto.id=1
            this.productos = [objeto]
            return this.productos
        }else{
            let ultimoItem=this.productos[this.productos.length-1] //Se hace de esta forma para siempre encontrar el Id del ultimo elemento del array
            objeto.id=ultimoItem.id+1
            this.productos.push(objeto)
            return objeto
        }
    }
    
    async changeById(objeto,numeroID){
        function findID(objeto) { //Funcion para encontrar el objeto con el Id buscado
            return objeto.id === numeroID;
        }
        if(!this.productos.find(findID)){ //Se usa find para encontrar el objeto buscado
            return {error:'producto no encontrado'}
        }else{//Se cambia todos los parametros del producto encontrado por el nuevo, no importa si son iguales o no
            this.productos.find(findID).title=objeto.title;
            this.productos.find(findID).price=objeto.price;
            this.productos.find(findID).thumbnail=objeto.thumbnail;
            return this.productos.find(findID);
        }
    }


    async getById(numeroID){
        function findID(objeto) { //Funcion para encontrar el objeto con el Id buscado
            return objeto.id === numeroID;
        }
        if(!this.productos.find(findID)){ //Se usa find para encontrar el objeto buscado
            return {error:'producto no encontrado'}
        }else{
            return this.productos.find(findID);
        }
    }

    async getAll(){
        try{
            if(this.productos){
                return this.productos
            }else{
                return {error:'No se encontraron productos'}
            } //Si no hay this.productos no retorna nada y muestra el mensaje catcheado por que ocurre un error
        }
        catch(error){
            console.log("El archivo no contiene ningun producto")
        }
    }

    async deleteById(idABorrar){
        function findID(objeto) { //Funcion para encontrar el objeto con el Id buscado
            return objeto.id === idABorrar;
        }
        if(!this.productos.find(findID)){ //Se usa find para encontrar el objeto buscado
            return {error:'producto no encontrado'}
        }
        else{
            this.productos = this.productos.filter((objeto) => objeto.id !== idABorrar); //Filtra el array de objetos excluyendo el objeto que tenga el Id a Borrar
            return `Producto id:${idABorrar} eliminado` //Reenvio el array filtrado
        }
    }

    async deleteAll(){
        return ['']//Reenvio el array con nada
    }
}
