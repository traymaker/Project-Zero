import { Actor } from './actor';

export class Player extends Actor {
  /** internal Player identifier. Currently unused. */
  id: string;
  /** Player name for display. */
  name: string;
  movement: number;

  constructor(
    id: string,
    name: string,
    movement: number,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.movement = movement;
  }

  public getName(): string {
    return this.name;
  }
}

export const newPlayer = (name: string): Player => {
  const player: Player = new Player(
    crypto.randomUUID(),
    name,
    6,
  );
  return player;
};
