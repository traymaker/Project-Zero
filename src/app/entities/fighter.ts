export interface Fighter {
  /** internal fighter identifier. Currently unused. */
  id: string;
  /** fighter name for display. */
  name: string;
  attack: number;
  defense: number;
  magic: number;
  resistance: number;
}

export const newPlayer = (name: string): Fighter => {
  const player: Fighter = {
    id: crypto.randomUUID(),
    name: name,
    attack: 10,
    defense: 10,
    magic: 10,
    resistance: 10,
  };
  return player;
};
