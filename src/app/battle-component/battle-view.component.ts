import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BattleLoadService } from '../battle-service/battle-load.service';
import { StateService } from '../state-service/state.service';

@Component({
  selector: 'battle-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <h2>Battle View:</h2>
    <button type="button" (click)="FleeBattle()">Flee Battle</button>
  `,
})
export class BattleViewComponent {
  stateService = inject(StateService);
  battleLoadService = inject(BattleLoadService);
  constructor(private _router: Router) {
    this.battleLoadService.loadBattle(this.stateService.savedGame);
  }

  FleeBattle() {
    this._router.navigate(['/home-view']);
  }
}
