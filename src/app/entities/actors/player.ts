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
    id: string,
    name: string,
    attack: number,
    defense: number,
    magic: number,
    resistance: number
  ) {
    super();
    this.id = id;
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.magic = magic;
    this.resistance = resistance;
  }

  public getName(): string {
    return this.name;
  }
}

export const newPlayer = (name: string): Player => {
  const player: Player = new Player(
    crypto.randomUUID(),
    name,
    10,
    10,
    10,
    10,
  );
  return player;
};
