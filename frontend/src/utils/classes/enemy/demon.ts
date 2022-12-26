import {Entity} from "../entity";

class demon implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = "demon";
        this.health = 40;
        this.damageDealt = 20;
        this.movementSpeed = 25;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}
            