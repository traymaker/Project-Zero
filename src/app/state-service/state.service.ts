import { Injectable } from '@angular/core';
import { Save } from '../entities/save';
import { Fighter } from '../entities/fighter';
import { Foe } from '../entities/foe';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _savedGame?: Save;
  private _currentFighter?: Fighter;
  private _currentFoes?: Foe[];

  constructor() {}

  public get savedGame() {
    if (this._savedGame) {
      return this._savedGame;
    }
    throw new DOMException('No saved game?');
  }

  public set savedGame(save: Save) {
    this._savedGame = save;
    this._currentFighter = save.playerCharacter;
  }

  public get currentFighter() {
    if (this._currentFighter) {
      return this._currentFighter;
    }
    throw new DOMException('No fighter loaded?');
  }

  public set currentFighter(fighter: Fighter) {
    this._currentFighter = fighter;
  }

  public get currentFoes() {
    if (this._currentFoes) {
      return this.currentFoes;
    }
    throw new DOMException('No foes loaded?');
  }

  public set currentFoes(foes: Foe[]) {
    this._currentFoes = foes;
  }
}
