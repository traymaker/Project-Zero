import { CombatTile } from './combat-tile';

export class CombatGrid {
  grid: CombatTile[][] = [[]];

  constructor(tiles: CombatTile[][]) {
    this.grid = tiles;
  }

  public toString(): string {
    let stringOut = '';
    for (let i = 0; i < this.grid.length; i++) {
      stringOut += '\n';
      for (let j = 0; j < this.grid[i].length; j++) {
        stringOut += this.grid[i][j].toString();
      }
    }
    return stringOut;
  }

  public getTile(x: number, y: number): CombatTile {
    return this.grid[x][y];
  }
}
