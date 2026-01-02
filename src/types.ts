export interface SpecialCards {
  [key: string]: number;
}

export interface PlayerScore {
  name: string;
  bid: number | null;
  tricks: number | null;
  specialCards: SpecialCards;
  score: number;
}

export interface Round {
  roundNumber: number;
  playerScores: PlayerScore[];
  kraken: number;
  whale: number;
}

export interface SortedPlayerScore {
  name: string;
  score: number;
}
