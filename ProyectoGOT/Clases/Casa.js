import Personaje from "./Personaje.js";

class Casa{
    #nombre;
    #lema;
    #miembros;

    constructor(nombre,lema){
        this.#nombre = nombre;
        this.#lema = lema;
        this.#miembros = [];
    }

    //Getters and Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    
    getLema() {
        console.log(this.#lema);
    }

    setLema(lema) {
        this.#lema = lema;
    }

    getMiembros(){
        return this.#miembros;
    }

    //Metodos

    //Mostramos a los miembros de la casa.
    mostrarMiembros() {
        console.log(`Miembros de la ${this.#nombre}`);
        this.#miembros.forEach(miembro =>{
            console.log("-"+miembro.getNombre());
        })
    }

    //Añadimos a un miembro a la casa, verificamos que el miembro no exista ya en la casa.
    añadirMiembro(miembro) {
        if(miembro instanceof Personaje){
            if(this.#miembros.find(m => m.getNombre() == miembro.getNombre())){
                console.log("Este miembro ya esta en esta casa");
            }else{
                this.#miembros.push(miembro);
                console.log(`${miembro.getNombre()} a sido agregado a la ${this.#nombre}`);
            }
        }else{
            console.log("Debe ser una instancia de personaje");
        }
    }

}

export default Casa;