export interface Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;
    decrementHealth(hitPoints: number): void;
}