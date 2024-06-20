import { Injectable, inject } from '@angular/core';
import { Save } from '../entities/save';
import { Foe, createTestFoe } from '../entities/actors/foe';
import { StateService } from '../state-service/state.service';
import { CombatTile } from '../entities/combat/combat-tile';
import { CombatGrid } from '../entities/combat/combat-grid';

@Injectable({
  providedIn: 'root',
})
export class CombatLoadService {
  stateService = inject(StateService);

  loadCombat(save: Save) {
    console.log(save.playerCharacter);
    this.stateService.currentFoes = this.generateFoes();
    this.stateService.currentGrid = this.generateGrid();
    console.log(this.stateService.currentGrid.toString());
  }

  unloadCombat() {}

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
  // async createSavedGame(profileName: string): Promise<boolean> {
  //   const data = await fetch(baseUrl + 'saves');
  //   const saves = (await data.json()) as Save[];

  //   if (!saves) {
  //     alert('No save game data loaded!');
  //     return false;
  //   }

  //   if (saves.find((save) => save.profileName === profileName)) {
  //     alert('A save game already exists with that profile name!');
  //     return false;
  //   }

  //   await fetch(baseUrl + 'saves', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       profileName: profileName,
  //     }),
  //   }).then((response) =>
  //     response.json().then((res) => {
  //       console.log(res);
  //       return true;
  //     })
  //   );
  //   return false;
  // }

  // async getAllSavedGames(): Promise<Save[]> {
  //   const data = await fetch(baseUrl + 'saves');
  //   return (await data.json()) ?? [];
  // }

  // async deleteSavedGame(savedGame: Save): Promise<Save[]> {
  //   await fetch(baseUrl + 'saves/' + savedGame.id, {
  //     method: 'DELETE',
  //   }).then((response) => response.json().then((res) => console.log(res)));
  //   return await this.getAllSavedGames();
  // }
}
