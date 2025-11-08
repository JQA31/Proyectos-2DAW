import Casa from "./Casa.js";
import Rey from "./PersonajesEspeciales/Rey.js";
class Reino{
    #nombre;
    #casas;
    #rey;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = null;
    }

    //Getters and Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    //Metodos

    //Agregamos una casa al reino, verificamos que la casa sea una instancia de Casa y que la casa no exista en este reino.
    agregarCasa(casa){
        if(casa instanceof  Casa){
            if(this.#casas.find(c => c.getNombre() === casa.getNombre())){
                console.log("Esta casa ya existe");
            }else{
                this.#casas.push(casa);
                console.log(`La ${casa.getNombre()} ha sido agregada al Reino de ${this.#nombre}`);
            }
        }else{
            console.log("Solo se pueden agregar instancias Casa");
        }
    }

    //Mostramos todas las casas de este reino.
    listarCasas(){
        this.#casas.forEach(casa => {
            console.log(casa.getNombre());
        });
    }

    //Mostramos al rey si existe
    mostrarRey(){
        if(this.#rey===null){
            console.log("Este reino no tiene rey aún");
        }else{
            console.log(`El rey actual es ${this.#rey.getNombre()} de la casa ${this.#rey.getCasa()}`);
        }
    }

    //Agregamos un rey al reino, verificamos que la casa del rey exista y que el rey exista en esa casa.
    agregarRey(rey){  
        if(rey instanceof Rey){
            this.#rey = rey;
            console.log(`${rey.getNombre()} ha sido proclamado rey de ${this.#nombre}`);
        }else{
            console.log("El rey debe ser una instancia de rey");
        }
    }

}

export default Reino;