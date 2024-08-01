import { Injectable } from '@angular/core';
import { baseUrl } from '../../admin-component/app.component';
import { Save, newSave } from '../../entities/save';
import { Player } from '../../entities/actors/player';

@Injectable({
  providedIn: 'root',
})
export class SavedGameService {
  async createSavedGame(profileName: string): Promise<Save> {
    const data = await fetch(baseUrl + 'saves');
    const saves = (await data.json()) as Save[];

    if (!saves) {
      alert('No save game data loaded!');
      return Promise.reject();
    }

    if (saves.find((save) => save.profileName === profileName)) {
      alert('A save game already exists with that profile name!');
      return Promise.reject();
    }

    const response = await fetch(baseUrl + 'saves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSave(profileName)),
    });

    return await response.json();
  }

  async getAllSavedGames(): Promise<Save[]> {
    const data = await fetch(baseUrl + 'saves');
    const saveJsons = await data.json() as Save[];
    let saves: Save[] = [];
    for (let saveJson of saveJsons) {
      saves.push(
        new Save(
          saveJson.id, 
          saveJson.profileName, 
          saveJson.playerCharacter,
        )
      );
    }
    return saveJsons;
  }

  async deleteSavedGame(savedGame: Save): Promise<Save[]> {
    await fetch(baseUrl + 'saves/' + savedGame.id, {
      method: 'DELETE',
    }).then((response) => response.json().then((res) => console.log(res)));
    return await this.getAllSavedGames();
  }
}
