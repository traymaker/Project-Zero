import { Foe } from "../actors/foe";
import { Player } from "../actors/player";

export interface CombatTile {
    contents: Player | Foe;
    xCoord: number;
    yCoord: number;
}