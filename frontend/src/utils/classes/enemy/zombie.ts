import {Entity} from "../entity";

class zombie implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = "zombie";
        this.health = 25;
        this.damageDealt = 15;
        this.movementSpeed = 5;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}
            