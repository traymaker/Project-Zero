import { Actor } from '../actors/actor';
import { Foe } from '../actors/foe';
import { Player } from '../actors/player';
 
// Show striped colors if multiple colors overlap?
export enum Color {
  Grey = 1,
  Red,
  Blue,
  Green,
}

// Tile should not do much calculation. Static properties will be set on update by the parent grid.
export class CombatTile {
  contents?: Actor;
  xCoord: number;
  yCoord: number;
  color: Color;

  constructor(x: number, y: number) {
    this.xCoord = x;
    this.yCoord = y;
    this.color = Color.Grey;
  }

  // Add other colors
  getTileColor() {
    if (this.color == Color.Grey) 
      return 'tile-grey';
    if (this.color == Color.Red)
      return 'tile-red';
    else 
      throw new DOMException('No color for tile:' + this.getContentsToString());
  }

  public getContentsToString(): string {
    let stringOut = '';
    stringOut += '(' + this.xCoord + ',' + this.yCoord + '):';
    if (this.contents !== undefined) {
      stringOut += this.contents.getName();
    } else {
      stringOut += '-';
    }
    return stringOut;
  }

  public isEmpty(): boolean {
    if (this.contents === undefined) {
      return true;
    }
    return false;
  }

  public addActor(actor: Actor) {
    this.contents = actor;
  }

  public removeActor() {
    if (this.contents instanceof Actor) {
      this.contents = undefined;
      return;
    }
    throw new DOMException('removeActor incorrectly called on tile ' + this.getContentsToString() + '.');
  }
}
