import Guerrero from "./PersonajesEspeciales/Guerrero.js";

class Batalla{
    constructor(){

    }

    iniciarBatalla(casaA, casaB) {
        let guerrerosA = this.#tomarGuerreros(casaA.getMiembros());
        let guerrerosB = this.#tomarGuerreros(casaB.getMiembros());

        let contadorA = 0;
        let contadorB = 0;

        const muertos = [];

        console.log(`\nInicia la batalla: ${casaA.getNombre()} vs ${casaB.getNombre()}`);

        while (contadorA < guerrerosA.length && contadorB < guerrerosB.length) {
            const guerreroA = guerrerosA[contadorA];
            const guerreroB = guerrerosB[contadorB];
            

            console.log(`\n ${guerreroA.getNombre()} vs ${guerreroB.getNombre()} `);

            if (guerreroA.getEstado()) {
                guerreroA.atacar(guerreroB);
            }

            if (guerreroB.getEstado()) {
                guerreroB.atacar(guerreroA);
            }

            if (!guerreroA.getEstado()) {
                contadorA++;
                muertos.push(guerreroA);
            }

            if (!guerreroB.getEstado()) {
                contadorB++;
                muertos.push(guerreroB);
            }

        }

        if (contadorA < guerrerosA.length) {
            console.log(`\nCasa ganadora : ${casaA.getNombre()}`);
        } else {
            console.log(`\nCasa ganadora : ${casaB.getNombre()}`);
        }
        
        return muertos;
    }

    #tomarGuerreros(miembros){
        let guerreros=[];
        miembros.forEach(miembro => {
            if(miembro instanceof Guerrero){
                guerreros.push(miembro);
            }
        });
        return guerreros;
    }

    mostrarGuerrerosMuertosEnBatalla(muertos){
        console.log("\nGuerreros Muertos en Batalla:");
        muertos.forEach(muerto => {
            console.log(`${muerto.getNombre()}`);
        });
    }


}

export default Batalla;