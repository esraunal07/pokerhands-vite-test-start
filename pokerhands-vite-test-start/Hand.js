import Card from './Card.js';

export default class Hand {
  constructor(...cards) {
    // Ensure the hand consists of exactly 5 cards
    if (cards.length !== 5) {
      throw new Error('A hand must be 5 cards!');
    }

    this.cards = cards.map(card => {
      // Create a new Card instance for string representations of cards
      if (typeof card === 'string') {
        // Check if the card string is valid
        if (card.length !== 2) {
          throw new Error('A non card found in your hand!'); // Error for invalid card
        }
        return new Card(card[0], card[1]);
      }
      
      // Check if the card is a valid Card instance
      if (!(card instanceof Card)) {
        throw new Error('A non card found in your hand!');
      }
      return card;
    });
  }
}
