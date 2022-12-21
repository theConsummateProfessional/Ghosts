import {Entity} from "../entity";

class Hero implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = "Hero";
        this.health = 20;
        this.damageDealt = 5;
        this.movementSpeed = 10;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }

    updateDmg(newGunHitPoints: number) {
        this.damageDealt = newGunHitPoints;
    }
}