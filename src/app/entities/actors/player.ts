import { Actor } from './actor';
import { Paladin } from './paladin';

export class Player extends Actor {
  /** internal Player identifier. Currently unused. */
  id: string;
  /** Player name for display. */
  name: string;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;

  constructor(
    id?: string,
    name?: string,
    attack?: number,
    defense?: number,
    magic?: number,
    resistance?: number
  ) {
    super();
    this.id = crypto.randomUUID();
    this.name = 'test';
    this.attack = 10;
    this.defense = 10;
    this.magic = 10;
    this.resistance = 10;
  }

  public override toString() {
    return this.name;
  }
}

export const newPlayer = (name: string): Player => {
  const player: Paladin = {
    id: crypto.randomUUID(),
    name: name,
    attack: 10,
    defense: 10,
    magic: 10,
    resistance: 10,
  };
  return player;
};
