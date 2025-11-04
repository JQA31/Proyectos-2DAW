import Casa from "./Clases/Casa.js";
import Reino from "./Clases/Reino.js";
import Arma from "./Clases/Arma.js";

import Guerrero from "./Clases/PersonajesEspeciales/Guerrero.js";
import Rey from "./Clases/PersonajesEspeciales/Rey.js";
import Consejero from "./Clases/PersonajesEspeciales/Consejero.js";

const reino = new Reino("Poniente");
const casaLannister = new Casa("Casa Lannister","Un Lannister siempre paga sus deudas");
const casaStark = new Casa("Casa Stark","Se acerca el invierno");

const garra = new Arma("Garra",25,"Espada");
const aguja = new Arma("Aguja",15,"Espada");

//Agregamos las nuevas clases especiales
const jhonSnow = new Guerrero("Jhon Snow",23,"Casa Stark",true,garra);
const aryaStark = new Guerrero("Arya Stark",18,"Casa Stark",true,aguja);
const jaimeLannister = new Rey("Jaime Lannister",43,"Casa Lannister",true,2);
const tyrionLannister = new Consejero("Tyrion Lannister",32,"Casa Lannister",true,"Guerra");


//Añadimos las casas al reino
console.log("\nAñadimos las casas al reino");
reino.agregarCasa(casaLannister);
reino.agregarCasa(casaStark);

//Añadimos los personajes a sus casas
console.log("\nAñadimos los personajes a sus casas");
casaStark.añadirMiembro(jhonSnow);
casaStark.añadirMiembro(aryaStark);
casaLannister.añadirMiembro(jaimeLannister);
casaLannister.añadirMiembro(tyrionLannister);

//Proclamamos al rey del reino
console.log("\nProclamamos al rey del reino");
reino.agregarRey(jaimeLannister);

//Salida de fase 2
console.log("\nSalida esperada de la fase 2\n");

jhonSnow.decirFrase();
jhonSnow.luchar();
jhonSnow.entrenar();

tyrionLannister.decirFrase();
tyrionLannister.luchar();
tyrionLannister.aconsejar(jaimeLannister);

jaimeLannister.decirFrase();
jaimeLannister.gobernar();
jaimeLannister.luchar();



