import {Entity} from "../entity";

class poltergeist implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = "poltergeist";
        this.health = 30;
        this.damageDealt = 10;
        this.movementSpeed = 20;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}
            