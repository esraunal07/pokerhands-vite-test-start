import { describe, it, expect } from 'vitest';
import Hand from '../Hand.js';
import Card from '../Card.js';

describe('Hand Class - Edge Cases', () => {
  it('should throw an error if a non-card value is included', () => {
    // 'invalidCard' geçersiz bir değer olduğu için hata fırlatmasını bekliyoruz       
    expect(() => new Hand(new Card('♠', 'A'), new Card('♣', 'K'), 'invalidCard', new Card('♦', 'Q'), new Card('♠', '5'))).toThrow('A non card found in your hand!');
  });

  it('should create a valid hand with Card instances', () => {
    const hand = new Hand(
      new Card('♠', 'A'),
      new Card('♣', 'K'),
      new Card('♦', 'Q'),
      new Card('♥', 'J'),
      new Card('♠', '10')
    );
    expect(hand.cards.length).toBe(5);
    expect(hand.cards[0].rank).toBe('A');
  });
});
