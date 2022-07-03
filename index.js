const fs = require("fs");

// Funcion asincrona de guardado de archivos
const saveArchive = async (ruta, contenido) => {
    try {
      await fs.promises.writeFile(ruta, JSON.stringify(contenido));
  
      console.log("El archivo se guardo correctamente");
    } catch (err) {
      console.log("Error!");
    }
};

//Funcion para dar un setTimeOut a mi funcion de guardado
const timeout = ( contenido, time ) =>{
    setTimeout(function (){
        saveArchive("./productos.txt", contenido)
    },time)
}

//Funcion para poder leer archivos de forma asincrona
const readArchive = async (rute) => {
    try{
        const readContent = await fs.promises.readFile(rute, "utf-8");
        console.log(readContent)
    }
    catch(err){
        console.log(err)
    }
}
//Declaro la clase y sus metodos
class Contenedor{
    constructor (){
        this.content = [];
        this.counter = 0;
    }
    save(object){
        this.counter ++;
        object.id = this.counter;
        this.content.push(object);
        timeout(this.content, 2000)
        // return "el producto se guardo con el ID " + this.counter;
    }
    getById(id){
        let filterResult = this.content.filter(content => content.id === id);
        return filterResult.length === 1 ? filterResult = filterResult :  filterResult = null;
    }
    deleteById(id){
        const map = this.content.filter(content => content.id !== id);
        timeout(map, 3000);
    }
    getAll(){
        return this.content;
    }
    deleteAll() {
        this.content = [];
        timeout([], 4000)
    }
};

module.exports = Contenedor;
