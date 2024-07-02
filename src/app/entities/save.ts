import { Player, newPlayer } from './actors/player';

export class Save {
  /** internal save game identifier. Currently unused. */
  id: string;

  /** name of character for save game. */
  profileName: string;

  /** repesents player character in combat. */
  playerCharacter: Player;

  constructor(id: string, profileName: string, playerCharacter: Player) {
    this.id = id;
    this.profileName = profileName;
    this.playerCharacter = playerCharacter;
  }
}

export const newSave = (playerName: string): Save => {
  const save: Save = {
    id: crypto.randomUUID(),
    profileName: playerName,
    playerCharacter: newPlayer(playerName),
  };
  return save;
};
