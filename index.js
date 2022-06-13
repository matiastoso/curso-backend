class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    
    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    }

    countMascotas() {
        console.log(this.mascotas.length);
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames () {
        const nombreLibros = this.libros.map( libro => {
           return libro.nombre;
        })

        console.log(nombreLibros);
    }
}

const usuario = new Usuario ('Matias','Toso',
                [{nombre: 'El principito', autor: 'Antoine de Saint-Exupéry'},
                {nombre: 'La Biblia', autor: 'Dios'},
                {nombre: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling'}],
                ['Perro', 'Gato', 'Loro']);

usuario.getFullName();
usuario.addMascota('Pescadito');
usuario.countMascotas();
usuario.addBook('El Señor de los Anillos', 'J.R.R. Tolkien');
usuario.getBookNames();