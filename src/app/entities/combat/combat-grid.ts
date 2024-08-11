import { CombatTile } from './combat-tile';

// These classes should not handle mutation. They should mostly store data, while mutation is handled by the services. 
export class CombatGrid {
  grid: CombatTile[][] = [[]];
  playerCurrentTile: CombatTile;
  foeCurrentTiles: Map<string, CombatTile>;

  constructor(tiles: CombatTile[][], playerCurrentTile: CombatTile, foeCurrentTiles: Map<string, CombatTile>) {
    this.grid = tiles;
    this.playerCurrentTile = playerCurrentTile;
    this.foeCurrentTiles = foeCurrentTiles;
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
