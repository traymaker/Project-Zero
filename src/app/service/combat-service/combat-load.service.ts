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
    this.stateService.currentGrid = this.generateGrid();
    this.placeFoes(this.stateService.currentFoes);
    this.placePlayer(this.stateService.currentPlayer);
  }

  unloadCombat() {
    this.stateService.currentFoes = [];
    this.stateService.currentGrid = undefined;
  }

  generateFoes(): Foe[] {
    const foes = [createTestFoe()];
    return foes;
  }

  generateGrid(): CombatGrid {
    const tiles: CombatTile[][] = [[]];
    const size = 20;
    for (let i = 0; i < size; i++) {
      tiles.push([]);

      for (let j = 0; j < size; j++) {
        tiles[i].push(new CombatTile(i, j));
      }
    }

    const grid = new CombatGrid(tiles);
    return grid;
  }

  placeFoes(foes: Foe[]): void {
    for (let f of foes) {
      for (let row of this.stateService.currentGrid.grid) {
        for (let tile of row) {
          if (tile.isEmpty()) {
            tile.addActor(f);
          }
        }
      }
    }
  }

  placePlayer(player: Player): void {
    for (let row of this.stateService.currentGrid.grid) {
      for (let tile of row) {
        if (tile.isEmpty()) {
          tile.addActor(player);
        }
      }
    }
  }
}
