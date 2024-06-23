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
    this.attack = 5;
    this.defense = 5;
    this.magic = 5;
    this.resistance = 5;
  }

  public override toString() {
    return this.name;
  }
}

export const createTestFoe = (): Foe => {
  const testFoe: Foe = {
    id: crypto.randomUUID(),
    name: 'test',
    attack: 5,
    defense: 5,
    magic: 5,
    resistance: 5,
  };
  return testFoe;
};
