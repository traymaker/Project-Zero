import { Player, newPlayer } from './actors/player';

export interface Save {
  /** internal save game identifier. Currently unused. */
  id: string;

  /** name of character for save game. */
  profileName: string;

  /** repesents player character in combat. */
  playerCharacter: Player;
}

export const newSave = (playerName: string): Save => {
  const save: Save = {
    id: crypto.randomUUID(),
    profileName: playerName,
    playerCharacter: newPlayer(playerName),
  };
  return save;
};
