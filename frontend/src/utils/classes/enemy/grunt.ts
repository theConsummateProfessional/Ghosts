import {BaseEnemy} from './base'

class Grunt implements BaseEnemy {
    type: string;
    health: number;
    damageDealt: number;

    constructor() {
        this.type = "Grunt";
        this.health = 20;
        this.damageDealt = 5;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}