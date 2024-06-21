import { Injectable } from '@angular/core';
import { baseUrl } from '../../admin-component/app.component';
import { Save, newSave } from '../../entities/save';

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
    return (await data.json()) ?? [];
  }

  async deleteSavedGame(savedGame: Save): Promise<Save[]> {
    await fetch(baseUrl + 'saves/' + savedGame.id, {
      method: 'DELETE',
    }).then((response) => response.json().then((res) => console.log(res)));
    return await this.getAllSavedGames();
  }
}
