import Personaje from '../Personaje.js';
import Arma from '../Arma.js';

class Guerrero extends Personaje{

    #arma;
    #vida;

    constructor(nombre,edad,casa,vivo,arma){
        super(nombre,edad,casa,vivo);
        if(arma instanceof Arma){
            this.#arma = arma;
            console.log(`${this.getNombre()} ha equipado el arma ${arma.getNombre()}`);
        }else{
            console.log("Debe ser una instancia de Arma")
        }
        this.#vida = 100;
    }

    getVida(){
        return this.#vida;
    }

    setVida(vida){
        this.#vida = vida;
    }

    //Agrega el arma al personaje
    agregarArma(arma){
        
        if(arma instanceof Arma){
            this.#arma = arma;
            console.log(`${this.getNombre()} ha equipado el arma ${arma.getNombre()}`);
        }else{
            console.log("Debe ser una instancia de Arma")
        }
    }

    //Muestra el arma del personaje si la tiene
    verArma(){
        return this.#arma;
    }

    luchar(){
        console.log(`${this.getNombre()} ataca con ${this.#arma.getNombre()} causando ${this.#arma.getDaño()} puntos de daño.`);
    }

    entrenar(){
        console.log(`${this.getNombre()} entrena con hazta el cansancio para su próxima batalla.`);
    }

    recibirDaño(daño){
        this.#vida -= daño;
        if(this.#vida<=0){
            this.#vida = 0;
            this.morir();
        }
    }

    atacar(objetivo) {
        const daño = Math.floor(this.#arma.getDaño() * (0.5 + Math.random() * 0.6));
        console.log(`${this.getNombre()} ataca a ${objetivo.getNombre()} causando ${daño} puntos de daño.`);
        objetivo.recibirDaño(daño);
    }
    
}

export default Guerrero;