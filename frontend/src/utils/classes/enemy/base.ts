export interface BaseEnemy {
    type: string;
    health: number;
    damageDealt: number;
    decrementHealth(hitPoints: number): void;
}