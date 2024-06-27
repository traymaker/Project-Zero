import { Actor } from './actor';

export class Foe extends Actor {
  /** internal foe identifier. Currently unused. */
  id: string;
  /** foe name for display. */
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

export const createTestFoe = (): Foe => {
  const testFoe: Foe = new Foe(
    crypto.randomUUID(),
    'test',
    5,
    5,
    5,
    5,
  );
  return testFoe;
};
