import { Actor } from './actor';

export interface Foe extends Actor {
  /** internal foe identifier. Currently unused. */
  id: string;
  /** foe name for display. */
  name: string;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;
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
