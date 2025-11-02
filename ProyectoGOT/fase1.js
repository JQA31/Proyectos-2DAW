import Personaje from "./Clases/Personaje.js";
import Casa from "./Clases/Casa.js";
import Reino from "./Clases/Reino.js";
import Arma from "./Clases/Arma.js";

const reino = new Reino("Poniente");
const casaLannister = new Casa("Casa Lannister","Un Lannister siempre paga sus deudas");
const casaStark = new Casa("Casa Stark","Se acerca el invierno");
const jhonSnow = new Personaje("Jhon Snow",23,"Casa Stark",true);
const aryaStark = new Personaje("Arya Stark",18,"Casa Stark",true);
const jaimeLannister = new Personaje("Jaime Lannister",43,"Casa Lannister",true);
const garra = new Arma("Garra",25,"Espada");
const aguja = new Arma("Aguja",15,"Espada");

//Añadimos las casas al reino
console.log("\nAñadimos las casas al reino");
reino.agregarCasa(casaLannister);
reino.agregarCasa(casaStark);

//Añadimos las armas a los personajes
console.log("\nAñadimos las armas a los personajes");
jhonSnow.agregarArma(garra);
aryaStark.agregarArma(aguja);

//Añadimos los personajes a sus casas
console.log("\nAñadimos los personajes a sus casas");
casaStark.añadirMiembro(jhonSnow);
casaStark.añadirMiembro(aryaStark);
casaLannister.añadirMiembro(jaimeLannister);

//Proclamamos al rey del reino
console.log("\nProclamamos al rey del reino");
reino.agregarRey(jaimeLannister);

//Listamos las casas del reino
console.log("\nListamos las casas del reino");
reino.listarCasas();

//Verificamos al rey actual
console.log("\nVerificamos al rey actual");
reino.mostrarRey();

//Mostramos a los miembros de las casas
console.log("\nMostramos a los miembros de las casas");
casaStark.mostrarMiembros();
casaLannister.mostrarMiembros();

//Mostramos las presentaciones de los personajes
console.log("\nMostramos las presentaciones de los personajes");
jhonSnow.decirFrase();
aryaStark.decirFrase();
jaimeLannister.decirFrase();

//Mostramos las armas
console.log("\nMostramos las armas");
garra.descripcion();
aguja.descripcion();