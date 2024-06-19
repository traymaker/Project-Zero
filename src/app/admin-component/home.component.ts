import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
  <a class="primary" [routerLink]="['new-game']">New Game</a>
  <br>
  <a class="primary" [routerLink]="['saved-games']">Load Saved Game</a>
  `,
})
export class HomeComponent {
  constructor() {
  }
}