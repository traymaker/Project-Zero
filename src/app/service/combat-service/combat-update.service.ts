import { Injectable } from "@angular/core";
import { BaseService } from "../base-service";
import { CombatGrid } from "../../entities/combat/combat-grid";
import { Player } from "../../entities/actors/player";
import { CombatTile } from "../../entities/combat/combat-tile";
import { Actor } from "../../entities/actors/actor";
import { Foe } from "../../entities/actors/foe";

@Injectable({
    providedIn: 'root',
  })
  export class CombatUpdateService extends BaseService {
    // Service methods will naively update combat state. Any validation should be done before calling them.
    // Return something else here?
    movePlayer(grid: CombatGrid, player: Player, newTile: CombatTile): CombatTile {
        grid.playerCurrentTile.removeActor();
        newTile.addActor(player);
        grid.playerCurrentTile = newTile;
        return grid.playerCurrentTile;
    }

    moveFoe(grid: CombatGrid, foe: Foe, newTile: CombatTile): CombatTile {
        if (grid.foeCurrentTiles.get(foe.id)) {
            grid.foeCurrentTiles.get(foe.id)?.removeActor();
            newTile.addActor(foe);
            grid.foeCurrentTiles.set(foe.id, newTile);
            return grid.foeCurrentTiles.get(foe.id)!;
        }
        throw new DOMException('moveFoe call for ' + foe.id + ' but no matching index was found in grid.foeCurrentTiles.');
    }
  }