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
    this.stateService.currentGrid = this.placeFoes(
      this.stateService.currentFoes
    );
    this.stateService.currentGrid = this.placePlayer(
      this.stateService.currentPlayer
    );
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
    // variable per level?
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

  placeFoes(foes: Foe[]): CombatGrid {
    for (let f of foes) {
      this.stateService.currentGrid = this.placeFoe(f);
    }

    return this.stateService.currentGrid;
  }

  placeFoe(foe: Foe): CombatGrid {
    for (let row of this.stateService.currentGrid.grid) {
      for (let tile of row) {
        if (tile.isEmpty()) {
          tile.addActor(foe);
          return this.stateService.currentGrid;
        }
      }
    }
    throw new DOMException('Nowhere to place foe?');
  }

  placePlayer(player: Player): CombatGrid {
    for (let row of this.stateService.currentGrid.grid) {
      for (let tile of row) {
        if (tile.isEmpty()) {
          tile.addActor(player);
          return this.stateService.currentGrid;
        }
      }
    }

    throw new DOMException('Nowhere to place player?');
  }

  // TODO: add terrain features
  placeTerrain(): void {}
}
