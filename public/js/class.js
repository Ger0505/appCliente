class Perro{
    constructor(nombre,genero,size,raza,institucion,imagen,informacion){
        this.nombre = nombre;
        this.genero = genero;
        this.size = size;
        this.raza = raza;
        this.institucion = institucion;
        this.images = [];
        this.images.push(imagen);
        this.informacion = informacion;
    }
}

let reg = [];

reg.push(new Perro("Fido","M","CH","Guss","Rescate Animal","src/images/perro_1.jpg","Indistinto"));
reg.push(new Perro("Marlou","M","M","Mestizo","Rescate Animal","src/images/perro_2.jpg","Indistinto"));
reg.push(new Perro("Viejo","M","G","Labrador","Rescate Animal","src/images/perro_3.jpg","Indistinto"));
reg.push(new Perro("Mollete","M","M","Huski","Rescate Animal","src/images/perro_4.jpg","Indistinto"));
reg.push(new Perro("Sra. Petunia","F","M","Pelusa","Rescate Animal","src/images/perro_5.jpg","Indistinto"));
reg.push(new Perro("Stoler","M","G","Mestizo","Rescate Animal","src/images/perro_6.jpg","Indistinto"));
reg.push(new Perro("Buddy","M","G","Labrador","Rescate Animal","src/images/perro_7.jpg","Indistinto"));
reg.push(new Perro("Boris","F","CH","Pelusa","Rescate Animal","src/images/perro_8.jpg","Indistinto"));
reg.push(new Perro("Pelusa","F","CH","Pelusa","Rescate Animal","src/images/perro_9.jpg","Indistinto"));
reg.push(new Perro("Spiri","M","CH","Chihuhua","Rescate Animal","src/images/perro_10.jpg","Indistinto"));