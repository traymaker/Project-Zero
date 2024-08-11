import { Injectable } from "@angular/core";
import { BaseService } from "../base-service";
import { CombatGrid } from "../../entities/combat/combat-grid";
import { Color, CombatTile } from "../../entities/combat/combat-tile";

@Injectable({
    providedIn: 'root',
  })
  export class CombatLoadService extends BaseService {
    setTileColors(combatGrid: CombatGrid, combatTile: CombatTile): void {
        return;
    }

    setPlayerMovementOptionTiles(): void {

    }

    setEnemyDamageTiles(): void {
      
    }
    }