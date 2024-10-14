import { describe, it, expect } from 'vitest';
import Card from '../Card.js';

describe('Card Class', () => {
    it('should create a card with the correct suit and rank', () => {
        const card = new Card('♠', 'A');
        expect(card.suit).toBe('♠');
        expect(card.rank).toBe('A');
    });

    it('should create a card with different suits and ranks', () => {
        const card1 = new Card('♦', '2');
        const card2 = new Card('♥', 'K');
        expect(card1.suit).toBe('♦');
        expect(card1.rank).toBe('2');
        expect(card2.suit).toBe('♥');
        expect(card2.rank).toBe('K');
    });

    it('should throw an error if suit or rank is missing', () => {
        expect(() => new Card()).toThrow();
        expect(() => new Card('♠')).toThrow();
    });
});
