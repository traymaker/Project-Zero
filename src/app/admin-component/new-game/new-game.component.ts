import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SavedGameService } from '../../admin-service/saved-game.service';
import { StateService } from '../../state-service/state.service';

@Component({
  selector: 'new-game',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `
    <h2>New Game:</h2>
    <label for="first-name">Enter your name: </label>
    <input id="first-name" type="text" [formControl]="profileName" />

    <span
      *ngIf="profileName.invalid && (profileName.dirty || profileName.touched)"
    >
      <div *ngIf="profileName.errors?.['required']">
        Profile name is required.
      </div>
      <div *ngIf="profileName.errors?.['maxLength']">
        Profile name must be at most 50 characters long.
      </div>
    </span>
    <button type="button" (click)="CreateProfile(profileName.value!)">
      Create Profile
    </button>
  `,
})
export class NewGameComponent {
  saveGameService = inject(SavedGameService);
  stateService = inject(StateService);
  profileName = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
  ]);
  constructor(private _router: Router) {}

  CreateProfile(profileName: string) {
    this.saveGameService.createSavedGame(profileName).then(
      (result) => {
        this.stateService.savedGame = result;
        this._router.navigate(['/home-view']);
      },
      (error) => console.log(error)
    );
  }
}
