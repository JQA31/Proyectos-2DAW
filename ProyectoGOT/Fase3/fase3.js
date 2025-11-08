import Casa from "./Clases/Casa.js";
import Arma from "./Clases/Arma.js";
import Guerrero from "./Clases/PersonajesEspeciales/Guerrero.js";
import Batalla from "./Clases/Batalla.js";

const casaStark = new Casa("Stark", "El invierno se acerca");
const casaLannister = new Casa("Lannister", "Oye mi rugido");

const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

// === GUERREROS DE LA CASA STARK ===
const jon = new Guerrero("Jon Snow", 25, casaStark, true, garra);
const arya = new Guerrero("Arya Stark", 18, casaStark, true, aguja);
const robb = new Guerrero("Robb Stark", 22, casaStark, false,  espadaLarga);
const brienne = new Guerrero("Brienne de Tarth", 30, casaStark, true,  hacha);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32, casaLannister, true,  filoRojo);
const cersei = new Guerrero("Cersei Lannister", 34, casaLannister, true,  lanzaDeCaza);
const tyrion = new Guerrero("Tyrion Lannister", 30, casaLannister, true,  ballesta);
const gregor = new Guerrero("Gregor Clegane", 38, casaLannister, true,  hacha);

// === AÑADIR PERSONAJES A LAS CASAS ===
casaStark.añadirMiembro(jon);
casaStark.añadirMiembro(arya);
casaStark.añadirMiembro(robb);
casaStark.añadirMiembro(brienne);

casaLannister.añadirMiembro(jaime);
casaLannister.añadirMiembro(cersei);
casaLannister.añadirMiembro(tyrion);
casaLannister.añadirMiembro(gregor);

casaStark.mostrarMiembros();
casaLannister.mostrarMiembros();

const batallaBastardos = new Batalla();
const muertos = batallaBastardos.iniciarBatalla(casaStark,casaLannister);

batallaBastardos.mostrarGuerrerosMuertosEnBatalla(muertos);

ñ