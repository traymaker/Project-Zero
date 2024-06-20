import { Foe } from '../actors/foe';
import { Player } from '../actors/player';

export class CombatTile {
  contents?: Player | Foe;
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
}
