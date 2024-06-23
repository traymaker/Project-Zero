import { Injectable } from '@angular/core';
import { Save } from '../../entities/save';
import { Player } from '../../entities/actors/player';
import { Foe } from '../../entities/actors/foe';
import { CombatGrid } from '../../entities/combat/combat-grid';

@Injectable({
  providedIn: 'root',
})
// Create service for reading/displaying state?
export class StateService {
  private _savedGame?: Save;
  private _currentPlayer?: Player;
  private _currentFoes?: Foe[];
  private _currentGrid?: CombatGrid;

  constructor() {}

  public get savedGame(): Save {
    if (this._savedGame) {
      return this._savedGame;
    }
    throw new DOMException('No saved game?');
  }

  public set savedGame(save: Save) {
    this._savedGame = save;
    this._currentPlayer = save.playerCharacter;
  }

  public get currentPlayer(): Player {
    if (this._currentPlayer) {
      return this._currentPlayer;
    }
    throw new DOMException('No Player loaded?');
  }

  public set currentPlayer(Player: Player) {
    this._currentPlayer = Player;
  }

  public get currentFoes(): Foe[] {
    if (this._currentFoes) {
      return this._currentFoes;
    }
    throw new DOMException('No foes loaded?');
  }

  public set currentFoes(foes: Foe[]) {
    this._currentFoes = foes;
  }

  public get currentGrid(): CombatGrid {
    if (this._currentGrid) {
      return this._currentGrid;
    }
    throw new DOMException('No grid loaded?');
  }

  public set currentGrid(grid: CombatGrid | undefined) {
    this._currentGrid = grid;
  }
}
