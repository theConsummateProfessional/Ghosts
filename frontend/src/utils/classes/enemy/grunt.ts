import {Entity} from "../entity";

class Grunt implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = "Grunt";
        this.health = 20;
        this.damageDealt = 5;
        this.movementSpeed = 10;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}