import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from '../state-service/state.service';
import { CombatLoadService } from '../combat-service/combat-load.service';

@Component({
  selector: 'combat-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <h2>Combat View:</h2>
    <button type="button" (click)="FleeCombat()">Flee combat</button>
  `,
})
export class CombatViewComponent {
  stateService = inject(StateService);
  combatLoadService = inject(CombatLoadService);
  constructor(private _router: Router) {
    this.combatLoadService.loadCombat(this.stateService.savedGame);
  }

  FleeCombat() {
    this._router.navigate(['/home-view']);
  }
}
