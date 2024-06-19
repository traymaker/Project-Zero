import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Save } from '../../entities/save';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-game',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="listing">
      <span>Profile name: {{ save.profileName }} </span>
      <button type="button" (click)="loadSavedGame()">Load Saved Game</button>
      <button type="button" (click)="deleteSavedGame()">
        Delete Saved Game
      </button>
    </section>
    <br />
  `,
})
export class SavedGameComponent {
  @Input() save!: Save;
  @Output() deleteSaveEvent = new EventEmitter();
  @Output() loadSaveEvent = new EventEmitter();

  deleteSavedGame() {
    this.deleteSaveEvent.emit('delete');
  }

  loadSavedGame() {
    this.loadSaveEvent.emit('load');
  }
}
