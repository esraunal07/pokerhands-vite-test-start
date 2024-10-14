export default class Card {
  
  constructor(suit, rank) {
    if (!suit || !rank) {
      throw new Error('Suit and rank must be provided.');
    }
    this.suit = suit;
    this.rank = rank;
  }

}