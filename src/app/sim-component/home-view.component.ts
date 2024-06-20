import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StateService } from '../state-service/state.service';
import { Player } from '../entities/actors/player';

@Component({
  selector: 'home-view',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <h2>Home View:</h2>
    <a class="primary" [routerLink]="['/combat-view']"
      >Venture forth (combat)</a
    >
    <br />
    <div>Your status:</div>
    <div>Name: {{ player.name }}</div>
    <div>Attack: {{ player.attack }}</div>
    <div>Defense: {{ player.defense }}</div>
    <div>Magic: {{ player.magic }}</div>
    <div>Resistance: {{ player.resistance }}</div>
    <br />
  `,
})
export class HomeViewComponent {
  stateService = inject(StateService);
  player: Player;

  constructor() {
    this.player = this.stateService.currentPlayer;
  }
}
