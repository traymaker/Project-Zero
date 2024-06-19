import { Injectable, inject } from '@angular/core';
import { baseUrl } from '../admin-component/app.component';
import { Save } from '../entities/save';
import { createTestFoe } from '../entities/foe';
import { StateService } from '../state-service/state.service';

@Injectable({
  providedIn: 'root',
})
export class BattleLoadService {
  stateService = inject(StateService);

  loadBattle(save: Save) {
    console.log(save.playerCharacter);
    const foes = [createTestFoe()];
    this.stateService.currentFoes = foes;
  }

  unloadBattle() {}
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
