import Arma from "./Arma.js";

class Personaje{
    #nombre;
    #edad;
    #vivo;
    #casa;
    #frase;

    constructor(nombre,edad,casa,vivo){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#vivo = vivo;
        this.#casa = casa;
        this.#frase = `Soy ${this.#nombre} de la ${this.#casa}`;
    }

    //Geters and Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    getCasa() {
        return this.#casa;
    }

    setCasa(casa) {
        this.#casa = casa;
    }

    decirFrase() {
        console.log(this.#frase);
    }

    estado(){
        if(this.#vivo){
            console.log("Esta vivo");
        }else{
            console.log("Esta muerto");
        }
    }

    //Metodos

    //Cambia el estado de vivo a muerto
    morir(){
        this.#vivo = false;
    }
}

export default Personaje;