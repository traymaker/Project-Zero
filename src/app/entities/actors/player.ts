import { Paladin } from './paladin';

export interface Player {
  /** internal Player identifier. Currently unused. */
  id: string;
  /** Player name for display. */
  name: string;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;
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
