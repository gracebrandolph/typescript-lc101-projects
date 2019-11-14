import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor (name: string, totalCapacityKg: number){
        this.name = name;
        this.massKg = this.massKg;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass( items: Payload[] ): number {
        let sum = 0;

        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }

        return sum;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean {
        let added = false;
        
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            added = true;
        }
        
        return added;
    }
    addAstronaut(astronaut: Astronaut){
        let added = false;
        
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            added = true;
        }
        
        return added;
    }
}