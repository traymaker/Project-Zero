import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { baseUrl } from '../app.component';
import { Save } from '../../entities/save';
import { SavedGameComponent } from './saved-game.component';
import { SavedGameService } from '../../admin-service/saved-game.service';
import { StateService } from '../../state-service/state.service';

@Component({
  selector: 'saved-games',
  standalone: true,
  template: `
    <h2>Saved games:</h2>
    <app-saved-game
      *ngFor="let savedGame of savedGameList"
      [save]="savedGame"
      (deleteSaveEvent)="deleteSave(savedGame)"
      (loadSaveEvent)="loadSave(savedGame)"
    >
    </app-saved-game>
  `,
  imports: [CommonModule, RouterLink, RouterOutlet, SavedGameComponent],
})
export class SavedGamesComponent {
  saveGameService = inject(SavedGameService);
  stateService = inject(StateService);
  savedGameList: Save[] = [];

  constructor(private _router: Router) {
    this.saveGameService.getAllSavedGames().then((savedGames: Save[]) => {
      this.savedGameList = savedGames;
      console.log(this.savedGameList);
    });
  }

  deleteSave(savedGame: Save) {
    this.saveGameService
      .deleteSavedGame(savedGame)
      .then((savedGames) => (this.savedGameList = savedGames));
  }

  loadSave(savedGame: Save) {
    this.stateService.savedGame = savedGame;
    this._router.navigate(['/home-view']);
  }
}
