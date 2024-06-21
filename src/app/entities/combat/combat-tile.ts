import { Actor } from '../actors/actor';
import { Foe } from '../actors/foe';
import { Player } from '../actors/player';

export class CombatTile {
  contents?: Actor;
  xCoord: number;
  yCoord: number;

  constructor(x: number, y: number) {
    this.xCoord = x;
    this.yCoord = y;
  }

  public toString(): string {
    let stringOut = '';
    stringOut += '(' + this.xCoord + ',' + this.yCoord + '):';
    if (this.contents) {
      stringOut += this.contents;
    } else {
      stringOut += '-';
    }
    return stringOut;
  }

  public isEmpty(): boolean {
    if (this.contents) {
      return true;
    }
    return false;
  }

  public addActor(actor: Actor) {
    this.contents = actor;
  }
}
