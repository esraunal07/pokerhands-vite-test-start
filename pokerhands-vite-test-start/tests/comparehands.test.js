import { describe, it, expect } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

describe('CompareHands', () => {

    it('should recognize a Four of a Kind hand', () => {
        const hand1 = new Hand('♠A', '♣A', '♦A', '♥A', '♠5'); 
        expect(CompareHands.isFourOfAKind(hand1)).toBeGreaterThan(0); 
    });

    it('should recognize a Full House hand', () => {
        const hand1 = new Hand('♠3', '♣3', '♦3', '♠5', '♣5');  
        expect(CompareHands.isFullHouse(hand1)).toBeGreaterThan(0); // Full House score returnerer
    });

    it('should recognize the highest card when no other hand is formed', () => {
        const hand1 = new Hand('♠2', '♠3', '♠4', '♠5', '♠9');
        expect(CompareHands.isHighestCard(hand1)).toEqual(9); // highest card 9
    });

});
