import { Injectable } from '@angular/core';
import { Save } from '../../entities/save';
import { Foe, createTestFoe } from '../../entities/actors/foe';
import { CombatTile } from '../../entities/combat/combat-tile';
import { CombatGrid } from '../../entities/combat/combat-grid';
import { BaseService } from '../base-service';
import { Player } from '../../entities/actors/player';

@Injectable({
  providedIn: 'root',
})
export class CombatLoadService extends BaseService {
  loadCombat() {
    this.stateService.currentFoes = this.generateFoes();
    this.stateService.currentGrid = this.generateCombatGrid(this.stateService.currentPlayer);
  }

  unloadCombat() {
    this.stateService.currentFoes = [];
    this.stateService.currentGrid = undefined;
  }

  generateFoes(): Foe[] {
    const foes = [createTestFoe()];
    return foes;
  }

  generateCombatGrid(player: Player): CombatGrid {
    const tiles: CombatTile[][] = [[]];
    // variable per level?
    const size = 20;
    for (let i = 0; i < size; i++) {
      tiles.push([]);

      for (let j = 0; j < size; j++) {
        tiles[i].push(new CombatTile(i, j));
      }
    }

    const playerTile = this.placePlayer(tiles, player)
    const foeTiles = this.placeFoes(tiles, this.generateFoes());

    const grid = new CombatGrid(tiles, playerTile, foeTiles);
    return grid;
  }

  placeFoes(tiles: CombatTile[][], foes: Foe[]): Map<string, CombatTile> {
    const foeTiles = new Map<string, CombatTile>();
    for (let foe of foes) {
      foeTiles.set(foe.id, this.placeFoe(tiles, foe));
    }

    return foeTiles;
  }

  placeFoe(tiles: CombatTile[][], foe: Foe): CombatTile {
    for (let row of tiles) {
      for (let tile of row) {
        if (tile.isEmpty()) {
          tile.addActor(foe);
          return tile;
        }
      }
    }
    throw new DOMException('Nowhere to place foe?');
  }

  placePlayer(tiles: CombatTile[][], player: Player): CombatTile {
    for (let row of tiles) {
      for (let tile of row) {
        if (tile.isEmpty()) {
          tile.addActor(player);
          return tile;
        }
      }
    }

    throw new DOMException('Nowhere to place player?');
  }

  // TODO: add terrain features
  placeTerrain(): void {}
}
