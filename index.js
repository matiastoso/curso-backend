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
        return "el producto se guardo con el ID " + this.counter;
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
const contenedor = new Contenedor();

//Save
contenedor.save({title : "Jordan nike",price: 48000,thumbnail: "https://media.gq.com.mx/photos/6203f864b3938d1f596f8dd9/16:9/w_2560%2Cc_limit/air-jordan-1-diamond-fecha-de-lanzamiento-precio-como-combinarlo-materiales.jpeg"});
contenedor.save({title : "Buzo nike", price: 10500, thumbnail: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw64e81dcf/products/NI_CU4363-010/NI_CU4363-010-1.JPG"});
contenedor.save({title : "Pantalon de entrenamiento adidas", price: 8500, thumbnail: "https://assets.adidas.com/images/w_600,f_auto,q_auto/39a7f46af8524e0fa095a95901199987_9366/Pantalon_de_Entrenamiento_Tiro_19_Negro_D95958_21_model.jpg"});
contenedor.save({title : "Zapatillas adidas forum", price: 32000, thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9fdf27c73cc481aa8efacb6002c81bc_9366/Zapatillas_Forum_Mid_Blanco_FY7939_01_standard.jpg"});

//Delate
contenedor.deleteById(2);

//Read
console.log(contenedor.getAll());

//Selecciono por ID un producto en especifico
console.log("el producto seleccionado es: " + JSON.stringify(contenedor.getById(3)));
readArchive("./productos.txt");

//Eliminar y guardar en el .txt todo el array
contenedor.deleteAll();
setTimeout(function(){
    readArchive("./productos.txt")
},5000);
