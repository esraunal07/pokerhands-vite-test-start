import { describe, it, expect } from 'vitest';
import CompareHands from '../CompareHands.js';
import Hand from '../Hand.js';

describe('CompareHands - Full House', () => {
    it('should recognize a valid Full House hand', () => {
        const hand = new Hand('♠3', '♣3', '♦3', '♠5', '♣5');
        expect(CompareHands.isFullHouse(hand)).toBeGreaterThan(0); // Geçerli Full House puan döndürmeli
    });

    it('should recognize another valid Full House hand', () => {
        const hand = new Hand('♠K', '♣K', '♦K', '♠2', '♣2');
        expect(CompareHands.isFullHouse(hand)).toBeGreaterThan(0); // Geçerli Full House puan döndürmeli
    });

    it('should not recognize a hand that is not a Full House', () => {
        const hand = new Hand('♠2', '♣3', '♦4', '♥5', '♠6');
        expect(CompareHands.isFullHouse(hand)).toEqual(0); // Full House değil, 0 döndürmeli
    });

    it('should not recognize a hand with three of a kind but not a Full House', () => {
        const hand = new Hand('♠9', '♣9', '♦9', '♥5', '♠7');
        expect(CompareHands.isFullHouse(hand)).toEqual(0); // Sadece üç eşleşme var, Full House değil
    });

    it('should not recognize a hand with two pairs as Full House', () => {
        const hand = new Hand('♠A', '♣A', '♦K', '♥K', '♠2');
        expect(CompareHands.isFullHouse(hand)).toEqual(0); // İki çift, Full House değil
    });
});
