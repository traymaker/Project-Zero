import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from '../service/state-service/state.service';
import { CombatLoadService } from '../service/combat-service/combat-load.service';
import { CombatTile } from '../entities/combat/combat-tile';

@Component({
  selector: 'combat-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './combat-view.component.html',
  styleUrl: './combat-view.component.css'
})
export class CombatViewComponent {
  stateService = inject(StateService);
  combatLoadService = inject(CombatLoadService);

  constructor(private _router: Router) {
    this.combatLoadService.loadCombat();
  }

  GetTileColor(tile: CombatTile) {
    return tile.getTileColor();
  }

  FleeCombat() {
    this.combatLoadService.unloadCombat();
    this._router.navigate(['/home-view']);
  }

  FinishCombat() {
    this.combatLoadService.unloadCombat();
    this._router.navigate(['/home-view']);
  }
}
